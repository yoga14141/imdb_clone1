import { Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import AuthModals from '../components/AuthModals.tsx';
import { useAuth } from '../AuthContext.tsx';

const MovieList = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const selectedGenres = searchParams.getAll('genre'); 
  const selectedYear = searchParams.get('year');
  const selectedRating = searchParams.get('rating');

  const [Movies, setMovies] = useState([
    { id: 1, title: "Master", rating: 7.4, image: "https://m.media-amazon.com/images/M/MV5BMDM4MTkxMGUtMzQ5OC00NTNiLWJmMGItNjQ0OGNiYTg2OWY3XkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UY281_CR0,0,500,281_.jpg", year: 2021, genre: ["Action", "Crime", "Drama"] },
    { id: 2, title: "Premalu", rating: 8.2, image: "https://m.media-amazon.com/images/M/MV5BY2Q2YzEzNGUtZWYxYS00YTlhLTgyOTctYTgwNWIxZGE0MDJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", year: 2024, genre: ["Comedy", "Love", "Romance"] },
    { id: 3, title: "Amaran", rating: 7.8, image: "https://m.media-amazon.com/images/M/MV5BNDhhN2FmYTktYmU0Mi00ZmIwLTk5YjAtYjhmODlhOGZiOTFiXkEyXkFqcGc@._V1_.jpg", year: 2024, genre: ["Biography", "Action-Epic", "Love"] },
    { id: 4, title: "Good Night", rating: 8.5, image: "https://img.nowrunning.com/content/movie/2023/good-27705/bg2_goodnight.jpg", year: 2023, genre: ["Feel Good", "Romance", "Comedy"] },
    { id: 5, title: "Meiyalagan", rating: 8.7, image: "https://m.media-amazon.com/images/M/MV5BMTUxNDUyZDYtOGNkMi00ZmFlLTgzYjItMjE2ZjU3MTk3ZDZiXkEyXkFqcGc@._V1_.jpg", year: 2024, genre: ["Feel Good", "Drama", "Family"] },
  ]);

  const filteredMovies = Movies.filter((movie) => {
    const searchMatch = searchQuery ? movie.title.toLowerCase().includes(searchQuery) : true;
    const genreMatch = selectedGenres.length === 0 || selectedGenres.some((genre) => movie.genre.includes(genre));
    const yearMatch = selectedYear ? movie.year.toString() === selectedYear : true;
    const ratingMatch = selectedRating ? movie.rating >= parseFloat(selectedRating) : true;
    return searchMatch && genreMatch && yearMatch && ratingMatch;
  });

  // ✅ Genre filter logic remains, but buttons removed from UI
  const handleGenreFilter = (genre: string) => {
    const currentGenres = new Set(searchParams.getAll('genre'));
  
    if (currentGenres.has(genre)) {
      currentGenres.delete(genre);
    } else {
      currentGenres.add(genre);
    }
  
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('genre'); // Reset before updating
    currentGenres.forEach((g) => newParams.append('genre', g));
    setSearchParams(newParams, { replace: true });
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ✅ Removed the extra blue filter buttons but logic remains functional */}

      {/* ✅ Mobile-Responsive Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-video">
                  <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded-md flex items-center gap-1">
                    <span className="text-yellow-500 font-medium">{movie.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{movie.year}</span>
                    <div className="flex gap-2">
                      {movie.genre.slice(0, 2).map((g) => (
                        <span key={g} className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No movies found with the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
