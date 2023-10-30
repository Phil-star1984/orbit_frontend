import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Pagination from '../components/Pagination.jsx';
import useFetch from '../../hooks/useFetchRAWG.jsx';
import useFindGameSHARK from '../../hooks/useFindGameSHARK.jsx';
import PacmanLoader from "react-spinners/PacmanLoader";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function CategoriesPage() {
const { id } = useParams();

const {data, loading} = useFetch(`/games?&genres=${id}`);

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
console.log(data)

  return (
    <>
    <Navbar />
      <div className='my-48'>Categories Menu</div>
      
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 p-3">
      { //check why it needs it 
      data.results.map((game)=>(
        <div key={`${game.id}`} className="flex flex-col justify-between rounded-lg text-white shadow-lg p-3 bg-gradient-to-r from-pink to-lila hover:from-pink hover:to-yellow-500"
        >
          <div className="flex flex-col justify-between rounded-lg text-white shadow-lg p-3 bg-gradient-to-r from-pink to-lila hover:from-pink hover:to-yellow-500">
          <div className='mb-4'>
              <h1>Game Title: {game.name}</h1>
              <p>Rating: {game.rating}</p>
              <p>Release date: {game.released}</p>
            </div>
            <div
              class="bg-cover bg-center w-full h-80 rounded-lg"
              style={{ backgroundImage: `url(${game.background_image})` }}
            >
            </div>
          </div>
         </div>))
       
      }
     
     </div>
     <Pagination />
    <Footer />
    </>
    
  )
}

export default CategoriesPage;