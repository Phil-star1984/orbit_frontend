import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";
import axios from "axios";
import api from "../../api/apiRAWG.jsx";
import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import CarouselForDeals from "../components/CarouselForDeals.jsx";
import { Carousel } from "@material-tailwind/react";
import PriceBox from "../components/PriceBox.jsx";
import { Rating } from "@material-tailwind/react";

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

  // const [rated, setRated] = React.useState(detailsGameData);

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
      </div>

      {/* <div>
        Ratings & Metacritic Metcritic score: {detailsGameData.metacritic} ,
        Overall rating: {detailsGameData.rating} , Detailed ratings:
        {detailsGameData.ratings.map((rating) => (
          <div>
            <p>{rating.title}</p>
            <p>{rating.percent} %</p>
          </div>
        ))}
      </div> */}

      <div className="bg-white py-24 sm:py-2">
        <div className="mx-auto max-w-6xl  px-6 lg:px-8">
          {/* description */}

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Rating
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                <Rating value={Math.round(detailsGameData.rating)} readonly />
              </p>
              {/* description */}
              <div className="mt-10 flex items-center gap-x-4">
                <h5 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Description
                </h5>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {/* {detailsGameData.genres.map((genre) => ( */}
                <li className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  Release Date: {detailsGameData.released}
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  Playtime: {detailsGameData.playtime} h
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <ul>Developer / Publisher: </ul>
                  {detailsGameData.developers.map((developer) => (
                    <li key={developer.id}>{developer.name}</li>
                  ))}
                </li>
              </ul>
              {/* genres */}
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Genres
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {detailsGameData.genres.map((genre) => (
                  <li key={genre.id} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {genre.name}
                  </li>
                ))}
              </ul>
              {/* //tags */}
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Tags
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {detailsGameData.tags.map((tag) => (
                  <li key={tag.id} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>

                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl  font-bold tracking-tight text-gray-900">
                      {deal.salePrice}€
                    </span>

                    {/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      <p>
                        <br />
                        Regular: {deal.normalPrice}€
                      </p>
                    </span>
                    <a className="mt-2 flex items-baseline justify-center rounded-md bg-yellow-700 w-12 py-3 text-center text-sm font-semibold text-white shadow-s focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                      <p>
                        {" "}
                        {-(
                          (1 - deal.salePrice / deal.normalPrice) *
                          100
                        ).toFixed() + "% OFF"}
                      </p>
                    </a> */}
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buy now
                  </a>
                  <a
                    href="#"
                    className="mt-5 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add to Cart
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Description
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {detailsGameData.description_raw}
          </p>
        </div> */}
      </div>
      <div className="mx-auto max-w-2xl sm:text-center">
        <h3 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl mt-20">
          Description
        </h3>
        <p className="mt-6 mb-24 text-lg leading-8 text-gray-600">
          {detailsGameData.description_raw}
        </p>
      </div>
      {/* /////// */}
      {relatedGames.results.length === 0 ? (
        ""
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-1 mb-20 block w-full rounded-md   text-center text-3xl font-semibold text-black ">
              <h2> Other games from the family:</h2>
            </div>
            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Other games from the family:
            </h2> */}

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {/* {products.map((product) => ( */}
              {relatedGames.results.map((game) => (
                <div key={game.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={`${game.background_image}`}
                      alt={`${game.name}`}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        {/* <a href={product.href}> */}
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {game.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {/* {product.color} */}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {/* {product.price} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        // <div>
        //   <h2>Other games from the family:</h2>
        //   {relatedGames.results.map((game) => (
        //     <div key={game.id}>
        //       <img
        //         className="flex justify-center items-center border h-32 w-48 bg-blue-100"
        //         // className="peer hover:opacity-20 w-60 h-20 md:h-60 object-cover"
        //         src={`${game.background_image}`}
        //         alt={`${game.name}`}
        //       />
        //       <p>{game.name}</p>
        //     </div>
        //   ))}
        // </div>
      )}

      {/* /////videos */}
      <div className="w-120 h-60 justify-center  rounded-lg">
        <h2>Videos & Trailers</h2>
        {gameVideos.results.length === 0 ? (
          ""
        ) : (
          <Carousel className="rounded-xl ">
            <video className="w-120 h-60 rounded-lg" controls autoPlay>
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                type="video/mp4"
                // src={gameVideos.results[0].data.map((key) => {
                //   id;
                // })}
              />
            </video>
            {/* <video className="h-full w-full rounded-lg" controls autoPlay> */}
            <video className="w-120 h-60 rounded-lg" controls autoPlay>
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                type="video/mp4"
              />
            </video>
          </Carousel>

          // <div>
          //   <video className="h-full w-full rounded-lg" controls autoPlay>
          //     <source src="/demo.mp4" type="video/mp4" />
          //     Your browser does not support the video tag.
          //   </video>
          // </div>
        )}
      </div>
    </div>
  );
}
export default DealPage;
