import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-900 via-purple-900 to-gray-900 text-yellow-300 px-6 py-4 shadow-xl border-b-2 border-yellow-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="lg:text-3xl text-xl  font-bold tracking-wider drop-shadow-lg">Harry Potter Wiki</h1>

        <div className="flex gap-6 font-semibold text-lg
                  grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/students" className="hover:text-yellow-100 transition">Students</Link>
          <Link to="/staff" className="hover:text-purple-200">Staff</Link>
          <Link to="/spells" className="hover:text-purple-300 transition">Spells</Link>
          <Link to="/books" className="hover:text-yellow-500 transition">Books</Link>
          <Link to="/movies" className="hover:text-yellow-600 transition">Movies</Link>
        </div>
      </div>
    </nav>
  );
}
