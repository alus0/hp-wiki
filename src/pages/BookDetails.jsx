import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooks } from "../api/api";
import noImg from "../assets/noImg.jpg";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBooks().then((data) => {
      const found = data.find((b) => b.id === id);
      setBook(found);
    });
  }, [id]);

  if (!book) {
    return <p className="text-center text-white mt-10">Loading book...</p>;
  }

  const { title, summary, release_date, pages, dedication } =
    book.attributes;

  return (
    <div className="max-w-3xl mx-auto text-white bg-gray-900 p-6 rounded-xl border border-green-500 mt-10">
      
      <h1 className="text-3xl font-bold mb-6 text-center ">{book.attributes.title}</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 space-x-4">

      <img src={book.attributes.cover || noImg} className="mb-4 w-48 h-64 object-cover rounded-lg mx-auto "/>

      <div className="space-y-1 text-center lg:text-left">
        <p><strong>Author:</strong> { book.attributes.author|| "Not Known"}</p>
        <p><strong>Pages:</strong> { book.attributes.pages|| "Not Known"}</p>
        <p><strong>Dedication:</strong> { book.attributes.dedication|| "Not Known"}</p>
        <p><strong>Release Date:</strong> { book.attributes.release_date|| "Not Known"}</p>  
        <p><strong>Summary:</strong> { book.attributes.summary|| "Not Known"}</p>        
      </div>

      </div>
      <Link
        to="/books"
        className="underline mt-6 inline-block text-green-400 hover:text-green-300"
      >
        Back to Books
      </Link>
    </div>
  );
}
