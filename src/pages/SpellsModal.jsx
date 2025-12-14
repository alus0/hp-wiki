export default function SpellsModal({ spells, onClose }) {
  if (!spells) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div  className="bg-gradient-to-br from-purple-900 via-gray-900 to-black text-yellow-300 p-6 rounded-xl shadow-2xl border border-yellow-600">
        <h2 className="text-xl font-bold mb-2 text-center">{spells.name}</h2>

        <ul className="text-sm mb-4 space-y-1">
          <li><strong>Description:</strong> {spells.description || "Unknown"}</li>
        </ul>

        <button
          onClick={onClose}
          className="bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
