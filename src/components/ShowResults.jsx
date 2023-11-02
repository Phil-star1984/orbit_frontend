import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export const ShowResults = ({ results }) => {
  return (
    <>
      <div>{results.map((game) => game.name)}</div>
    </>
  );
};

export default ShowResults;
