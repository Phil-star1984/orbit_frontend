import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Slideshow from "../components/Slideshow.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Slideshow />
      {/* <ImageCarousel /> */}
      {/* <h1 className="text-3xl font-bold underline">Hello World</h1>
      <h1>HELLO</h1> */}
      <Newsletter />
      <Footer />
    </>
  );
}
