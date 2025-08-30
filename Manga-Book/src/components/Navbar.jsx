import TrendingGenres from "./TrendingGenres"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ===== Navbar ===== */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">📚 Book Discovery</span>
        </div>

        {/* Menu */}
        <div className="flex gap-3">
          <Link to="/Home" className="px-4 py-2 rounded-md bg-black font-semibold text-white ">Home</Link>
          <Link to="/profiler" className="px-4 py-2 rounded-md bg-black font-semibold text-white  ">Profile</Link>
          <Link to="/Contact" className="px-4 py-2 rounded-md bg-black font-semibold text text-white">Contact</Link>
        </div>
      </nav>

  

       {/* ===== Main Content ===== */}
     <main className="flex-grow px-6 md:px-10 lg:px-16 py-8">
      <div className="max-w-1xl mx-auto">
        <a href=""></a>
        <TrendingGenres />   {/* ใส่ component การ์ด */}
      </div>
    </main>

      {/* ===== Footer ===== */}
      <footer className="w-full bg-black text-white py-4">
        <div className="flex justify-between items-center px-8">
          {/* ซ้าย */}
          <p className="text-sm">© 2025 Book Discovery. All rights reserved.</p>
          {/* ขวา */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <Link to="/Contact" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
