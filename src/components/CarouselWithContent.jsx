import { Carousel, Typography, Button } from "@material-tailwind/react";
import ExploreBtn from "../components/buttons/ExploreBtn.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function CarouselWithContent() {
  return (
    <Carousel className="xl h-[45rem]">
      <div className="relative h-full w-full">
        <img
          src="https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
          alt="image 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              METAL GEAR SOLID 6
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Metal Gear Solid 6 may be something of a pipe dream, but, given
              Konami's attachment to the franchise, it's not implausible that
              the Japanese entertainment giant might revisit one of gaming's
              most beloved series.
            </Typography>
            <div className="flex justify-center gap-2">
              {/* <ExploreBtn className="bg-white" /> */}
              <Link to={"/game"}>
                <Button size="lg" color="white">
                  Explore
                </Button>
              </Link>

              {/* <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              SAINTS ROW: THE THIRD
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              The Saints are kings of Stilwater, but The Syndicate, a legendary
              criminal fraternity, has turned its eye on the Saints and demands
              tribute. You take the fight to a new city against The Syndicate in
              Saints Row: The Third.
            </Typography>

            <div className="flex gap-2">
              <Link to={"/game"}>
                <Button size="lg" color="white">
                  Explore
                </Button>
              </Link>
              {/* <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src=" https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              PAYDAY 3
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              PAYDAY 3 contains repeated displays of gun violence, including the
              shooting of civilians and law enforcement. PAYDAY 3 references
              alcohol and tobacco as well as illegal drugs in a lighthearted
              way.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              {/* <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      {/* //next */}
      <div className="relative h-full w-full">
        <img
          src="https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              TOMB RAIDER (2013)
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              A cinematic revival of the series in its action third person form,
              Tomb Rider follows Lara in her least experience period of life –
              her youth.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              {/* <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      {/* //next */}
      <div className="relative h-full w-full">
        <img
          src="https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
          alt="image 5"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 text-right">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Deus Ex: Mankind Divided
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              The year is 2029, and the golden era of augmentations is over.
              Mechanically augmented humans have been deemed outcasts and
              segregated from the rest of society. Crime and acts of terror
              serve as a thin veil to cover up an overarching conspiracy aimed
              at controlling the future of mankind.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              {/* <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* //next */}
      <div className="relative h-full w-full">
        <img
          src="https://media.rawg.io/media/games/662/66261db966238da20c306c4b78ae4603.jpg"
          alt="image 6"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              RAGE 2
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Rage 2 is a first-person shooter. Players assume control of a
              ranger named Walker, who is free to explore the game's apocalyptic
              open world. Players are given control over some of Walker's
              attributes, such as their gender, skills, or attire.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              {/* <Button size="lg" color="white" variant="text">
                Gallery
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
