import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TrendingGenres from "./components/TrendingGenres";
import Profiler from "./pages/Profiler.jsx";
import Navbar from "./components/navbar.jsx";
import Contact from "./pages/Contact.jsx";
import BookDetail from "./components/BookDetail.jsx";
import Reader  from  "./components/Reader.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<TrendingGenres />} />
        </Route>
        <Route path="/profiler" element={<Profiler />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Book/:id" element={<BookDetail />} />
        <Route path="/reader/:id" element={<Reader />} />

      </Routes>
    </BrowserRouter>
  );
}
