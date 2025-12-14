import { useEffect, useState } from "react";
import { getBooks } from "../api/api";
import { Link } from "react-router-dom";
import noImg from "../assets/noImg.jpg";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading books...</p>;
  }
  return (
    <div className="w-full px-4 mt-10">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10 drop-shadow">
        Harry Potter Books
      </h1>

      <ul
        className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <li
            key={book.id}
            className="bg-gradient-to-r from-green-800 via-green-900  to-gray-900 text-white border border-yellow-500 p-4 rounded-xl shadow-lg flex flex-col gap-2 items-center hover:shadow-purple-300 hover:border-purple-300 transition">
            <img src={book.attributes.cover || noImg}  className="mb-4 w-48 h-64 lg:w-32 lg:h-48 object-cover rounded-lg mx-auto" />
            <span className="text-green-300 tracking-wide">{book.attributes.title}
                <br/>{book.attributes.release_date}
            </span>
            <Link to={`/books/${(book.id)}`}
                className="bg-purple-500 text-black px-3 py-1 rounded hover:bg-purple-400 transition mt-2">
                Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
