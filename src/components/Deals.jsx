import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";
import { useState, useEffect } from "react";
import AddToCartBtn from "./buttons/AddToCartBtn";
import DealsItem from "./DealsItem.jsx";

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
        setLoading(false);
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
  //console.log(deals);

  return (
    <div className="deals mx-48 ">
      <h3 className="text-center text-[#D00EDD] font-bold sm:text-4xl m-14">
        Top deals{" "}
      </h3>
      {/* main div - Grid Container */}
      <div className="grid grid-cols-2 m-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {deals.map((deal) => (
          <Link
            key={deal.dealID}
            to={`/deals/${deal.title}`}
            state={{ deal: deal }}
          >
            <div className="text-white w-full bg-gray-800 p-4 rounded-xl hover:bg-gray-700  cursor-pointer flex flex-col group">
              <h3 className=" text-lg font-semibold pb-4 truncate">
                {deal.title}
              </h3>
              <img
                className="w-full h-full md:h-auto rounded-lg"
                alt={`${deal.title}`}
                src={`${deal.thumb}`}
              />
              <div className="w-full flex gap-2  justify-end items-center mt-4">
                <p className="text-xl text-white font-semibold  bg-pink px-4 py-2 rounded-lg text-center">
                  {"- " +
                    ((1 - deal.salePrice / deal.normalPrice) * 100).toFixed() +
                    "%"}
                </p>
                <div className="flex flex-col items-end justify-center">
                  <p className="text-gray-500 line-through text-base">
                    {deal.normalPrice} €
                  </p>
                  <p className="text-white text-lg">{deal.salePrice} €</p>
                </div>
                <div>
                  <AddToCartBtn />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Deals;
