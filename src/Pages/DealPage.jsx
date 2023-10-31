import React from "react";
import useFetchRAWG from "../../hooks/useFetchRAWG.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

function DealPage() {
const {title} = useParams();
const {data, loading} = useFetchRAWG(`/games?`);

if(loading) {
    
    return (
      <div className='w-full flex justify-center my-36'>
         <PacmanLoader 
          color='#D00EDD'
          loading = {loading}
          size={80}
          aria-label="Loading Spinner"
  
          />
      </div>
            
            )
  }

  return 
  <>
  <Navbar />
    <div>HERO SECTION - slider</div>
    <div>Price Box</div>
    <div>Tag Cloud</div>
    <div>Videos & Trailers </div>
    <div>Ratings & Metacritic</div>
    <div>Genres</div>
    <div>Description</div>
  <Footer />
  </>
}
export default DealPage;