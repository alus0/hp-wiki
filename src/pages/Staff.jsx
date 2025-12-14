import { useEffect, useState } from "react";
import { getStaff } from "../api/api";
import {Link} from "react-router-dom";
import noImg from "../assets/noImg.jpg";

export default function Staff() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleNo, setVisibleNo] = useState(9);
  const [search, setSearch] = useState("");
  const [wizard, setWizard] = useState("all");
  const [alive , setAlive] = useState("all");
  const [error, setError] = useState(null);

  useEffect(() => {
    getStaff().then((data) => {
      setStaff(data);
      setLoading(false);
    })
    .catch(() => {
      setError("Failed to load staff");
      setLoading(false);
    });
}, []);

  if (loading) return <p className="text-center text-white">Loading staff...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  const filteredStaff = staff.filter((p) =>
  p.name.toLowerCase().includes(search.toLowerCase()) &&
  (wizard === "all" || (wizard === "wizard" ? p.wizard : !p.wizard)) &&
  (alive === "all" || (alive === "alive" ? p.alive : !p.alive))
  );

  return (
    <div className="w-full px-4 mt-10">
      <div>
        <h1 className="text-4xl font-bold text-center text-red-900 mb-6 drop-shadow">
          Hogwarts Staff
        </h1>

        <input
          type="text"
          placeholder="Search staff by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 w-full p-2 rounded border border-yellow-500 bg-gray-800 text-white mb-10"
        />

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select
            value={wizard}
            onChange={(e) => setWizard(e.target.value)}
            className="p-2 rounded border border-yellow-500 bg-gray-800 text-white"
          >
            <option value="all">All</option>
            <option value="wizard">Wizard</option>
            <option value="non-wizard">Non-Wizard</option>
          </select>

          <select
            value={alive}
            onChange={(e) => setAlive(e.target.value)}
            className="p-2 rounded border border-yellow-500 bg-gray-800 text-white"
          >
            <option value="all">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Deceased</option>
          </select>
        </div>

        {filteredStaff.length === 0 && (
          <p className="text-center text-gray-400 mb-6">
            No staff found matching your search.
          </p>
        )}

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {filteredStaff.slice(0,visibleNo).map((p) => (
            <li
              key={p.name}
              className="bg-gradient-to-r from-red-800 via-red-700 to-gray-800 text-white border border-yellow-500 p-4 rounded-xl shadow-lg flex flex-col lg:flex-row gap-2 items-center hover:shadow-yellow-300 hover:border-yellow-300 transition">
              <img src={p.image || noImg}  className="mb-4 w-48 h-64 lg:w-32 lg:h-48 object-cover rounded-lg  lg:mr-2" />
              <span className="font-semibold tracking-wide text-center">{p.name }-{p.house}</span>

              <Link to={`/staff/${encodeURIComponent(p.name)}`}
                className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 transition ml-2">
                Details
              </Link>
            </li>
          ))}
        </ul>
        {visibleNo < filteredStaff.length && (
          <button
            onClick={() => setVisibleNo(visibleNo + 9)}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
