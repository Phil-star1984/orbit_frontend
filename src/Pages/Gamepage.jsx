import React from "react";
import axios from "axios";
import api from "../../api/apiRAWG.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import CarouselForDeals from "../components/CarouselForDeals.jsx";
import calcArbitraryPrice from "../../utility/calcArbetraryPrice.jsx";
import VideosTrailers from "../components/VideosTrailers.jsx";

function GamePage() {
  const { id } = useParams();
  const key = import.meta.env.VITE_KEY;

  const [gamePics, setGamePics] = useState();
  const [detailsGameData, setDetailsGameData] = useState();
  const [relatedGames, setRelatedGames] = useState();
  const [gameVideos, setGameVideos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        let urls = [

            `/games/${id}/screenshots?&key=${key}`,
            `/games/${id}?&key=${key}`,
            `/games/${id}/game-series?&key=${key}`,
            `/games/${id}/movies?&key=${key}`
           ];

        setFoundGameData(response.data);

        await Promise.all(urls.map((url) => api.get(url))).then(
          ([
            { data: gamePics },
            { data: detailsGameData },
            { data: relatedGames },
            { data: gameVideos },
          ]) => {
            setGamePics(gamePics)
            setDetailsGameData(detailsGameData);
            setRelatedGames(relatedGames);
            setGameVideos(gameVideos);
          }
        );
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [rawTitle]);

  console.log(gamePics);
  console.log(detailsGameData);
  console.log(relatedGames);
  console.log(gameVideos);

  if (loading) {
    return (
      <div className="w-full flex justify-center my-36">
        <PacmanLoader
          color="#D00EDD"
          loading={loading}
          size={80}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }

  return (
    <div className="text-white">
      <div>
        <div>
          <CarouselForDeals
            url1={gamePics.results[0].short_screenshots[0].image}
            url2={gamePics.results[0].short_screenshots[1].image}
            url3={gamePics.results[0].short_screenshots[2].image}
            url4={gamePics.results[0].short_screenshots[3].image}
            url5={gamePics.results[0].short_screenshots[4].image}
            url6={gamePics.results[0].short_screenshots[5].image}
          />
        </div>
        <div>Price Box</div>
        <div>ESRB Rating: {detailsGameData.esrb_rating.name}</div>
      </div>

      <div className="m-0">
        <ul>Genres</ul>
        {detailsGameData.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </div>
      <div>
        <ul>Tags</ul>
        {detailsGameData.tags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </div>
      <div>
        Videos & Trailers
        {gameVideos.results.length === 0 ? (
          ""
        ) : (
          <div>
            <h2>videos here</h2>
            <VideosTrailers />
          </div>
        )}
      </div>

      <div>
        Ratings & Metacritic Metcritic score: {detailsGameData.metacritic}
        Overall rating: {detailsGameData.rating}
        Detailed ratings:
        {detailsGameData.ratings.map((rating) => (
          <div>
            <p>{rating.title}</p>
            <p>{rating.percent} %</p>
          </div>
        ))}
      </div>
      <div>
        <p>Playtime: {detailsGameData.playtime} h </p>
        <p>Release Date: {detailsGameData.released} </p>
      </div>
      <div>
        <ul>Developer / Publisher: </ul>
        {detailsGameData.developers.map((developer) => (
          <li key={developer.id}>{developer.name}</li>
        ))}
      </div>
      <div>
        Description
        {detailsGameData.description_raw}
      </div>
      {relatedGames.results.length === 0 ? (
        ""
      ) : (
        <div>
          Other games from the family:
          {relatedGames.results.map((game) => (
            <div key={game.id}>
              <img src={`${game.background_image}`} alt={`${game.name}`} />
              <p>{game.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default GamePage;
