//This function gets the data from the API defined in api folder.
//Slug is a general term for all the data which is passed on to the API in form of additional words/terms/querries.
//e.g.:  if you want to get data for all the games: pass on (as 'slug): '/genres' - it must be a string (no need to put a whole url address as this one is defined in api)
//e.g.2: if you want to list all the games: put in '/games' as slug/variable into the hook.
//further API documentation is here: https://api.rawg.io/docs/#tag/games


import axios from "axios";
import api from '../api/api.jsx'
import { useState, useEffect } from "react";


const useFetch = (slug) => {
//FIX .ENV ISSUE!!
const key = 'a68824e64475471abcd6b96285019ac7';
const [data, setData] = useState();
const [loading, setLoading] = useState(true);

useEffect(()=> {
const getData = async () => {
  try {
    const response = await api.get(`${slug}?&key=${key}`);
    setData(response.data);
    setLoading(false);
    
  } catch (error) {
    console.error(error);
  }
}
getData();
}, [slug]);

  return {data, loading}
}

export default useFetch;