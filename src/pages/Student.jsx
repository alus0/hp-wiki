import { useEffect, useState } from "react";
import { getStudent } from "../api/api";
import {Link} from "react-router-dom";
import noImg from "../assets/noImg.jpg";

export default function Student() {
  const [students, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleNo, setVisibleNo] = useState(9);
  const [search, setSearch] = useState("");
  const [wizard, setWizard] = useState("all");
  const [alive , setAlive] = useState("all");

  useEffect(() => {
    getStudent().then((data) => {
      setStudent(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center text-white">Loading students...</p>;

  const filteredStudent = students.filter((s) =>
  s.name.toLowerCase().includes(search.toLowerCase()) &&
  (wizard === "all" || (wizard === "wizard" ? s.wizard : !s.wizard)) &&
  (alive === "all" || (alive === "alive" ? s.alive : !s.alive))
  );

  return (
    <div className="w-full px-4 mt-10">
      <div>
        <h1 className="text-4xl font-bold text-center text-red-900 mb-6 drop-shadow">
          Hogwarts Student
        </h1>

        <input
          type="text"
          placeholder="Search students by name..."
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

        {filteredStudent.length === 0 && (
          <p className="text-center text-gray-400 mb-6">
            No students found matching your search.
          </p>
        )}

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {filteredStudent.slice(0, visibleNo).map((s) => (
            <li
              key={s.name}
              className="bg-gradient-to-r from-red-800 via-red-700 to-gray-800 text-white border border-yellow-500 p-4 rounded-xl shadow-lg flex flex-col lg:flex-row gap-2 items-center hover:shadow-yellow-300 hover:border-yellow-300 transition">
              <img src={s.image || noImg} className="mb-4 w-48 h-64 lg:w-32 lg:h-48 object-cover rounded-lg mx-auto lg:mr-2"/>
              <span className="font-semibold tracking-wide">{s.name}</span>

              <Link to={`/students/${encodeURIComponent(s.name)}`}
                className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 transition ml-2">
                Details
              </Link>
            </li>
          ))}
        </ul>
        {visibleNo < filteredStudent.length && (
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
