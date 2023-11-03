/* eslint-disable react/prop-types */
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const SearchBtn = ({ setResults }) => {
  const [input, setInput] = useState("");
  const key = import.meta.env.VITE_KEY;

  const fetchData = (value) => {
    fetch(`https://api.rawg.io/api/games?search=${value}&key=${key}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data?.results.filter((game) => {
          return game?.name.toLowerCase().includes(value);
        });
        setResults(results);
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      {/* <div className="searchWindow">
        <input
          id="search"
          type="text"
          placeholder=" &#128270; Search"
          onChange={(e) => handleChange(e.target.value)}
          value={input}
        />
      </div> */}

      <div className="relative">
        <input
          className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Search..."
          onChange={(e) => handleChange(e.target.value)}
          value={input}
        />
        <div className="absolute right-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="absolute left-0 inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SearchBtn;
