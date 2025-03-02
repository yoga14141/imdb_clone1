import React from "react";
import { Play, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const featuredMovies = [
  {
    id: 1,
    title: "Master",
    rating: 7.4,
    releaseDate: "January 13, 2021",
    description:
      "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
    image:
      "https://live.staticflickr.com/65535/51243613866_200567d84f_b.jpg?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 2,
    title: "Premalu",
    rating: 7.8,
    releaseDate: "February 9, 2024",
    description:
      "Sachin's quest for love takes unexpected turns, creating a laughter-filled love triangle.",
    image:
      "https://static.toiimg.com/thumb/msid-105647632,width-1280,height-720,resizemode-4/105647632.jpg?auto=format&fit=crop&w=2000&q=80",
  },
];

const Hero = () => {
  const [currentMovie, setCurrentMovie] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const movie = featuredMovies[currentMovie];

  return (
    <div className="relative h-[90vh] bg-gradient-to-b from-transparent to-black">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 gradient-mask"
        style={{
          backgroundImage: `url('${movie.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-yellow-500 font-semibold">
                {movie.rating} Rating
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Calendar className="w-5 h-5 text-zinc-400" />
              <span className="text-zinc-300">{movie.releaseDate}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">
            {movie.title}
          </h1>
          <p className="text-zinc-300 text-lg mb-8 line-clamp-3 max-w-xl">
            {movie.description}
          </p>
          <div className="flex items-center gap-4">
            <Link
              to={`/movie/${movie.id}`}
              className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-all hover:scale-105 duration-300"
            >
              <Play className="w-5 h-5" />
              Watch Trailer
            </Link>
            <Link
              to={`/movie/${movie.id}`}
              className="bg-zinc-900/80 backdrop-blur-md text-white px-8 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition-all hover:scale-105 duration-300"
            >
              More Info
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 flex gap-2">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMovie(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentMovie === index
                  ? "bg-yellow-500 w-8"
                  : "bg-zinc-600 w-4 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;