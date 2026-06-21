import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="bg-white shadow-md sticky top-0 z-50"> <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


    <div>
      <h1 className="text-2xl font-bold">
        <span className="text-blue-700">Global</span>
        <span className="text-green-600">Exim</span>
      </h1>

      <p className="text-xs text-gray-500">
        Exporting Nature's Best Worldwide
      </p>
    </div>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-6 font-medium text-gray-700">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/export-markets">Export Markets</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>

    {/* Mobile Button */}
    <button
      className="md:hidden text-2xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white border-t">
      <ul className="flex flex-col p-4 space-y-4">

        <li>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/export-markets"
            onClick={() => setMenuOpen(false)}
          >
            Export Markets
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>

      </ul>
    </div>
  )}
</nav>

);
}

export default Navbar;
