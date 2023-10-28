import React from "react";
import useAxiosFetch from "../hooks/useAxiosFetch.jsx";
import { useState, useEffect } from "react";

function AllGamesPage() {
  const { data, fetchError, isLoading } = useAxiosFetch(
    "https://api.rawg.io/api/games?key=a68824e64475471abcd6b96285019ac7&dates=2019-09-01,2019-09-30&platforms=18,1,7"
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
      <div className="grid grid-cols-4 gap-4 p-3">
        {games.map((item, index) => (
          <div
            key={index}
            className="rounded-lg text-white bg-lila shadow-lg p-3"
          >
            <h1>{item.name}</h1>
            <p>Rating: {item.rating}</p>
            <p>Updated: {item.updated}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllGamesPage;
