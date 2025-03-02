import React, { useState, useCallback } from 'react';
import { Film, Search, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.tsx';
import AuthModals from '../components/AuthModals.tsx';
import debounce from 'lodash/debounce';

const genres = ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Romance', 'Biography', 'History', 'Crime'];
const years = ['2022', '2023', '2024'];
const ratings = ['7+', '8+'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const { user, logout } = useAuth();

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      if (query.trim()) {
        navigate(`/movies?search=${encodeURIComponent(query)}`);
      }
    }, 500),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleFilterChange = (type: string, value: string) => {
    if (type === 'genre') {
      setSelectedGenre(value === selectedGenre ? null : value);
    } else if (type === 'year') {
      setSelectedYear(value === selectedYear ? null : value);
    } else if (type === 'rating') {
      setSelectedRating(value === selectedRating ? null : value);
    }

    setTimeout(() => applyFilters(), 10); // Small delay to ensure state updates before applying filters
  };

  const applyFilters = () => {
    const queryParams = new URLSearchParams();
    if (selectedGenre) queryParams.append('genre', selectedGenre);
    if (selectedYear) queryParams.append('year', selectedYear);
    if (selectedRating) queryParams.append('rating', selectedRating);
    navigate(`/movies?${queryParams.toString()}`);
  };

  const clearFilters = () => {
    setSelectedGenre(null);
    setSelectedYear(null);
    setSelectedRating(null);
    navigate('/movies');
  };

  const navItems = [
    { label: 'Movies', path: '/movies' },
    { label: 'Top Rated', path: '/top-rated' },
    { label: 'Coming Soon', path: '/coming-soon' },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90">
            <Film className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold text-white">MovieDB</span>
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search movies..."
                className="bg-zinc-900 text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64 transition-all"
              />
            </div>

            {navItems.map(item => (
              <Link key={item.label} to={item.path} className="text-zinc-300 hover:text-yellow-400 transition">
                {item.label}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-zinc-300">Welcome, {user.username}!</span>
                <button
                  onClick={logout}
                  className="bg-red-500 px-4 py-1 rounded-md text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-yellow-500 px-4 py-1 rounded-md text-black hover:bg-yellow-600 transition"
              >
                Login / Signup
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-zinc-300 hover:text-yellow-500">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 p-4 bg-black/90 rounded-lg">
            {navItems.map(item => (
              <Link key={item.label} to={item.path} className="text-zinc-300 hover:text-yellow-400 transition">
                {item.label}
              </Link>
            ))}

            {user ? (
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-1 rounded-md text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-yellow-500 px-4 py-1 rounded-md text-black hover:bg-yellow-600 transition"
              >
                Login / Signup
              </button>
            )}
          </div>
        )}

        {/* Filters Section */}
        <div className="flex flex-wrap gap-2 py-4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-300">Genres:</span>
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => handleFilterChange('genre', genre)}
                className={`px-4 py-1 rounded-full ${
                  selectedGenre === genre ? 'bg-yellow-500 text-black' : 'bg-zinc-800 text-zinc-300'
                } hover:bg-yellow-500 hover:text-black transition`}
              >
                {genre}
              </button>
            ))}
          </div>

          <button onClick={clearFilters} className="ml-auto bg-red-500 px-4 py-1 rounded-md text-white hover:bg-red-600">
            Clear Filters
          </button>
        </div>

        {isAuthModalOpen && <AuthModals isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
