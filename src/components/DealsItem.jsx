
import AddToCartBtn from "./buttons/AddToCartBtn";
import {Link} from 'react-router-dom';




function DealsItem({imageSrc, title, salePrice, regularPrice, gameID}) {
  return (
    <>
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={"/"}>
              <img
                className="rounded-t-lg w-full h-40 md:h-60 object-cover"
                src={imageSrc}
                alt={title}
              />
            </Link>
            <div className="p-5">
              <Link to={'/'}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Regular Price: {regularPrice}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Sale Price: {salePrice}
              </p>
              <AddToCartBtn gameId={gameID} />
              <p className="text-pink text-slate-600">{-((1 - salePrice / regularPrice) * 100).toFixed() + "% OFF"}</p>
              <p className="self-center text-gray-500 line-through text-sm md:text-lg m-3">{regularPrice} €</p>
            <p className="self-center text-pink text-base md:text-lg ">{salePrice} €</p>
              <Link
                to={'/'}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-lila rounded-lg hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy now
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>

  </>
    )
}

export default DealsItem;
