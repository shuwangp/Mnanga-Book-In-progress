import nano from '../assets/nano.jpg'
import { useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { Books } from '../data/Books';



export default function TrendingGenres() { 
  const navigate = useNavigate();
  const [query,setQuery] = useState("");
  const [results,setResults] = useState(Books);
  const [isLoading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  useEffect(() => {
    setError (null);
    setLoading(true);
    const t = setTimeout(() => {
      const q = query.trim().toLowerCase();
      const filtered = Books.filter(b=>{
        return (
          q === "" ||
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q)
        );
      });
      setResults(filtered);
      setLoading(false);
    },400);
    return () => clearTimeout(t);
  },[query]);


  return (
    <div> 
      <SearchBar value={query} onChange={setQuery} />
      <h1 className=' text-xl font-semibold mt-8 mb-4 '>Search</h1>   
    <div className='flex gap-6 flex-wrap'>
      {isLoading && <p className='text-gray-500'>Loading</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {error === null && !isLoading && results.length === 0 && (<p className='text-gray-500'>No results found</p>
      )}
      {!isLoading && results.length > 0 && results.map(book => (
          <div 
            key={book.id} 
            onClick={() => navigate(`/Book/${book.id}`)}
            className="w-[18rem] bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition hover:-translate-y-0.5 duration-200 cursor-pointer"
          >
            <div className="aspect-[3/4] w-35 mb-3 bg-gray-200 rounded-lg">
              <img src={book.image} alt={book.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h1 className="font-semibold leading-snug">{book.title}</h1>
            <p className="text-sm text-gray-700">by {book.author}</p>
            <p className="text-sm text-gray-500">{book.description}</p>
          </div>
        ))}
    </div>
      
      <p className="text-xl font-semibold mt-8 mb-4 ">Recommended Books</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {/* การ์ด Recommended 1 */}
      <div className=" w-[21rem] h-[18rem] bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition hover:-translate-y-0.5 duration-200 cursor-pointer">
       <div className="aspect-[4/5] w-35 mb-3 bg-gray-200 rounded-lg"><img src={nano} alt="nano"className='w-full h-full object-cover rounded-lg' /></div>
       <h1 className="font-semibold leading-snug ">The Great Adventure</h1>
       <p className="text-sm text-gray-700">by Emily Bronte</p>
       <p className="text-sm text-gray-500">A journey through the wilderness that changes everything.</p>
      </div>

      {/* การ์ด Recommended 2 */}
        <div className=" w-[21rem] h-[18rem] bg-white rounded-xl shadow-sm p-4 hover:shadow-lg transition hover:-translate-y-0.5 duration-200 cursor-pointer">
       <div className="aspect-[4/5] w-35 mb-3 bg-gray-200 rounded-lg"><img src={nano} alt="nano"className='w-full h-full object-cover rounded-lg' /></div>
       <h1 className="font-semibold leading-snug ">The Great Adventure</h1>
       <p className="text-sm text-gray-700">by Emily Bronte</p>
       <p className="text-sm text-gray-500">A journey through the wilderness that changes everything.</p>
      </div>
      </div>
    </div>
  );
}
