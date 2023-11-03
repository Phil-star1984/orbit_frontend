import { React, useState, useEffect } from "react";

function Chat() {
  const [message, setMessage] = useState(null);
  const [value, setValue] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:5005/completions",
        options
      );
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: "user",
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  /* console.log(previousChats); */

  const currentChat = previousChats.filter(
    (previousChat) => previousChat.title === currentTitle
  );
  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChat) => previousChat.title))
  );
  /* console.log(uniqueTitles); */

  return (
    <div className="pb-20 flex flex-col items-center bg-gradient-to-r from-black to-lila">
      <h1 className="text-7xl mt-20 font-semibold text-center max-w-screen-xl text-transparent bg-clip-text bg-gradient-to-r from-pink to-lila duration-1000 animate-pulse">
        OrbitGPT
      </h1>
      <p className="text-white text-center mb-20">
        Ask anything you like related to gaming
      </p>
      <div className="w-5/6 max-w-screen-xl overflow-y-auto">
        {!currentTitle && <h1 className="text-center"></h1>}
        <ul className="grid grid-rows-2 gap-2 feed">
          {currentChat?.map((chatMessage, index) => (
            <li key={index} className="border rounded-lg p-3">
              <p className="text-pink role font-light">{chatMessage.role}</p>
              <p className="text-white text-xl font-light">
                {chatMessage.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex w-1/2 max-w-screen-sm min-w-fit">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="ml-3 w-28 ml-2p-2 bg-gradient-to-r from-pink to-lila text-white rounded-md"
          onClick={getMessages}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
