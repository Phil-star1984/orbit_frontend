import react from "react";
import { Button } from "@material-tailwind/react";
import GamePage from "../../Pages/Gamepage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ExploreBtn() {
  <>
    <div>
      <Link to={"/game"}>
        <button className="bg-white w-1/5 h-auto z-20">Explore</button>
      </Link>
    </div>
  </>;
}
