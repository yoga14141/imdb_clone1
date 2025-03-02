import { Star, Trophy } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";
const Toprated = () => {
  const movies = [
    {
      id: 1,
      title: "Good Night",
      rating: 7.7,
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/29c55aa980639b2ff4cb59682b98b7b0ecf3c1c151fae56bdca5e03ef91165c1.jpg?auto=format&fit=crop&w=800&q=80",
      year: 2023,
      votes: "2.8M",
      rank: 1,
    },
    {
      id: 2,
      title: "Meiyalagan",
      rating: 8.2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6aufDkjJIoiTYpcsDJoDVutFrJ3GFM2E-w&s?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      votes: "2.1M",
      rank: 2,
    },
    {
      id: 3,
      title: "Lubber Bandhu",
      rating: 8.2,
      image:
        "https://m.media-amazon.com/images/M/MV5BZjRmN2FmZTAtYzhiNy00ZDU4LTgwNzYtN2EzYTg2OTc1OGZiXkEyXkFqcGc@._V1_.jpg?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      votes: "2.7M",
      rank: 3,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        inital={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <Trophy className="w-8 h-8 text-yellow-500" />
        <h1 className="text-3xl font-bold">Top Rated Movies</h1>
      </motion.div>
      <div className="space-y-6">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/movie/${movie.id}`}>
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex">
                  <div className="w-16 bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
                    #{movie.rank}
                  </div>
                  <div className="relative w-48">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {movie.title}
                      </h2>
                      <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {movie.rating}
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-400 dark:text-gray-200">
                      <span>{movie.year}</span>
                      <span className="mx-2">•</span>
                      <span>{movie.votes} votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Toprated;