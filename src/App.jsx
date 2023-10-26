import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import GamePage from "./Pages/GamePage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import WishlistPage from "./Pages/WishlistPage.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
