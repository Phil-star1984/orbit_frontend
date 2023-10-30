import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.jsx';
import Loader from 'react-loaders';


function Categories() {
  
  const {data, loading} = useFetch('/genres');

  if(loading) {
    
    return (<Loader type="pacman"/>)
  }
  

  return (
   
    <div className='categories'>
    <h3 className='text-[#D00EDD] font-bold sm:text-4xl m-7'>Categories</h3>
    {/* main div - Grid Container */}
    <div className='grid grid-cols-2 m-2 sm:grid-cols-3 md:grid-cols-4 gap-2'>
   { //check why it needs it
    !data?('...Loading'):(data.results.map((category)=>(
    <div key={`${category.id}`}>
      <Link to={'/'}>
      <div  className='flex justify-center '>
        <img  className='peer hover:opacity-20 w-full h-40 md:h-60 object-cover' alt={`${category.name}`} src={ `${category.image_background}` }/>
        <span  className='absolute flex-col place-self-center place-items-center hidden peer-hover:flex peer-hover:transition ease-out delay-200 text-[#D00EDD] font-bold tracking-wider text-lg sm:text-2xl md:text-4xl'>{category.name}</span>
        
      </div>
    </Link>
    </div>))
  )
   }
    </div>
   </div>
  )
}

export default Categories;