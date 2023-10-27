import React, { useState, useEffect } from "react";

const SearchWindow = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //function to fetch data from the API
    const fetchData = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          // 'API_URL' is your actual API endpoint
          //   (`API_URL?query=${searchQuery}`)
          const response = await fetch(
            // `https://orbitback.onrender.com?query=${searchQuery}`
            `https://api.rawg.io/api/games?key=5f0755b5de4f4e5b92bb269fbb527881&dates=2019-09-01,2019-09-30&platforms=18,1,7?query=${searchQuery}`
          );
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="&#128270; Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWindow;
