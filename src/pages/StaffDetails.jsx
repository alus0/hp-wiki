import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStaff } from "../api/api";
import noImg from "../assets/noImg.jpg";
import { Link } from "react-router-dom";

export default function StaffDetail() {
  const { name } = useParams();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    getStaff().then((data) => {
      const found = data.find(
        (p) => p.name === decodeURIComponent(name)
      );
      setStaff(found);
    });
  }, [name]);
  if (!staff) return <p className="text-white">Loading...</p>;
  return (
    <div className="max-w-3xl mx-auto text-white bg-gray-900 p-6 rounded-xl border border-yellow-500 mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{staff.name}</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 space-x-4">


      <img src={staff.image || noImg} alt={staff.name} className="mb-4 w-48 h-64 object-cover rounded-lg mx-auto "/>

      <div className="space-y-1 text-center lg:text-left">
        <p><strong>Species:</strong> {staff.species || "Not Known"}</p>
        <p><strong>Gender:</strong> {staff.gender || "Not Known"}</p>
        <p><strong>House:</strong> {staff.house || "Not Known"}</p>
        <p><strong>Date of Birth:</strong> {staff.dateOfBirth || "Not Known"}</p>
        <p><strong>Year of Birth:</strong> {staff.yearOfBirth || "Not Known"} </p>
        <p><strong>Ancestry:</strong> {staff.ancestry || "Not Known"}</p>
        <p><strong>Eye Colour:</strong> {staff.eyeColour || "Not Known"}</p>
        <p><strong>Hair Colour:</strong> {staff.hairColour || "Not Known"}</p>
        <p><strong>Wand's Wood:</strong> {staff.wand.wood || "Not Known"}</p>
        <p><strong>Wand's Core:</strong> {staff.wand.core || "Not Known"}</p>
        <p><strong>Wand's Length:</strong> {staff.wand.length || "Not Known"}</p>
        <p><strong>Patronus:</strong> {staff.patronus || "Not Known"}</p>
        <p><strong>Actor:</strong> {staff.actor || "Not Known"}</p>
      </div>

      </div>
      <Link to="/staff" className="underline mt-6 inline-block text-yellow-500 hover:text-yellow-400">
        Back to Staff
      </Link>
    </div>
  );
}
