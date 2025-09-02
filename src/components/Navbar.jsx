import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">UniVerse</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/events" className="hover:text-gray-200">Events</Link>
          <Link to="/hackmate" className="hover:text-gray-200">HackMate</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
        </div>
      </div>
    </nav>
  );
}
