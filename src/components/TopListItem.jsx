import { useState, useEffect } from "react";
import axios from "axios";
import AddToCartBtn from "./buttons/AddToCartBtn";

const TopListItem = ({ id, title, imageSrc, price, genres }) => {
  const genreNames = genres
    .slice(0, 2)
    .map((genre) => genre.name)
    .join(", ");

  return (
    <div className="bg-gray-800 h-28 overflow-hidden shadow-lg flex w-full hover:bg-gray-700 cursor-pointer active:bg-gray-800 group">
      {/* Image */}
      <div className="w-1/2 h-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full px-4 py-2">
        {/* Top Container */}
        <header className="w-full h-1/3">
          <h3 className="text-lg font-semibold">{title}</h3>
        </header>
        {/* Bottom Container */}
        <div className="flex items-center h-full">
          <div className="w-full flex items-end">
            <p className="text-base text-slate-600">{genreNames}</p>
          </div>
          <div className="w-full flex justify-end">
            <p className="text-white text-lg self-center">{price}</p>
            {/* Add to Cart Button (conditionally shown on hover) */}
            <AddToCartBtn gameId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopListItem;
