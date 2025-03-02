import React from "react";
import Hero from "../components/Hero.tsx";
import { Award, Clock, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCarousel from "../components/MovieCarousel.tsx";

const Home = () => {
  const trendingMovies = [
    {
      id: 1,
      title: "Master",
      rating: 7.4,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDM4MTkxMGUtMzQ5OC00NTNiLWJmMGItNjQ0OGNiYTg2OWY3XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg?auto=format&fit=crop&w=800&q=80",
      year: 2021,
      genre: ["Action", "Drama", "Crime"],
    },
    {
      id: 2,
      title: "Premalu",
      rating: 8.2,
      image:
        "https://m.media-amazon.com/images/M/MV5BY2Q2YzEzNGUtZWYxYS00YTlhLTgyOTctYTgwNWIxZGE0MDJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Drama", "Comedy", "Love"],
    },
    {
      id: 3,
      title: "Amaran",
      rating: 7.0,
      image:
        "https://m.media-amazon.com/images/M/MV5BNDhhN2FmYTktYmU0Mi00ZmIwLTk5YjAtYjhmODlhOGZiOTFiXkEyXkFqcGc@._V1_.jpg?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Action-epic", "Biography", "Love"],
    },
    {
      id: 4,
      title: "Good Night",
      rating: 8.5,
      image:
        "https://img.nowrunning.com/content/movie/2023/good-27705/bg2_goodnight.jpg?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Love", "Drama", "Comedy"],
    },
    {
      id: 5,
      title: "Premalu",
      rating: 7.8,
      image:
        "https://static.toiimg.com/thumb/msid-105647632,width-1280,height-720,resizemode-4/105647632.jpg?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Love", "Romance", "Comedy"],
    },
  ];

  const upcomingMovies = [
    {
      id: 6,
      title: "Parasakthi",
      rating: 8.0,
      image:
        "https://static.moviecrow.com/gallery/20250130/241316-Parasakthi%20Sivakarthikeyan%20Sudha%20Kongara%20(1).jpg?auto=format&fit=crop&w=800&q=80",
      year: 2026,
      genre: ["Action", "Thriller", "Adventure"],
    },
    {
      id: 8,
      title: "Demonty Colony : Part-1",
      rating: 7.0,
      image:
        "https://m.media-amazon.com/images/M/MV5BYjEzMzYyOWQtYWUwMy00NzNhLTg0OTEtOWFhMjFhYTRhYTk5XkEyXkFqcGc@._V1_.jpg?auto=format&fit=crop&w=800&q=80",
      year: 2024,
      genre: ["Horror", "Thriller", "Comedy"],
    },
  ];

  return (
    <div>
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: TrendingUp,
              label: "Trending",
              path: "/movies?sort=trending",
              color: "bg-yellow-500",
            },
            {
              icon: Star,
              label: "Top Rated",
              path: "/top-rated",
              color: "bg-purple-500",
            },
            {
              icon: Clock,
              label: "Coming Soon",
              path: "/coming-soon",
              color: "bg-blue-500",
            },
            {
              icon: Award,
              label: "Awards",
              path: "/awards",
              color: "bg-red-500",
            },
          ].map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className={`${category.color} p-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-70 transition-opacity`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.label}</span>
            </Link>
          ))}
        </div>
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
              Trending Now
            </h2>
            <Link to="/movies?sort=trending" className="text-yellow-500 hover:text-yellow-400">
              View All
            </Link>
          </div>
          <MovieCarousel movies={trendingMovies}/>
        </section>
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clock className="w-6 h-6 text-yellow-500" />
              Coming Soon
            </h2>
            <Link to="/coming-soon" className="text-yellow-500 hover:text-yellow-400">
              View All
            </Link>
          </div>
          <MovieCarousel movies={upcomingMovies}/>
        </section>
      </main>
    </div>
  );
};

export default Home;