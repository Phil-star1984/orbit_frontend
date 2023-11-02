import React from "react";
import useFetchRAWG from "../../hooks/useFetchRAWG.jsx";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import CarouselForDeals from "../components/CarouselForDeals.jsx";

function DealPage() {
  const { rawTitle } = useParams();
  const { data, loading } = useFetchRAWG(`/games?search=${rawTitle}`);

  if (loading) {
    //const game = data.results.find((game)=>{game.name === rawTitle})

    return (
      <div className="w-full flex justify-center sm:my-16 md:my-28 lg:my-36">
        <PacmanLoader
          color="#D00EDD"
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }
  const gameData = data.results[0];
  const heroPics = gameData.short_screenshots;

  return (
    <div className="text-white">
      <div className="relative mb-[36rem] md:mb-[25rem] lg:mb-[40rem]">
        <div className="absolute">
          <CarouselForDeals
            url1={heroPics[0].image}
            url2={heroPics[1].image}
            url3={heroPics[2].image}
            url4={heroPics[3].image}
            url5={heroPics[4].image}
            url6={heroPics[5].image}
          />
        </div>
        <div className="w-1/5 h-32 sm:h-36 md:h-48 bg-white z-10 absolute my-96 mx-[24rem] sm:mx-[28rem] md:my-96 md:mx-[34rem] lg:w-1/3 lg:my-96 lg:mx-[44rem] xl:w-1/3 xl:mx-[52rem] 2xl:mx-[70rem]">
          Price Box
        </div>
      </div>

      <div className="m-0">
        <ul>Genres</ul>
        {gameData.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </div>
      <div>Videos & Trailers </div>
      <div>Ratings & Metacritic</div>
      <div>
        <p>Playtime: {gameData.playtime} h </p>
        <p>Release Date: {gameData.released} </p>
      </div>
      <div>Description</div>
    </div>
  );
}
export default DealPage;
