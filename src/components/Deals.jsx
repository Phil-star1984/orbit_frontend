import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";
import api from "../../api/apiRAWG.jsx";
import { useState, useEffect } from "react";
import AddToCartBtn from "./buttons/AddToCartBtn";
import DealsItem from "./DealsItem.jsx";

function Deals() {
  const key = import.meta.env.VITE_KEY;
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDeals = async () => {
      try {
        const response = await axios.get(
          "https://www.cheapshark.com/api/1.0/deals?storeID=1&onSale=1&pageSize=12"
        );
        let urls = [
          `/games?&search=${response.data[0].title}&key=${key}`,
          `/games?&search=${response.data[1].title}&key=${key}`,
          `/games?&search=${response.data[2].title}&key=${key}`,
          `/games?&search=${response.data[3].title}&key=${key}`,
          `/games?&search=${response.data[4].title}&key=${key}`,
          `/games?&search=${response.data[5].title}&key=${key}`,
          `/games?&search=${response.data[6].title}&key=${key}`,
          `/games?&search=${response.data[7].title}&key=${key}`,
          `/games?&search=${response.data[8].title}&key=${key}`,
          `/games?&search=${response.data[9].title}&key=${key}`,
          `/games?&search=${response.data[10].title}&key=${key}`,
          `/games?&search=${response.data[11].title}&key=${key}`,
        ];
        setDeals(response.data);

        await Promise.all(urls.map((url) => api.get(url))).then((data) => {
          setData(data);
        });

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

  return (
    <div className="deals w-full  flex flex-col items-center">
      <h3 className="text-center text-[#D00EDD] font-bold m-14 text-4xl">
        Top deals{" "}
      </h3>
      {/* main div - Grid Container */}
      <div className="grid grid-cols-1 w-full m-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 max-w-screen-2xl px-8 md:px-4">
        {deals.map((deal, index) => (
          <Link
            key={deal.dealID}
            to={`/deals/${deal.title}`}
            state={{ deal: deal }}
          >
            <div className="text-white w-full bg-gray-800 p-4 rounded-xl hover:bg-gray-700  cursor-pointer flex flex-col group">
              <h3 className="text-lg font-semibold pb-4 truncate">
                {deal.title}
              </h3>
              <img
                className="w-full h-full md:h-auto rounded-lg"
                alt={`${deal.title}`}
                src={`${data[index].data.results[0].background_image}`}
              />
              <div className="w-full flex gap-2  justify-end items-center mt-4">
                <p className=" text-white font-semibold  bg-pink px-4 py-2 rounded-lg text-center text-lg">
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
                  <AddToCartBtn gameId={data[index].data.results[0].id} />
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
