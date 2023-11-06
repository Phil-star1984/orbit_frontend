import { React, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import useFetchRAWG from "../../hooks/useFetchRAWG.jsx";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddToCartBtn from "../components/buttons/AddToCartBtn.jsx";
import CategoryButtons from "../components/CattegoryButtons.jsx";

function CategoriesPage() {
  const { id } = useParams();
  const { data, loading } = useFetchRAWG(`/games?&genres=${id}`);



 

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
      <h3 className="text-white font-bold sm:text-4xl text-center py-12">
        Games
      </h3>
      <div className="grid grid-cols-2 gap-4 p-3 sm:grid-cols-3 md:grid-cols-4">
        {
          
          data.results.map((game) => (
            <div
              key={`${game.id}`}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
               
            <Link to={"/"}>
              <img
                className="rounded-t-lg w-full h-40 md:h-60 object-cover"
                src={`${game.background_image}`}
                alt={game.name}
              />
            </Link>
            <div className="p-5">
              <Link to={'/'}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Title: {game.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Regular Price: 
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Sale Price: 
              </p>
              <AddToCartBtn gameId={game.gameID} />
            

            <p className="self-center text-pink text-base md:text-lg ">REGULAR PRICE €</p>
              <Link
                to={'/'}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-lila rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy now
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
            </div>
          </div>
            
           

            
          
          
         ))
       
      }
     
     </div>

    
     <Pagination />
  
    </>
  );
}

export default CategoriesPage;
