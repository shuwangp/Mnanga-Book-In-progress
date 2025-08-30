import { useParams , useSearchParams  } from "react-router-dom";
import { useEffect, useState } from "react";
import { Books } from "../data/Books";    


export default function Reader() {
  const { id } = useParams();
  const book = Books.find(b => b.id === parseInt(id));
  const [chapter, setChapter] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const storageKey = `lastChapter:${id}`;
  

  // โหลดตอนล่าสุดครั้งแรก /////////// ตอนกดรีตอนยีงรีอยู่ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect (()=>{
      const save=Number (localStorage.getItem(storageKey));
      if (save > 0 )setChapter(save)
  },[storageKey]);
// เซฟทุกครั้งที่ตอนเปลี่ยน ///// ตอนกดรีตอนยีงรีอยู่ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect (()=>{
    localStorage.setItem(storageKey, chapter);
  }, [chapter,storageKey]);

// อัปเดต URL เมื่อเปลี่ยนตอน (เพื่อแชร์ลิงก์)
  useEffect (() =>{
  const ch = Number(searchParams.get("ch"));
    if (ch > 0) setChapter(ch);
  }, []);
// อัปเดต URL เมื่อเปลี่ยนตอน (เพื่อแชร์ลิงก์)
  useEffect (()=>{
    searchParams.set("ch",String(chapter));
    setSearchParams(searchParams, { replace: true });
  },[chapter]);



  if (!book) return <div className="p-4">Book not found</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold">{book.title} - Chapter {chapter}</h1>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => setChapter(c => (c > 1 ? c - 1 : 1))} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"   
        >
            Back
        </button>
        <button  onClick={() => setChapter(c => c + 1)} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Next
        </button>

        </div>
    </div>
  );
}

