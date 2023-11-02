import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function CarouselForDeals({url1, url2, url3, url4, url5, url6} ) {



  return (
    <Carousel className="xl h-[30rem]">
      <div className="relative h-full w-full">
        <img
          src={`${url1}`}
          alt="image 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            {/* <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Der absolute Wahnsinn
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography> */}
            {/* <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={`${url2}`}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          {/* <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Der absolute Wahnsinn
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>

            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={`${url3}`}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
         {/* < div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Der absolute Wahnsinn
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div> */}
        </div>
      </div>
      {/* //next */}
      <div className="relative h-full w-full">
        <img
          src={`${url4}`}
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          {/* <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Der absolute Wahnsinn
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div> */}
        </div>
      </div>
      {/* //next */}
      <div className="relative h-full w-full">
        <img
          src={`${url5}`}
          alt="image 5"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          {/* <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Der absolute Wahnsinn
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div> */}
        </div>
      </div>

      {/* //next */}
      <div className="relative h-full w-full">
        <img
          src={`${url6}`}
          alt="image 6"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          {/* <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Der absolute Wahnsinn
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </Carousel>
  );
}
