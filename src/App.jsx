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
        <Route path="/games" element={<Gamepage />} />
        <Route />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
