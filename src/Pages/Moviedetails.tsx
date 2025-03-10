import {
  Award,
  BarChart3,
  Calendar,
  Clock,
  DollarSign,
  Globe,
  Heart,
  Play,
  Share2,
  Star,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const Movies = [
    {
      id: 1,
      title: "Dune: Part Two",
      rating: 8.8,
      year: 2024,
      duration: "166 min",
      genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
      director: "Denis Villeneuve",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family...",
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 1,
          name: "Timothée Chalamet",
          role: "Paul Atreides",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
          bio: "Rising star known for his compelling performances",
        },
        {
          id: 2,
          name: "Zendaya",
          role: "Chani",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          bio: "Multi-talented actress and fashion icon",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      awards: ["Academy Award Nominee", "Golden Globe Nominee"],
      boxOffice: "$494.7M",
      language: "English",
      productionCompany: "Legendary Entertainment",
      releaseDate: "2024-03-01",
      metacriticScore: 81,
      rottenTomatoesScore: 94,
    },
    {
      id: 2,
      title: "Oppenheimer",
      rating: 8.4,
      year: 2023,
      duration: "180 min",
      genre: ["Biography", "Drama", "History"],
      director: "Christopher Nolan",
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, exploring the moral complexities and consequences of scientific discovery.",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 3,
          name: "Cillian Murphy",
          role: "J. Robert Oppenheimer",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
          bio: "Versatile actor known for intense performances",
        },
        {
          id: 4,
          name: "Emily Blunt",
          role: "Katherine Oppenheimer",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
          bio: "Acclaimed actress with numerous awards",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      awards: ["Academy Award Winner", "BAFTA Winner", "Golden Globe Winner"],
      boxOffice: "$957.8M",
      language: "English",
      productionCompany: "Universal Pictures",
      releaseDate: "2023-07-21",
      metacriticScore: 89,
      rottenTomatoesScore: 93,
    },
    {
      id: 3,
      title: "Poor Things",
      rating: 8.3,
      year: 2023,
      duration: "141 min",
      genre: ["Comedy", "Drama", "Romance", "Sci-Fi"],
      director: "Yorgos Lanthimos",
      description:
        "The incredible tale of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter. Under his protection, Bella is eager to learn.",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 5,
          name: "Emma Stone",
          role: "Bella Baxter",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
          bio: "Academy Award-winning actress",
        },
        {
          id: 6,
          name: "Willem Dafoe",
          role: "Dr. Godwin Baxter",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
          bio: "Legendary actor with diverse roles",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      awards: ["Academy Award Winner", "Venice Film Festival Winner"],
      boxOffice: "$102.3M",
      language: "English",
      productionCompany: "Searchlight Pictures",
      releaseDate: "2023-12-08",
      metacriticScore: 87,
      rottenTomatoesScore: 92,
    },
    {
      id: 4,
      title: "The Zone of Interest",
      rating: 7.9,
      year: 2023,
      duration: "105 min",
      genre: ["Drama", "History", "War"],
      director: "Jonathan Glazer",
      description:
        "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
      image:
        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 7,
          name: "Christian Friedel",
          role: "Rudolf Höss",
          image:
            "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80",
          bio: "German actor and musician",
        },
        {
          id: 8,
          name: "Sandra Hüller",
          role: "Hedwig Höss",
          image:
            "https://images.unsplash.com/photo-1557296387-5358ad7997bb?auto=format&fit=crop&w=200&q=80",
          bio: "Award-winning German actress",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      awards: ["Academy Award Winner", "Cannes Film Festival Winner"],
      boxOffice: "$27.1M",
      language: "German",
      productionCompany: "A24",
      releaseDate: "2024-01-31",
      metacriticScore: 94,
      rottenTomatoesScore: 91,
    },
  ];
  const { id } = useParams();
  const movie = Movies.find((m) => m.id === Number(id)) || Movies[0];

  // State to track if the movie is in the watchlist
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    // Check if the movie is in the watchlist
    const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
    setIsInWatchlist(watchlist.some((m) => m.id === movie.id));
  }, [movie.id]);

  const toggleWatchlist = () => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");

    if (isInWatchlist) {
      // Remove from watchlist
      watchlist = watchlist.filter((m) => m.id !== movie.id);
    } else {
      // Add to watchlist
      watchlist.push(movie);
    }

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <div>
      <div className="relative h-[90vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop || movie.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
          <div className="grid md:grid-cols-3 gap-8 items-end">
            <div className="hidden md:block">
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-lg shadow-xl aspect-[2/3] object-cover"
              />
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-yellow-500 font-semibold">
                    {movie.rating} Rating
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{movie.releaseDate}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Watch Trailer
                </a>
                <button
                  onClick={toggleWatchlist}
                  className={`px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
                    isInWatchlist
                      ? "bg-red-600 hover:bg-red-500"
                      : "bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                </button>
                <button className="bg-gray-800/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {movie.description}
          </p>
        </section>
      </main>
    </div>
  );
};

export default MovieDetails;