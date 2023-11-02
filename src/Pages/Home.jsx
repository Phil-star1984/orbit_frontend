import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Deals from "../components/Deals.jsx";
import TopList from "../components/TopList.jsx";
import Categories from "../components/Categories.jsx";
import CarouselWithContent from "../components/CarouselWithContent.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CarouselWithContent />
      <Deals />
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
