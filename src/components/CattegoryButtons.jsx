import { Link } from "react-router-dom";
import useFetchRAWG from "../../hooks/useFetchRAWG";
import PacmanLoader from "react-spinners/PacmanLoader";
import AddToCartBtn from "./buttons/AddToCartBtn.jsx";

function CategoryButtons() {
  const { data, loading } = useFetchRAWG("/genres?&page_size=16");

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
    <div className="categories bg-black">
      <h3 className="text-white font-bold sm:text-4xl text-center py-12">
        Categories
      </h3>
      {/* main div - Grid Container */}
      <div className="grid grid-cols-2 m-2 mb-0 mt-0 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {
          //check why it needs it

          !data
            ? "...Loading"
            : data.results.map((category) => (
                <div key={`${category.id}`}>
                  <Link to={`/categories/${category.id}`}>
                    <div className="flex justify-center ">
                     
                      <div className="flex place-self-center place-items-center text-[#D00EDD] font-bold tracking-wider text-lg sm:text-2xl md:text-4xl break-all">
                      
                        <button className=" items-center px-5 py-2.5 text-sm font-medium text-center text-white border-2 border-lila rounded-lg hover:border-pink hover:scale-125 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {category.name}
                        </button>
                    
                      </div>
                    </div>
                  </Link>
                </div>
              ))
        }
      </div>
    </div>
  );
}

export default CategoryButtons;
