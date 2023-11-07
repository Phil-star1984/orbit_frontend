import { Link } from 'react-router-dom';
import orbitLogo from '/src/assets/orbitLogo.svg';
import ExploreBtn from './buttons/ExploreBtn';

function Success() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[url('../src/assets/404_page.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
        <div className='text-center bg-white p-16 rounded-mb rounded-lg shadow-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-[1px] border-white'>
          <img
            className='h-28 w-auto mb-12'
            src={orbitLogo}
            alt='Orbit Gaming Logo'
          />
          <h1 className='text-9xl font-bold text-white mb-4'>
            THANK YOU FOR YOUR PAYMENT!
          </h1>
          <Link to='/'>
            <button className='bg-white hover:opacity-70 text-black font-bold py-2 px-4 rounded-md'>
              GO BACK
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Success;