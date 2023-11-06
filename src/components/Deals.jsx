import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";
import { useState, useEffect } from "react";
import DealsItem from "./DealsItem.jsx";

function Deals() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);



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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:grid-cols-4">
        {deals.map((deal) => (
          <div key={`${deal.dealID}`} className="text-white w-full">
            <Link to={`/deals/${deal.title}`} state={{deal: deal}}>
              <DealsItem 
                  imageSrc={deal.thumb}
                  title={deal.title} 
                  salePrice={deal.salePrice} 
                  regularPrice={deal.normalPrice} 
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
