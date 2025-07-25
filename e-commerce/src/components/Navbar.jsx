import { useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";

function Navbar() {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  return (
    <>
      {/* Announcement Bar */}
      {isAnnouncementVisible && (
        <div className="bg-black text-white text-center py-2 px-4 relative">
          <span>Sign up and get 20% off to your first order. </span>
          <Link to="/signup" className="font-bold underline">Sign Up Now</Link>
          <button 
            onClick={() => setIsAnnouncementVisible(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Logo */}
            <Link to="/" className="font-bold text-2xl text-black">
              SHOP.CO
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1">
                  <span>Shop</span>
                  <span>▼</span>
                </button>
                {/* Dropdown menu would go here */}
              </div>
              <Link to="/sale" className="hover:text-gray-600">On Sale</Link>
              <Link to="/new-arrivals" className="hover:text-gray-600">New Arrivals</Link>
              <Link to="/brands" className="hover:text-gray-600">Brands</Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <HiOutlineSearch />
                </div>
              </div>
            </div>

            {/* User Icons */}
            <div className="flex items-center space-x-8 text-2xl">
              <Link to="/cart" className="relative">
                <HiOutlineShoppingCart />
              </Link>
              <Link to="/profile">
                <HiOutlineUser />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              ☰
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;