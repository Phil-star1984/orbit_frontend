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
      
      <div className='my-8 flex flex-col'> List of Games 
      { //check why it needs it 
      !data?('...Loading games'):(data.results.map((game)=>(
        <div key={`${game.id}`} className='flex justify-center'>
          <div className='w-1/5'>
          <img className='' src={`${game.background_image}`} alt={`${game.name}`}/>
          </div>
          <span>{game.name}</span>
          <br />
          <span>Release date: {game.released}</span>
         <br />
          <span>Rating: {game.rating}</span>
          <hr />
         


   
        </div>))
       )
      }
      <Pagination />
     </div>
      
    <Footer />
    </>
    
  )
}

export default CategoriesPage;