import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GamePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.rawg.io/api/");
        if (response.ok) {
          const data = await response.json();
          setGameData(data.game);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {/* <Bild></Bild>
      <TitelWithPrice></>
      <Carousel></>
      <Description></>
      <UserReviews></> */}
      <Footer />
    </>
  );
}
