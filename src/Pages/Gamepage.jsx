import React from "react";
import useFetchRAWG from "../../hooks/useFetchRAWG.jsx";
import calcArbitraryPrice from "../../utility/calcArbetraryPrice.jsx";
import Footer from "../components/Footer.jsx";
import { useParams } from "react-router-dom";
import VideosTrailers from "../components/VideosTrailers.jsx";

export default function GamePage() {
  return (
    <>
      <div>HERO SECTION - slider</div>
      <div>Price Box</div>
      <div>Tag Cloud</div>
      <div>Videos & Trailers </div>
      <VideosTrailers />
      <div>Ratings & Metacritic</div>
      <div>Genres</div>
      <div>Description</div>
    </>
  );
}
