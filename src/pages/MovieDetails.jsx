import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../api/api";
import noImg from "../assets/noImg.jpg";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovies().then((data) => {
      const found = data.find((m) => m.id === id);
      setMovie(found);
    });
  }, [id]);

  if (!movie) {
    return <p className="text-center text-white mt-10">Loading movie...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto text-white bg-gray-900 p-6 rounded-xl border border-green-500 mt-10">
      
      <h1 className="text-3xl font-bold mb-6 text-center ">{movie.attributes.title}</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 space-x-4">

      <img src={movie.attributes.poster || noImg} className="mb-4 w-48 h-64 object-cover rounded-lg mx-auto "/>

      <div className="space-y-1 text-center lg:text-left">
        <p><strong>Box Office:</strong> { movie.attributes.box_office|| "Not Known"}</p>
        <p><strong>Budget:</strong> { movie.attributes.budget|| "Not Known"}</p>
        <p><strong>Directors:</strong> { movie.attributes.directors|| "Not Known"}</p>
        <p><strong>Distributors:</strong> { movie.attributes.distributors|| "Not Known"}</p>
        <p><strong>Rating:</strong> { movie.attributes.rating|| "Not Known"}</p>
        <p><strong>Release Date:</strong> { movie.attributes.release_date|| "Not Known"}</p>
        <p><strong>Running Time:</strong> { movie.attributes.running_time|| "Not Known"}</p>        
        <p><strong>Summary:</strong> { movie.attributes.summary|| "Not Known"}</p>        
      </div>

      </div>
      <Link
        to="/movies"
        className="underline mt-6 inline-block text-green-400 hover:text-green-300"
      >
        Back to Movies
      </Link>
    </div>
  );
}
