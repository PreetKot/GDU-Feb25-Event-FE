import { Link } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/8 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md border-b border-white/10">
      {/* Logo */}
      <Link to={"/"} className="text-xl font-bold text-white">
        GDU
      </Link>

      {/* Navigation Links */}
      <ul className="md:flex hidden  items-center space-x-6 text-white">
        {["Home", "Feature", "Card", "About Us", "FAQ's"].map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to="/"
              className="relative z-10 text-white hover:text-red-400 transition"
            >
              {item}
            </Link>
            {/* Glow Effect */}
            <span className="absolute inset-0 bg-red-500 opacity-0 blur-lg rounded-lg group-hover:opacity-50 transition duration-300"></span>
          </li>
        ))}
      </ul>
      {/* Call-to-Action Button */}
      <div className="md:flex hidden">
        <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
          Try Demo Now
        </button>
      </div>
      <MobileSidebar />
    </nav>
  );
};

export default Navbar;
