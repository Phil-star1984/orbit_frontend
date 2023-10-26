import React from "react";

export default function Newsletter() {
  return (
    <div className="flex justify-center h-screen items-center py-3 px-2">
      <div className=" bg-white flex flex-col gap-4 sm:flex-row justify-around p-8 lg:p-16 drop-shadow-lg rounded-lg max-w-5xl w-full">
        <div className="text-xl md:text-2xl font-bold whitespace-nowrap">
          Do not miss any important news.<br></br>
          <span className="text-[#ceba36] ">Subscribe to the Newsroom</span>
        </div>
        <div className="flex gap-2 items-center justify-center max-w-xs lg:max-w-md w-full">
          <input
            type="text"
            className="rounded-lg lg:py-2 flex-1 appearance-none border border-gray-300 w-full py-1 px-4 bg-black text-gray-700 placeholder-gray-400 shadow-sm text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[#6a6b6e] focus:border-transparent"
            placeholder="Email"
          />
          <button
            className="px-4 py-1 lg:py-2 text-sm md:text-base lg:text-lg font-semibold text-white bg-[#ceba36] rounded-lg shadow-md hover:bg-[#6a6b6e] focus:outline-none focus:ring-2 focus:ring-[#6a6b6e] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
