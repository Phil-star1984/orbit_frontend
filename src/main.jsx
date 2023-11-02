import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CartProvider } from "./Context/CartProvider.jsx";
import { AuthProvider } from "./Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);
