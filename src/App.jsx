import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GamePage from "./Pages/GamePage";
import CartPage from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";
import AuthPage from "./Pages/AuthPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/user" element={<ProfilePage />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
