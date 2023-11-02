import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";

import TopList from "../components/TopList.jsx";
import Categories from "../components/Categories.jsx";
import CarouselWithContent from "../components/CarouselWithContent.jsx";
import ShowResults from "../components/ShowResults.jsx";

export default function HomePage() {
  const [results, setResults] = useState(null);

  return (
    <>
      <Navbar setResults={setResults} />
      {results && <ShowResults results={results} />}
      <CarouselWithContent />
      {/* <ImageCarousel /> */}
      {/* <h1 className="text-3xl font-bold underline">Hello World</h1>
      <h1>HELLO</h1> */}
      <Newsletter />

      <section className="max-w-screen-xl bg-gray-900 text-white  container mx-auto flex gap-16 py-8">
        <TopList listTitle={"Top Seller"} />
        <TopList listTitle={"Most played"} />
      </section>
      <Categories />
      <Footer />
    </>
  );
}
