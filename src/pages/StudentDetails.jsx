import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudent } from "../api/api";
import noImg from "../assets/noImg.jpg";
import { Link } from "react-router-dom";


export default function StudentDetail() {
  const { name } = useParams();
  const [students, setStudent] = useState(null);

  useEffect(() => {
    getStudent().then((data) => {
      const found = data.find(
        (s) => s.name === decodeURIComponent(name)
      );
      setStudent(found);
    });
  }, [name]);

  if (!students) return <p className="text-white">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto text-white bg-gray-900 p-6 rounded-xl border border-yellow-500 mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{students.name}</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 space-x-4">


      <img src={students.image || noImg} alt={students.name} className="mb-4 w-48 h-64 object-cover rounded-lg mx-auto "/>

      <div className="space-y-1 text-center lg:text-left">
        <p><strong>Species:</strong> {students.species || "Not Known"}</p>
        <p><strong>Gender:</strong> {students.gender || "Not Known"}</p>
        <p><strong>House:</strong> {students.house || "Not Known"}</p>
        <p><strong>Date of Birth:</strong> {students.dateOfBirth || "Not Known"}</p>
        <p><strong>Year of Birth:</strong> {students.yearOfBirth || "Not Known"} </p>
        <p><strong>Ancestry:</strong> {students.ancestry || "Not Known"}</p>
        <p><strong>Eye Colour:</strong> {students.eyeColour || "Not Known"}</p>
        <p><strong>Hair Colour:</strong> {students.hairColour || "Not Known"}</p>
        <p><strong>Wand's Wood:</strong> {students.wand.wood || "Not Known"}</p>
        <p><strong>Wand's Core:</strong> {students.wand.core || "Not Known"}</p>
        <p><strong>Wand's Length:</strong> {students.wand.length || "Not Known"}</p>
        <p><strong>Patronus:</strong> {students.patronus || "Not Known"}</p>
        <p><strong>Actor:</strong> {students.actor || "Not Known"}</p>
      </div>

      </div>
      <Link to="/students" className="underline mt-6 inline-block text-yellow-500 hover:text-yellow-400">
        Back to Students
      </Link>

    </div>
  );
}
