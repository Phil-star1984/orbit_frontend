import React from "react";
import Newsletter from "../components/Newsletter.jsx";
import Deals from "../components/Deals.jsx";
import OrbitProfile from "../components/OrbitProfile.jsx";
import TopList from "../components/TopList.jsx";
import Categories from "../components/Categories.jsx";
import CarouselWithContent from "../components/CarouselWithContent.jsx";

export default function HomePage() {
  return (
    <>
      <CarouselWithContent />
      <OrbitProfile />
      <Deals />
      <Newsletter />
      <section className="max-w-screen-xl bg-gray-900 text-white  container mx-auto flex gap-16 py-8">
        <TopList listTitle={"Top Seller"} />
        <TopList listTitle={"Most played"} />
      </section>
      <Categories />
    </>
  );
}
