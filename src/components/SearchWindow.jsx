import React, { useState, useEffect } from "react";

const SearchWindow = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //function to fetch data from the API
    const fetchData = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          // 'API_URL' is your actual API endpoint
          //   (`API_URL?query=${searchQuery}`)
          const response = await fetch(
            // `https://orbitback.onrender.com?query=${searchQuery}`
            `https://api.rawg.io/api/games?key=5f0755b5de4f4e5b92bb269fbb527881&dates=2019-09-01,2019-09-30&platforms=18,1,7?query=${searchQuery}`
          );
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    /*     <div>
      <input
        type="text"
        placeholder="&#128270; Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div> */

    <div className="relative">
      <input
        className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Search..."
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchWindow;
