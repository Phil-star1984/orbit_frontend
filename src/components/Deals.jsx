import { Link } from "react-router-dom";
import useFetchRAWG from "../../hooks/useFetchRAWG";
import PacmanLoader from "react-spinners/PacmanLoader";
import AddToCartBtn from "./buttons/AddToCartBtn.jsx";
import axios from "axios";
import TopListItem from "./TopListItem.jsx";
import { useState, useEffect } from "react";

function Deals() {
  const [deals, setDeals] = useState([]);
  const { data, loading } = useFetchRAWG("/games?");

  useEffect(() => {
    const getDeals = async () => {
      try {
        const response = await axios.get(
          "https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=1&pageSize=12"
        );

        setDeals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getDeals();
  }, []);

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
    <div className="deals mx-48 ">
      <h3 className="text-center text-[#D00EDD] font-bold sm:text-4xl m-14">
        Top deals{" "}
      </h3>
      {/* main div - Grid Container */}
      <div className="grid grid-cols-2 m-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-16">
        {deals.map((deal) => (
          <div key={`${deal.dealID}`} className="text-white w-full">
            <Link to={`/deals/${deal.title}`} dealdata={deals}>
              <div className="flex justify-center flex-col">
                <h3>{deal.title}</h3>
                <img
                  className="w-3/5 h-auto md:h-auto "
                  alt={`${deal.title}`}
                  src={`${deal.thumb}`}
                />
                <div>
                  <p className="text-pink text-base md:text-xl lg:text-2xl ">
                    {deal.salePrice}
                  </p>
                  <p className="text-gray-500 line-through text-sm md:text-lg lg:text-lg">
                    {deal.normalPrice}
                  </p>
                </div>
                <div>
                  {-((1 - deal.salePrice / deal.normalPrice) * 100).toFixed() +
                    "% OFF"}
                </div>
                <div>
                  <button className=""> Buy now</button>
                  <button> Add to cart</button>
                  <button> Add to wishlist</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
