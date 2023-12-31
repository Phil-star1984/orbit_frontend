/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import TopListItem from "./TopListItem";
import calcArbitraryPrice from "../../utility/calcArbetraryPrice.jsx";


const TopList = ({ listTitle, handleAddToCart, page }) => {
  const [games, setGames] = useState([]);
  const key = import.meta.env.VITE_KEY;

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${key}&page_size=10&page=${page}`
        );

        const fetchedGames = response.data.results;
        // console.log(fetchedGames);
        setGames(fetchedGames);
      } catch (error) {
        console.error("Error fetching games:", error.message);
      }
    };

    getGames();
  }, []);

  return (
    <div className="w-full md:full flex flex-col">
      <h2 className="text-4xl font-semibold mb-8 text-pink">{listTitle}</h2>
      <div className="flex flex-col gap-1">
        {games.map((game) => {
          const arbitraryPrice = calcArbitraryPrice(game.id);
          return (
            <TopListItem
              key={game.id}
              id={game.id}
              title={game.name}
              genres={game.genres}
              imageSrc={game.background_image}
              price={arbitraryPrice}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopList;
