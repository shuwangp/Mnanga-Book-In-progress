import nano from '../assets/nano.jpg';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Books } from '../data/Books';





export default function BookDetail() {
  const { id } = useParams();
  const book = Books.find(b => b.id === parseInt(id));
  const navigate = useNavigate ();

  if (!book) {
    return <div className="p-4">Book not found</div>;
  }

  return (
    <div className="p-6 grid md:grid-cols-[300px,1fr] gap-6">
      <img src={book.image} alt={book.title} className="w-[18rem] bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition hover:-translate-y-0.5 duration-200 cursor-pointer" />
      <div>
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p className="text-gray-700 mb-3">by {book.author}</p>
        <p className="text-gray-600 mb-6">{book.description}</p>
        {/* ปุ่มอ่านเลยจะไปทำใน step ถัดไป */}
        <button onClick={()=>navigate(`/reader/${book.id}`)}
        className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
          อ่านเลย
        </button>
      </div>
    </div>
  );
}