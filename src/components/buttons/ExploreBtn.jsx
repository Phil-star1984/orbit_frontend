import react from "react";
import { Button } from "@material-tailwind/react";
import GamePage from "../../Pages/Gamepage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function ExploreBtn() {
  <>
    <div>
      <Link to="/game">
        <button size="lg" color="white">
          Explore
        </button>
      </Link>

      {/* <Link to="/beispielseite">Beispielseite</Link>
      <Button size="lg" color="white">
        Explore
      </Button> */}
    </div>
  </>;
}
