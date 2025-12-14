import { useEffect, useState } from "react";
import { getSpells } from "../api/api";
import SpellsModal from "./SpellsModal";

export default function Spells() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpells, setSelectedSpells] = useState(null);
  const [visibleNo, setVisibleNo] = useState(9);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSpells().then((data) => {
      setSpells(data);
      setLoading(false);
    })
    .catch(() => {
      setError("Failed to load spells");
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center text-white">Loading spells...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="w-full px-4 mt-10">
      <div>
        <h1 className="text-4xl font-bold text-center text-red-900 mb-6 drop-shadow">
          Hogwarts Spells
        </h1>
        <ul className="space-y-4">
          {spells.slice(0, visibleNo).map((s) => (
            <li
              key={s.name}
              className="bg-gradient-to-r from-red-800 via-red-700 to-gray-800 text-white border border-yellow-500 p-4 rounded-xl shadow-lg flex justify-between items-center hover:shadow-yellow-300 hover:border-yellow-300 transition">
              <span className="font-semibold tracking-wide">{s.name}</span>
              <button onClick={() =>setSelectedSpells(s)}
                className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400 transition">
                Details
              </button>
            </li>
          ))}
        </ul>
        {visibleNo < spells.length && (
          <button
            onClick={() => setVisibleNo(visibleNo + 9)}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
          >
            Load More
          </button>
        )}

        {selectedSpells && (
          <SpellsModal
            spells={selectedSpells}
            onClose={() => setSelectedSpells(null)}
          />
        )}
      </div>

      <footer className="w-full text-center text-sm py-4  mt-10">
        <p>
          This magic is spelled by{" "}
          <a href="https://hp-api.onrender.com/" className="text-yellow-400 hover:text-yellow-300 underline">HP API </a>{" "}
          and{" "}
          <a href="https://potterdb.com/" className="text-purple-400 hover:text-purple-300 underline">PotterDB</a>
        </p>
      </footer>
    </div>
  );
}
