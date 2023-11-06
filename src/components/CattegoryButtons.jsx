import { NavLink } from "react-router-dom";
import useFetchRAWG from "../../hooks/useFetchRAWG";
import PacmanLoader from "react-spinners/PacmanLoader";
import AddToCartBtn from "./buttons/AddToCartBtn.jsx";

function CategoryButtons() {
  const { data, loading } = useFetchRAWG("/genres?");

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
    <div className="categories mb-12">
      <h3 className="text-white font-bold sm:text-4xl text-center py-12">
        
      </h3>
      {/* main div - Grid Container */}
      <div className="grid grid-cols-2 sm:ml-12 sm:mr-12 md:ml-24 md:mr-24 lg:mx-60 mb-0 mt-0 sm:grid-cols-4 md:grid-cols-4 xl:mx-24 xl:grid-cols-8 2xl:mx-80  gap-4">
        {
          //check why it needs it

          !data
            ? "...Loading"
            : data.results.map((category) => (
                <div key={`${category.id}`}>
                  <NavLink to={`/categories/${category.id}`} className={({isActive})=>(isActive?"group is-active":"")}>
                    <div className="flex justify-center ">
                     
                      <div className="flex text-[#D00EDD] font-bold text-lg sm:text-2xl md:text-4xl ml-10 mr-10">
                      
                        <button className="group-[.is-active]:ring-4 group-[.is-active]:ring-blue-300 items-center px-5 py-1.5 rounded-full text-sm font-medium text-center text-white border-2 border-lila rounded- hover:border-pink hover:scale-125 focus:ring-4 focus:outline-none focus:ring-blue-300 truncate">
                                
                        {category.name}
                        </button>
                    
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))
        }
      </div>
    </div>
  );
}

export default CategoryButtons;
