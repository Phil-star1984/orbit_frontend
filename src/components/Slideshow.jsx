// import { Carousel } from "@material-tailwind/react";
import "tailwindcss/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// npm install react-responsive-carousel
import React from "react";
import Images from "./Images";

export default function Slideshow() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
        alt="image 5"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
        alt="image 6"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
