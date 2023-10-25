import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Gamepage from "./Pages/Gamepage";

function App() {
  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Gamepage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/user" element={<UserProfile />} />
        <Route />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
