import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";
import axios from "axios";
import api from "../../api/apiRAWG.jsx";
import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import CarouselForDeals from "../components/CarouselForDeals.jsx";
import PriceBox from "../components/PriceBox.jsx";

function DealPage() {
  const { rawTitle } = useParams();
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
          {/* <PriceBox /> */}
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div
              className="rounded-2xl bg-blue-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center
       lg:py-16"
            >
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-700">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-bold tracking-tight  bg-green-200 text-gray-900">
                    <p>
                      {" "}
                      {-(
                        (1 - deal.salePrice / deal.normalPrice) *
                        100
                      ).toFixed() + "% OFF"}
                    </p>
                  </span>
                  <span className="text-7xl font-bold tracking-tight  bg-yellow-200 text-gray-900">
                    <p>{deal.salePrice}</p>
                    <span className="text-sm font-semibold leading-8 tracking-wide text-gray-600">
                      <p>{deal.normalPrice}</p>
                    </span>
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy now
                </a>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-yellow-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add to Cart
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
        ESRB Rating:
        {detailsGameData.esrb_rating === null
          ? " n/a"
          : detailsGameData.esrb_rating.name}
        <div>
          <p>{deal.salePrice}</p>
          <p>{deal.normalPrice}</p>
          <p>
            {" "}
            {-((1 - deal.salePrice / deal.normalPrice) * 100).toFixed() +
              "% OFF"}
          </p>
        </div>
        <div>
          ESRB Rating:
          {detailsGameData.esrb_rating === null
            ? " n/a"
            : detailsGameData.esrb_rating.name}
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
