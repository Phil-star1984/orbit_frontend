import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";
import api from "../../api/apiRAWG.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import CarouselForDeals from "../components/CarouselForDeals.jsx";
import { Rating } from "@material-tailwind/react";
import { useCart } from "../Context/CartProvider";
import { useNavigate } from "react-router-dom";
import calcArbitraryPrice from "../../utility/calcArbetraryPrice.jsx";

function GamePage() {
  const { id } = useParams();
  const key = import.meta.env.VITE_KEY;
  const [foundGameData, setFoundGameData] = useState();
  const [gamePics, setGamePics] = useState();
  const [relatedGames, setRelatedGames] = useState();
  const [gameVideos, setGameVideos] = useState();
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  const navigate = useNavigate();
  // const [rated, setRated] = React.useState(detailsGameData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/games/${id}?&key=${key}`);

        let urls = [
          `/games/${id}/screenshots?&key=${key}`,
          `/games/${id}/game-series?&key=${key}`,
          `/games/${id}/movies?&key=${key}`,
        ];
        setFoundGameData(response.data);

        await Promise.all(urls.map((url) => api.get(url))).then(
          ([
            { data: gamePics },
            { data: relatedGames },
            { data: gameVideos },
          ]) => {
            setGamePics(gamePics);
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
  }, []);

  console.log(foundGameData);
  console.log(gamePics);
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

  const handleCart = () => {
    addToCart(foundGameData.id);
  };

  const handleBuy = () => {
    addToCart(foundGameData.id);
    navigate("/cart");
  };

  return (
    <div className="text-white">
      <div>
        <div>
          <CarouselForDeals
            videoUrl={
              gameVideos && gameVideos.results.length > 0
                ? gameVideos.results[0].data["max"]
                : undefined
            }
            url1={gamePics.results[0].image}
            url2={gamePics.results[1].image}
            url3={gamePics.results[2].image}
            url4={gamePics.results[3].image}
            url5={gamePics.results[4].image}
            url6={gamePics.results[5].image}
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

      <div className="bg-white py-10 sm:py-1">
        <div className="mx-auto max-w-6xl  px-6 lg:px-8">
          {/* description */}
          <h1 className="text-3xl font-bold tracking-tight text-pink mt-10 ml-10">
            {foundGameData.name}
          </h1>
          <div className="mx-auto mt-16 mb-10 max-w-2xl rounded-3xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-lila">
                Rating
              </h3>
              <div className="mt-6 text-base leading-7 text-gray-600">
                <Rating value={Math.round(foundGameData.rating)} readonly />
              </div>
              {/* /// ESRB rating*/}

              {foundGameData.esrb_rating === null ? (
                " n/a"
              ) : (
                <a className="mt-10 block w-32 rounded-md bg-yellow-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                  ESRB Rating: {foundGameData.esrb_rating.name}
                </a>
              )}
              {/* // */}
              {/* description */}
              <div className="mt-10 flex items-center gap-x-4">
                <h5 className="flex-none text-sl font-semibold leading-6 text-lila">
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
                    className="h-6 w-5 flex-none text-lila"
                    aria-hidden="true"
                  />
                  Release Date: {foundGameData.released}
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-lila"
                    aria-hidden="true"
                  />
                  Playtime: {foundGameData.playtime} h
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-lila"
                    aria-hidden="true"
                  />
                  <ul>Publisher: </ul>
                  {foundGameData.developers.map((developer) => (
                    <span key={developer.id}>{developer.name}</span>
                  ))}
                </li>
              </ul>

              {/* genres */}
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sl font-semibold leading-6 text-lila">
                  Genres
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {foundGameData.genres.map((genre) => (
                  <li key={genre.id} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-lila"
                      aria-hidden="true"
                    />
                    {genre.name}
                  </li>
                ))}
              </ul>
              {/* //tags */}
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sl font-semibold leading-6 text-lila">
                  Tags
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {foundGameData.tags.map((tag) => (
                  <li key={tag.id} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-lila"
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
                      {calcArbitraryPrice(foundGameData.id)}€
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
                  <button
                    onClick={handleBuy}
                    className="mt-10 block w-full rounded-md bg-lila px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
                  >
                    Buy now
                  </button>
                  <button
                    onClick={handleCart}
                    className="mt-5 block w-full rounded-md bg-lila px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
                  >
                    Add to Cart
                  </button>
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
          {foundGameData.description_raw}
        </p>
      </div>
      {/* Videos&Trailers */}
      {/* /////videos */}
      <div className="m:text-center w-full h-full bg-black">
        <div className="mx-auto max-w-6xl  px-6 lg:px-8">
          <div className="justify-center rounded-lg">
            {gameVideos.results.length === 0 ? (
              ""
            ) : (
              <div>
                <h3 className="text-3xl mb-5 font-bold tracking-tight sm:text-center text-white-900 sm:text-4xl pt-5">
                  Game Videos
                </h3>

                <video
                  className="w-120 h-60 justify-center rounded-lg mx-auto md:text-center"
                  controls
                >
                  <source
                    src={`${gameVideos.results[0].data["max"]}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              // /
              // <Carousel className="rounded-xl ">
              //   <video className="w-120 h-60 rounded-lg" controls autoPlay>
              //     <source
              //   src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"
              //   type="video/mp4"
              // />
              //     />
              //   </video>
              //   {/* <video className="h-full w-full rounded-lg" controls autoPlay> */}
              //   <video className="w-120 h-60 rounded-lg" controls autoPlay>
              //     <source
              //       src="https://vod.api.video/vod/vi3w2r3c45yMEKpdEThWQD2n/mp4/source.mp4"
              //       type="video/mp4"
              //     />
              //   </video>
              // </Carousel>
            )}
          </div>
        </div>
      </div>
      {/* /////// */}
      {relatedGames.results.length === 0 ? (
        ""
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {/* ///// */}
            <div className="mt-1 mb-20 block w-full rounded-md   text-center text-3xl font-semibold text-black ">
              <h2> Other games from the series</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 p-3 sm:grid-cols-3 md:grid-cols-4 mx-24 ">
              {relatedGames.results.map((game) => (
                <div
                  key={game.id}
                  className="max-w-sm bg-black border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <Link to={"/:gameID"}>
                    <img
                      className="rounded-t-lg w-full h-40 md:h-60 object-cover"
                      src={`${game.background_image}`}
                      alt={`${game.name}`}
                    />
                  </Link>
                  <div className="p-5">
                    <Link to={"/:gameID"}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
                        {game.name}
                      </h5>
                    </Link>
                    <Rating value={Math.round(game.rating)} readonly />
                    {/* <p className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
                {calcArbitraryPrice(game.id)} €
              </p> */}

                    <Link
                      to={"/:gameID"}
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-lila rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      See more
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                    <div className="flex flex-col mt-4 text-gray-500">
                      <div>
                        <p>Released: {game.released}</p>
                      </div>
                      <div>
                        <p className="mt-1">
                          {" "}
                          ESRB:{" "}
                          {game.esrb_rating === null
                            ? " n/a"
                            : game.esrb_rating.name}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* //// */}
            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Other games from the family:
            </h2> */}
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

        ////
      )}
    </div>
  );
}
export default GamePage;
