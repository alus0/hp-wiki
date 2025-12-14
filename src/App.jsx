import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Student from "./pages/Student.jsx";
import StudentDetail from "./pages/StudentDetails.jsx";
import Staff from "./pages/Staff.jsx";
import StaffDetail from "./pages/StaffDetails.jsx";
import Spells from "./pages/Spells.jsx";
import Movies from "./pages/Movies.jsx";
import MovieDetail from "./pages/MovieDetails.jsx";
import Books from "./pages/Books.jsx";
import BookDetail from "./pages/BookDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="students" element={<Student />} />
        <Route path="students/:name" element={<StudentDetail />} />
        <Route path="staff" element={<Staff />} />
        <Route path="staff/:name" element={<StaffDetail />} />
        <Route path="spells" element={<Spells />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<BookDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
