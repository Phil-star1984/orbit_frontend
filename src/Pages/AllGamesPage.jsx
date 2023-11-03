import React from "react";
import useAxiosFetch from "../hooks/useAxiosFetch.jsx";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Chat from "../components/Chat.jsx";


function AllGamesPage() {
  const { data, fetchError, isLoading } = useAxiosFetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_KEY}`
  );
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (data && data.results) {
      setGames(data.results);
      console.log(games);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (fetchError) {
    return <p>Error: {fetchError}</p>;
  }

  return (
    <>
      <Chat />
      <div className="grid grid-cols-2 gap-4 p-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {games.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full h-40 md:h-60 object-cover"
                src={item.background_image}
                alt={item.name}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rating: {item.rating}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Updated: {item.updated}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-lila rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllGamesPage;
