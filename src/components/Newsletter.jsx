import React, { useState } from "react";

export default function Newsletter() {
  //state variables for email and a message to display to the user
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // check if the email is valid
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // API call to send the email to your server
    // display a success message
    setMessage(`Thank you for subscribing with email: ${email}`);
    setEmail(""); // Clear the input field after successful submission.
  };

  //   return (
  //     <div>
  //       <h2>Subscribe to Our Newsletter</h2>
  //       <form onSubmit={handleFormSubmit}>
  //         <input
  //           type="email"
  //           placeholder="Enter your email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //         <button type="submit">Subscribe</button>
  //       </form>
  //       <p>{message}</p>
  //     </div>
  //   );
  // }

  return (
    <div className="flex justify-center h-[33rem] items-center py-3 px-2 bg-[url('../src/assets/orbit_newsletter.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="bg-black flex flex-col items-center gap-4 sm:flex-row justify-around p-8 lg:p-16 drop-shadow-lg rounded-xl max-w-5xl w-full">
        <div className="text-xl text-white md:text-2xl font-bold whitespace-nowrap">
          Don't miss any ORBIT Gaming News.<br></br>
          <span className="text-lila">Subscribe to our Newsletter</span>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center max-w-xs lg:max-w-md w-full">
          <form onSubmit={handleFormSubmit} class="flex">
            <input
              // type="text"
              type="email"
              className="rounded-lg lg:py-2 flex-1 appearance-none border border-gray-300 w-full py-1 px-4 mr-3 bg-black text-gray-700 placeholder-gray-400 shadow-sm text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#6a6b6e] focus:border-transparent"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="px-4 py-1 lg:py-2 text-sm md:text-base lg:text-lg font-semibold text-white transition-colors duration-200 transform bg-gradient-to-r from-pink to-lila rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white weight-light">{message}</p>
        </div>
      </div>
    </div>
  );
}
