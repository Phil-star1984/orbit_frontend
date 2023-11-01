import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import GamePage from "./Pages/GamePage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import WishlistPage from "./Pages/WishlistPage.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import AllGamesPage from "./Pages/AllGamesPage.jsx";
import CategoriesPage from "./Pages/CategoriesPage.jsx";

function App() {
  return (
    <div className="bg-gray-900">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/allgames" element={<AllGamesPage />} />
        <Route path="/categories/:id" element={<CategoriesPage />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
