import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface MovieProps {
  id: number;
  title: string;
  rating: number;
  image: string;
  year: number;
  genre: string[];
}

const MovieCard: React.FC<MovieProps> = ({ id, title, rating, image, year, genre }) => {
  return (
    <Link to={`/movie/${id}`} className="block group">
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden backdrop-blur-md transition-transform duration-300 hover:scale-105">
        {/* Movie Image with Hover Effect */}
        <div className="relative aspect-[2/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 w-full flex justify-center">
              <button className="w-4/5 bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200">
                View Details
              </button>
            </div>
          </div>
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-yellow-500 font-medium">{rating}</span>
          </div>
        </div>

        {/* Movie Details */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg truncate text-glow">{title}</h3>
            <span className="text-zinc-400 text-sm">{year}</span>
          </div>
          {/* Genre Badges */}
          {genre.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {genre.slice(0, 2).map((g) => (
                <span key={g} className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300">
                  {g}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
