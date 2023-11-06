import { React, useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useAuth } from "../Context/AuthProvider";

function Chat() {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const { userData } = useAuth();

  const getMessages = async () => {
    const userInput = `Answer in a maximum of two sentences. ${value}`;
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: userInput,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "https://orbitback.onrender.com/completions",
        options
      );
      const data = await response.json();
      /* console.log(data); */
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
    console.log(userInput);
    setTimeout(() => {
      setValue("");
    }, 100);

    console.log(userData);
  };

  useEffect(() => {
    /* console.log(currentTitle, value, message); */
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: userData.firstName || "User",
          content: value,
        },
        {
          title: currentTitle,
          /* role: message.role.toUpperCase(), */
          role: "OrbitGPT",
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
    <div className="py-28 flex flex-col items-center bg-gradient-to-r from-black to-lila">
      <h1 className="text-7xl font-semibold text-center max-w-screen-xl text-transparent bg-clip-text bg-gradient-to-r from-pink to-lila duration-1000 animate-pulse">
        OrbitGPT
      </h1>
      <p className="text-white text-center mb-4">
        Ask anything related to gaming
      </p>
      <div className="w-5/6 max-w-screen-xl overflow-y-auto">
        {!currentTitle && <h1 className="text-center"></h1>}
        <ul className="grid grid-rows-2 gap-2 feed">
          {currentChat?.map((chatMessage, index) => (
            <li key={index} className="border rounded-lg p-3">
              <p className="text-pink text-sm role font-light">
                {chatMessage.role}
              </p>
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
        <Button
          className="ml-3 w-32 text-white bg-gradient-to-r from-pink to-lila hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-md text-sm px-5 py-2.5 text-center"
          onClick={getMessages}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Chat;
