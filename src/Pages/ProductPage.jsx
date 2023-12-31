import api from "../../api/apiRAWG.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import CarouselForDeals from "../components/CarouselForDeals.jsx";

function ProductPage() {
  const { gameID } = useParams();
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
          `/games/${id}/movies?&key=${key}`,
        ];

        setFoundGameData(response.data);

        await Promise.all(urls.map((url) => api.get(url))).then(
          ([
            { data: gamePics },
            { data: detailsGameData },
            { data: relatedGames },
            { data: gameVideos },
          ]) => {
            setGamePics(gamePics);
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
  }, []);

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
            url1={foundGameData.results[0].short_screenshots[0].image}
            url2={foundGameData.results[0].short_screenshots[1].image}
            url3={foundGameData.results[0].short_screenshots[2].image}
            url4={foundGameData.results[0].short_screenshots[3].image}
            url5={foundGameData.results[0].short_screenshots[4].image}
            url6={foundGameData.results[0].short_screenshots[5].image}
          />
        </div>
      </div>

      <div className="bg-white py-10 sm:py-1">
        <div className="mx-auto max-w-6xl  px-6 lg:px-8">
          <div className="mx-auto mt-16 mb-10 max-w-2xl rounded-3xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-lila">
                Rating
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                <Rating value={Math.round(detailsGameData.rating)} readonly />
              </p>
              {/* /// ESRB rating*/}

              {detailsGameData.esrb_rating === null ? (
                " n/a"
              ) : (
                <a className="mt-10 block w-32 rounded-md bg-yellow-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                  ESRB Rating: {detailsGameData.esrb_rating.name}
                </a>
              )}

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
                <li className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-lila"
                    aria-hidden="true"
                  />
                  Release Date: {detailsGameData.released}
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-lila"
                    aria-hidden="true"
                  />
                  Playtime: {detailsGameData.playtime} h
                </li>
                <li className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-lila"
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
                <h4 className="flex-none text-sl font-semibold leading-6 text-lila">
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
                {detailsGameData.tags.map((tag) => (
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
                      {deal.salePrice}€
                    </span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-lila px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
                  >
                    Buy now
                  </a>
                  <a
                    href="#"
                    className="mt-5 block w-full rounded-md bg-lila px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
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
      </div>
      <div className="mx-auto max-w-2xl sm:text-center">
        <h3 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl mt-20">
          Description
        </h3>
        <p className="mt-6 mb-24 text-lg leading-8 text-gray-600">
          {detailsGameData.description_raw}
        </p>
        <h3 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl mt-20">
          Trailer
        </h3>
      </div>
      {/* /////videos */}
      <div className="m:text-center w-full h-full">
        <div className="mx-auto max-w-6xl  px-6 lg:px-8">
          <div className="justify-center rounded-lg">
            {gameVideos.results.length === 0 ? (
              ""
            ) : (
              <div>
                <video
                  className="w-120 h-60 justify-center rounded-lg mx-auto m:text-center"
                  controls
                  autoPlay
                >
                  <source
                    src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>

      {relatedGames.results.length === 0 ? (
        ""
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-1 mb-20 block w-full rounded-md   text-center text-3xl font-semibold text-black ">
              <h2> Other games from the family:</h2>
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

                    <AddToCartBtn gameId={game.gameID} />

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
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
