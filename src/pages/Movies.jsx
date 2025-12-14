import { useEffect, useState } from "react";
import { getMovies } from "../api/api";
import { Link } from "react-router-dom";
import noImg from "../assets/noImg.jpg";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading movies...</p>;
  }

  return (
    <div className="w-full px-4 mt-10">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10 drop-shadow">
        Harry Potter Movies
      </h1>

      <ul
        className="grid grid-cols-1
          md:grid-cols-3
          lg:grid-cols-4 gap-4 "
      >
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gradient-to-r from-green-800 via-green-900 to-gray-900 text-white border border-yellow-500 p-4 rounded-xl shadow-lg flex flex-col gap-2 items-center hover:shadow-purple-300 hover:border-purple-300 transition">

            <img src={movie.attributes.poster || noImg}  className="mb-4 w-48 h-64 lg:w-32 lg:h-48 object-cover rounded-lg mx-auto" />
            <span className="text-green-300 tracking-wide">{movie.attributes.title}
                <br/>{movie.attributes.release_date}
            </span>
            <Link to={`/movies/${(movie.id)}`}
                className="bg-purple-500 text-black px-3 py-1 rounded hover:bg-purple-400 transition mt-2">
                Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
