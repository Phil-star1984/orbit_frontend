import React, { useState, useEffect } from "react";

export const ShowResults = ({ results }) => {
  return (
    <li
      role="list"
      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
    >
      <div className="grid-container bg-white">
        {results.map((game) => game.name)}
      </div>
    </li>
  );
};

export default ShowResults;
