import React from "react";

import axios from "axios";
import api from "../../api/apiRAWG.jsx";
=======
import { useLocation } from "react-router-dom";


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import CarouselForDeals from "../components/CarouselForDeals.jsx";
import PriceBox from "../components/PriceBox.jsx";

function DealPage() {

const {rawTitle} = useParams();
const key = import.meta.env.VITE_KEY;
const [foundGameData, setFoundGameData] = useState();
const [detailsGameData, setDetailsGameData] = useState();
const [relatedGames, setRelatedGames] = useState();
const [gameVideos, setGameVideos] = useState();
const [loading, setLoading] = useState(true);
const location = useLocation();
const deal = location.state.deal;


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/games?&search=${rawTitle}&key=${key}`);

        let urls = [
          `/games/${response.data.results[0].id}?&key=${key}`,
          `/games/${response.data.results[0].id}/game-series?&key=${key}`,
          `/games/${response.data.results[0].id}/movies?&key=${key}`,
        ];
        setFoundGameData(response.data);

        await Promise.all(urls.map((url) => api.get(url))).then(
          ([
            { data: detailsGameData },
            { data: relatedGames },
            { data: gameVideos },
          ]) => {
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

  console.log(foundGameData);
  console.log(detailsGameData);
  console.log(relatedGames);
  console.log(gameVideos);

  if (loading) {
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

  return (
    <div className="text-white">
      <div>
        <div>
          <CarouselForDeals
            url1={foundGameData.results[0].short_screenshots[0].image}
            url2={foundGameData.results[0].short_screenshots[1].image}
            url3={foundGameData.results[0].short_screenshots[2].image}
            url4={foundGameData.results[0].short_screenshots[3].image}
            url5={foundGameData.results[0].short_screenshots[4].image}
            url6={foundGameData.results[0].short_screenshots[5].image}
          />
        </div>
        <div>
          <PriceBox />
        </div>
        ESRB Rating:
        {detailsGameData.esrb_rating === null
          ? " n/a"
          : detailsGameData.esrb_rating.name}

        <div >
            Price Box
            <p>{deal.salePrice}</p>
            <p>{deal.normalPrice}</p>
            <p> {-((1 - deal.salePrice / deal.normalPrice) * 100).toFixed() +
                    "% OFF"}</p>

        </div>
        <div>
        ESRB Rating:
        {detailsGameData.esrb_rating===null?' n/a':( 
             detailsGameData.esrb_rating.name )}
        </div>
       

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
        {gameVideos.results.length === 0 ? "" : <div>videos come here</div>}
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
            <div className="flex justify-center " key={game.id}>
              <img
                className="peer hover:opacity-20 w-60 h-20 md:h-60 object-cover"
                src={`${game.background_image}`}
                alt={`${game.name}`}
              />
              <p>{game.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default DealPage;
