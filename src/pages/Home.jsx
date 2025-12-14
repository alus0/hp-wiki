import { Link } from "react-router-dom";
import gryffindor from "../assets/gryffindor.jpg";
import hufflepuff from "../assets/hufflepuff.jpg";
import ravenclaw from "../assets/ravenclaw.jpg";
import slytherin from "../assets/slytherin.jpg";
export default function Home() {

  return (

    <div className="w-full px-4 mt-10">
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow mb-4">
          Welcome to the Wizarding World
        </h1>
        <p className="max-w-xl text-green-200 text-lg">
          Explore spells, houses, students, professors and magical lore of Hogwarts.
        </p>
      </section>

      <p className="text-center text-red-200 text-2xl mb-10 ">
          Welcome to the Harry Potter Wiki 🪄  
        This web application allows you to explore students, staff members, movies,books and spells from the Harry Potter universe using data retrieved from
        public APIs.
        Dive into the enchanting universe of Harry Potter and uncover the magic within!
      </p>

      <section className="py-16 ">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
          The Houses of Hogwarts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            <img src={gryffindor} className="h-64 w-64 mx-auto mb-4 rounded-xl p-4 text-center hover:scale-105 transition"  />
            <img src={slytherin} className="h-64 w-64 mx-auto mb-4 rounded-xl p-4 text-center hover:scale-105 transition" />
            <img src={ravenclaw} className="h-64 w-64 mx-auto mb-4 rounded-xl p-4 text-center hover:scale-105 transition" />
            <img src={hufflepuff} className="h-64 w-64 mx-auto mb-4 rounded-xl p-4 text-center hover:scale-105 transition" />
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">
          The Magical Movies
        </h2>
        <Link to="/movies" className="px-6 py-3 bg-yellow-800 rounded-lg text-white hover:bg-yellow-500 transition">
          Movies
        </Link>
      </section>  

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Where all the magic starts - The Books
        </h2>
        <Link to="/books" className="px-6 py-3 bg-blue-800 rounded-lg text-white hover:bg-blue-500 transition">
          Books
        </Link>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-4">
          The Young Wizards
        </h2>
        <Link to="/students" className="px-6 py-3 bg-red-800 rounded-lg text-white hover:bg-green-500 transition">
          Meet with Students
        </Link>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Our Beloved Professors & Staff
        </h2>
        <Link to="/staff" className="px-6 py-3 bg-green-800 rounded-lg text-white hover:bg-purple-500 transition">
          Meet with Staff
        </Link>
      </section>

      <footer className="bg-black py-6 text-center text-gray-400 text-sm">
        <p>Harry Potter Wiki Project</p>
        <p>Made with magic </p>
      </footer>
    </div> 

  );
}
