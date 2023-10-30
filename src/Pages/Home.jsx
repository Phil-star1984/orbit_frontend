import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Slideshow from "../components/Slideshow.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import TopList from "../components/TopList.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Slideshow />
      {/* <ImageCarousel /> */}
      {/* <h1 className="text-3xl font-bold underline">Hello World</h1>
      <h1>HELLO</h1> */}
      <Newsletter />
      <section className="max-w-screen-xl bg-gray-900 text-white  container mx-auto flex gap-16 py-8">
        <TopList listTitle={"Top Seller"} />
        <TopList listTitle={"Most played"} />
      </section>
      <Footer />
    </>
  );
}
