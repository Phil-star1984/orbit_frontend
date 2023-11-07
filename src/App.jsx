import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CartPage from "./Pages/CartPage.jsx";
import WishlistPage from "./Pages/WishlistPage.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import AllGamesPage from "./Pages/AllGamesPage.jsx";
import CategoriesPage from "./Pages/CategoriesPage.jsx";
import DealPage from "./Pages/DealPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
/* import ShowResults from "./components/ShowResults.jsx"; */
import SignUp from "./components/SignUp.jsx";
// import GamePage from "./Pages/GamePage.jsx";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound.jsx";
import Success from "../src/components/Success.jsx";
import Chat from "./components/Chat.jsx";

function App() {
  /* const [results, setResults] = useState(null); */

  return (
    <div className="bg-gray-900">
      <ToastContainer />
      <Navbar />
      {/* {results && <ShowResults results={results} />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/game" element={<GamePage />} /> */}
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/allgames" element={<AllGamesPage />} />
        <Route path="/categories/:id" element={<CategoriesPage />} />
        {/* <Route path="/categories/:id/:gameID" element={<GamePage />} /> */}
        <Route path="/deals/:rawTitle" element={<DealPage />} />
        <Route path="/paymentid512873128" element={<Success />} />
        <Route path="/orbitgpt" element={<Chat />} />
        <Route path="*" element={<NotFound />} />

        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
