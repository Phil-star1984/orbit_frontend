import { React, useState, useEffect } from "react";
import Newsletter from "../components/Newsletter.jsx";
import Deals from "../components/Deals.jsx";
import OrbitProfile from "../components/OrbitProfile.jsx";
import TopList from "../components/TopList.jsx";
import Categories from "../components/Categories.jsx";
import CarouselWithContent from "../components/CarouselWithContent.jsx";
import ShowResults from "../components/ShowResults.jsx";
import Navbar from "../components/Navbar.jsx";
import Chat from "../components/Chat.jsx";

export default function HomePage() {
  const [results, setResults] = useState(null);

  return (
    <>
      <CarouselWithContent />
      <OrbitProfile />
      <Categories />
      <Chat />
      <Deals />
      <Newsletter />
      <section className="px-4 max-w-screen-xl bg-gray-900 text-white container mx-auto gap-16 py-8 flex flex-col items-center md:flex-row sm:flex-col md:gap-8 lg:gap-16">
        <TopList listTitle={"Top Seller"} page={1} />
        <TopList listTitle={"Most played"} page={2} />
      </section>
    </>
  );
}
