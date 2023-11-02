import React from "react";
import useFetchRAWG from "../../hooks/useFetchRAWG.jsx";
import calcArbitraryPrice from "../../utility/calcArbetraryPrice.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";

export default function GamePage() {
  return (
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
  );
}
