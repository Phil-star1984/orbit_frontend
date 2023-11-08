import { useState } from "react";
import useFetchRAWG from "../../hooks/useFetchRAWG.jsx";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddToCartBtn from "../components/buttons/AddToCartBtn.jsx";
import CategoryButtons from "../components/CattegoryButtons.jsx";
import calcArbitraryPrice from "../../utility/calcArbetraryPrice.jsx";
import { Rating } from "@material-tailwind/react";

function CategoriesPage() {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const { data, loading } = useFetchRAWG(`/games?&genres=${id}&page=` + count);

  const handlePrevious = () => {
    count <= 1 ? setCount(1) : setCount(count - 1);
  };
  const handleNext = () => {
    return setCount(count + 1);
  };

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
    <>
      <CategoryButtons />
      {/* PAGINATION */}
      <div className="flex place-content-center ml-24 mr-32 mb-3 ">
        {/* PREVIOUS BUTTON */}
        <button
          onClick={handlePrevious}
          disabled={count === 1 ? true : false}
          className="inline-flex items-center px-5 py-1.5 rounded-full text-sm font-medium text-center text-white  hover:text-pink hover:scale-125 focus:outline-none disabled:scale-100 disabled:text-gray-500 disabled:border-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </button>
        {/* PAGE NUMBER */}
        <span className="text-white flex mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#660099"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          {count}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#660099"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        {/* NEXT BUTTON  */}
        <button
          onClick={handleNext}
          className="inline-flex items-center px-5 py-1.5 rounded-full text-sm font-medium text-center text-white  hover:text-pink hover:scale-125 focus:outline-none"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* PAGINATION END */}

      <div className="grid grid-cols-2 gap-4 p-3 sm:grid-cols-3 md:grid-cols-4 mx-24 ">
        {data.results.map((game) => (
          <div
            key={`${game.id}`}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={`/games/${game.id}`}>
              <img
                className="rounded-t-lg w-full h-40 md:h-60 object-cover"
                src={`${game.background_image}`}
                alt={game.name}
              />
            </Link>
            <div className="p-5">
              <Link to={`/games/${game.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {game.name}
                </h5>
              </Link>
              <Rating value={Math.round(game.rating)} readonly />
              <p className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
                {calcArbitraryPrice(game.id)} €
              </p>
              <AddToCartBtn gameId={game.id} />

              <Link
                to={`/games/${game.id}`}
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
      {/* PAGINATION */}
      <div className="flex place-content-center ml-24 mr-32 mb-3">
        {/* PREVIOUS BUTTON */}
        <button
          onClick={handlePrevious}
          disabled={count === 1 ? true : false}
          className="inline-flex items-center px-5 py-1.5 rounded-full text-sm font-medium text-center text-white  hover:text-pink hover:scale-125 focus:outline-none disabled:scale-100 disabled:text-gray-500 disabled:border-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </button>
        {/* PAGE NUMBER */}
        <span className="text-white flex mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#660099"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          {count}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#660099"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        {/* NEXT BUTTON  */}
        <button
          onClick={handleNext}
          className="inline-flex items-center px-5 py-1.5 rounded-full text-sm font-medium text-center text-white  hover:text-pink hover:scale-125 focus:outline-none"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* PAGINATION END */}
    </>
  );
}

export default CategoriesPage;
