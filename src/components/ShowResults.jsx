import React, { useState, useEffect } from "react";

export const ShowResults = ({ results }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 mt-24 z-10 grid grid-cols-4 gap-2 h-1/2">
      {results.map((game, index) => (
        <div className="text-lg" key={index}>
          <div className="border flex text-white rounded-lg h-32 p-3">
            {game.name}
            <img className="w-20" src={game.background_image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowResults;
