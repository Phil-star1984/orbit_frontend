import { Link } from "react-router-dom";
import useFetchRAWG from "../../hooks/useFetchRAWG";
import PacmanLoader from "react-spinners/PacmanLoader";
import AddToCartBtn from "./buttons/AddToCartBtn.jsx";

function Categories() {
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
      {/* <h3 className="text-white font-bold sm:text-4xl text-center py-12">
        Categories
      </h3> */}
      {/* main div - Grid Container */}
      <div className="grid grid-cols-2 m-2 mb-0 mt-0 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {
          //check why it needs it

          !data
            ? "...Loading"
            : data.results.map((category) => (
                <div key={`${category.id}`}>
                  <Link to={`/categories/${category.id}`}>
                    <div className="flex justify-center group">
                      <img
                        className="group-hover:opacity-20 w-full h-40 md:h-60 object-cover"
                        alt={`${category.name}`}
                        src={`${category.image_background}`}
                      />
                      <div className="absolute flex-col place-self-center place-items-center hidden group-hover:flex group-hover:transition ease-out delay-500 text-[#D00EDD] font-bold tracking-wider text-lg sm:text-2xl md:text-4xl break-all">
                        <p className="text-sm text-gray-300 font-light">
                          Explore
                        </p>
                        <span>{category.name}</span>
                        <p className="text-sm text-gray-300 font-light">
                          Games
                        </p>
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

export default Categories;
