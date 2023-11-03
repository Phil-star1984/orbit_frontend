import { React, useState, useEffect } from 'react';
import Newsletter from '../components/Newsletter.jsx';
import Deals from '../components/Deals.jsx';
import OrbitProfile from '../components/OrbitProfile.jsx';
import TopList from '../components/TopList.jsx';
import Categories from '../components/Categories.jsx';
import CarouselWithContent from '../components/CarouselWithContent.jsx';
import ShowResults from '../components/ShowResults.jsx';
import Navbar from '../components/Navbar.jsx';

export default function HomePage() {
  const [results, setResults] = useState(null);

  return (
    <>
      <CarouselWithContent />
      <OrbitProfile />
      <Categories />
      <Deals />
      <Newsletter />

      <section className='max-w-screen-xl bg-gray-900 text-white  container mx-auto flex gap-16 py-8'>
        <TopList listTitle={'Top Seller'} page={1} />
        <TopList listTitle={'Most played'} page={2} />
      </section>
    </>
  );
}
