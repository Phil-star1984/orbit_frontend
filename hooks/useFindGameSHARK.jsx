//This function checks if the game exists on SHARK API



import axios from "axios";
import apiSHARK from "../api/apiSHARK.jsx";
import { useState, useEffect } from "react";


const useFindGameSHARK = (title) => {


const [game, setGame] = useState();
// const [loading, setLoading] = useState(true);

useEffect(()=> {
const getData = async () => {
  try {
    const response = await apiSHARK.get(`/games?title=${title}`);
    setGame(response.data);
    setLoading(false);
    
  } catch (error) {
    console.error(error);
  }
}
getData();
}, [title]);

//   return {game, loading}
return {game}
}

export default useFindGameSHARK;