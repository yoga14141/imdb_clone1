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
import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const Movies = [
    {
      id: 1,
      title: "Master",
      rating: 7.4,
      year: 2021,
      duration: "2h 59 min",
      genre: ["Action", "Crime", "Drama",],
      director: "Lokesh Kanagaraj",
      description:
        "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDM4MTkxMGUtMzQ5OC00NTNiLWJmMGItNjQ0OGNiYTg2OWY3XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://m.media-amazon.com/images/M/MV5BMjEyMGJiZDMtNjM1My00YTk3LWI4OWItOGZkODYxY2IyZWU4XkEyXkFqcGc@._V1_.jpg?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 1,
          name: "Joseph Vijay",
          role: "JD",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfeR2BgFiOeEzB-qGSnbI50-j2ytQgSeCsA&s?auto=format&fit=crop&w=200&q=80",
          bio: "Referred to by fans and media as Thalapathy (commander), Vijay is the highest paid actor in Tamil cinema",
        },
        {
          id: 2,
          name: "Vijay Sethupathi",
          role: "Bhavani",
          image:
            "https://i.pinimg.com/236x/8d/94/a0/8d94a050f6ef655e3218b1396a1e2aa9.jpg?auto=format&fit=crop&w=200&q=80",
          bio: "Indian actor, producer, lyricist, and dialogue writer",
        },
      ],
      trailer: "https://youtu.be/UTiXQcrLlv4?si=Xl0VJxQRth_fKBU7",
      awards: ["Filmfare Award South", "South Indian International Award"],
      boxOffice: "₹220–300 crore",
      language: "Tamil",
      productionCompany: "XB Film Creators",
      releaseDate: "13 January 2021",
      metacriticScore: 81,
      rottenTomatoesScore: 90,
    },
    {
      id: 2,
      title: "Premalu",
      rating: 8.4,
      year: 2024,
      duration: "156 min",
      genre: ["Comedy", "Drama", "Romance"],
      director: "Girish A D",
      description:
        "Sachin Santhosh, a graduate from Kerala, who plans to move to UK but instead goes to Hyderabad to take a GATE course, where he meets and falls in love with Reenu Roy, an IT company employee.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Premalu_film_poster.jpg/220px-Premalu_film_poster.jpg?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://www.acmodasi.in/amdb/images/movie/1/h/premalu-2024-djMI0D.jpg?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 3,
          name: "Naslen K. Gafoor",
          role: "Sachin",
          image:
            "https://m.media-amazon.com/images/M/MV5BNTQ5NzVjYTktYjk5NS00NzY2LTg3OTQtMjYwZDFmZGVjYmU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg?auto=format&fit=crop&w=200&q=80",
          bio: "Naslen K. Gafoor is an Indian actor who appears in Malayalam films.",
        },
        {
          id: 4,
          name: "Mamitha Baiju",
          role: "Reenu",
          image:
            "https://yupbeat.com/wp-content/uploads/2024/04/Mamitha-Baiju-921x1024.jpeg?auto=format&fit=crop&w=200&q=80",
          bio: "Acclaimed actress with numerous awards",
        },
      ],
      trailer: "https://youtu.be/rR_2ti4l3nM?si=4kvHARgtrkDxD2db",
      awards: ["IFF Award", "Indian Film Festival"],
      boxOffice: " ₹136.25 crore[",
      language: "Malayalam",
      productionCompany: "Bhavana Studios",
      releaseDate: "9 February 2024",
      metacriticScore: 89,
      rottenTomatoesScore: 93,
    },
    {
      id: 3,
      title: "Amaran",
      rating: 8.3,
      year: 2024,
      duration: "169 min",
      genre: ["Action-Epic", "Biography", "Love",],
      director: "Rajkumar Periyasamy",
      description:
        "The film follows Indhu Rebecca Varghese, Mukund's wife, who narrates the life of the Major on her way to New Delhi to receive the Ashoka Chakra, which was awarded posthumously to Mukund.",
      image:
        "https://i.pinimg.com/236x/2f/be/63/2fbe63faa6fc3fbe3b2d5a2c19f80f74.jpg?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://moviegalleri.net/wp-content/gallery/amaran-3/1_amaran-hd-images-763fa82.jpg?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 5,
          name: "Sivakarthikeyan",
          role: "Mukund Varadharajan",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBrI1WwNUjdPjOfKOQjRcFcFdFkQG6l0gdg&s?auto=format&fit=crop&w=200&q=80",
          bio: "SK, is an Indian actor, playback singer, lyricist, film producer and television presenter, who works predominantly in Tamil cinema.",
        },
        {
          id: 6,
          name: "Sai Pallavi",
          role: "Indhu Rebecca Varghese",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sai_Pallavi_at_Mca-pre-release-event.jpg/330px-Sai_Pallavi_at_Mca-pre-release-event.jpg?auto=format&fit=crop&w=200&q=80",
          bio: "Legendary actor with diverse roles",
        },
      ],
      trailer: "https://youtu.be/hylIXfZeB4c?si=QCrx4MnOU9EeBNH0",
      awards: ["Chennai International Film Festival"],
      boxOffice: "₹335 crore",
      language: "Tamil",
      productionCompany: "Raaj Kamal Films International",
      releaseDate: "31 October 2024",
      timesofindiaScore: 7.5,
      rottenTomatoesScore: 90,
    },
    {
      id: 4,
      title: "Good Night",
      rating: 7.9,
      year: 2023,
      duration: "2 hr 22 min",
      genre: ["Drama", "Romance", "Comedy"],
      director: "Vinayak Chandrasekaran",
      description:
        "A simple boy-next-door whose biggest problem in life is his snoring, falls in love with a girl. Follow how the couple overcome his sleeping problem while living together.",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/29c55aa980639b2ff4cb59682b98b7b0ecf3c1c151fae56bdca5e03ef91165c1.jpg?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://wallpapercave.com/wp/wp12754979.jpg?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 7,
          name: "Manikandan",
          role: "Mohan",
          image:
            "https://m.media-amazon.com/images/M/MV5BOTczYmM5NjYtZGE0Ni00NzI3LWIxYTktYjhiMWFlZjI0OTQ4XkEyXkFqcGc@._V1_.jpg?auto=format&fit=crop&w=200&q=80",
          bio: "Mimicry Artist and a upcoming Actor",
        },
        {
          id: 8,
          name: "Meetha Ragunath",
          role: "Anu",
          image:
            "https://static.toiimg.com/photo/100933828/100933828.jpg?v=3?auto=format&fit=crop&w=200&q=80",
          bio: "Upcoming natural actress",
        },
      ],
      trailer: "https://youtu.be/eLPePlnFoho?si=LKaiqqKdF58khZxe",
      awards: ["Filmfare awards South ", "SIIMA Awards"],
      boxOffice: "4 Crore",
      language: "Tamil",
      productionCompany: "Million Dollar Studios",
      releaseDate: "12 May 2023",
      metacriticScore: 94,
      rottenTomatoesScore: 91,
    },{
      id: 5,
      title: "Meiyalagan",
      rating: 7.9,
      year: 2024,
      duration: "@ hr 59 min",
      genre: ["Drama", "Feel Good", "Family"],
      director: "C.Prem Kumar",
      description:
        "A man's life is changed when he bumps into someone from his hometown in this moving Tamil-language drama; gentle scenes are occasionally punctuated by sporting threat and recollections of violence.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLypndWexP6ooK7NJnXjraZDJuHqfHxp19FQ&s?auto=format&fit=crop&w=2000&q=80",
      backdrop:
        "https://www.deccanchronicle.com/h-upload/2024/10/22/1854956-meiyazhagansott.jpg?auto=format&fit=crop&w=2000&q=80",
      cast: [
        {
          id: 7,
          name: "Aravind Swamy",
          role: "Arulmozhi Varman",
          image:
            "https://m.media-amazon.com/images/M/MV5BMGU0NTg4NzctYmM5Yi00NTExLTg0NDktNjdkYWI0YzRkZTRjXkEyXkFqcGc@._V1_.jpg?auto=format&fit=crop&w=200&q=80",
          bio: "90's Famous Actor",
        },
        {
          id: 8,
          name: "Karthi",
          role: "Meiyalagan",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnQHjMJC8Gl9i15CzljvhXcec_gPK4nt0S5hRbG1xGI_bM_HoTgWstf3KXCCsReff3M0&usqp=CAU?auto=format&fit=crop&w=200&q=80",
          bio: "Award-winning Tamil actor",
        },
      ],
      trailer: "https://youtu.be/YGJOcMtnG1Q?si=5ejI2Zg7j2UDusyw",
      awards: ["Filmfare Award South", "International Film Festival"],
      boxOffice: "45.50 Crore",
      language: "Tamil",
      productionCompany: "2D Entertainment",
      releaseDate: "27 September 2024",
      metacriticScore: 94,
      rottenTomatoesScore: 91,
    },

  ];
  const { id } = useParams();
  const movie = Movies.find((m) => m.id === Number(id)) || Movies[0];
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
                <button className="bg-gray-800/80 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Add to Watchlist
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
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {movie.description}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Awards & Recognition</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {movie.awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span>{award}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <span>Metacritic: {movie.metacriticScore}/100</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-red-500" />
                  <span>Rotten Tomatoes: {movie.rottenTomatoesScore}%</span>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-6">Top Cast</h2>
              <div className="grid grid-cols-2 gap-6">
                {movie.cast.map((actor) => (
                  <Link
                    key={actor.id}
                    to={`/actor/${actor.id}`}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-700/50 transition-colors flex gap-4"
                  >
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {actor.name}
                      </h3>
                      <p className="text-gray-400 mb-2">{actor.role}</p>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {actor.bio}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold mb-4">Movie Info</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-gray-400">Director</dt>
                    <dd>{movie.director}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400">Production Company</dt>
                    <dd>{movie.productionCompany}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="text-gray-400">Box Office</dt>
                    <dd className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      {movie.boxOffice}
                    </dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <dt className="text-gray-400">Language</dt>
                    <dd className="flex items-center gap-1">
                      <Globe className="w-4 h-4 text-blue-500" />
                      {movie.language}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;