


import React from 'react';
import { Link } from 'react-router'; // 'react-router' এর বদলে 'react-router-dom' ব্যবহার করা ভালো
import SearchPopup from '../Ui/SearchPopup';
import { FaRegUser } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  const categories = [
    "Women's Fashion",
    "men's Fashion",
    "Kid's Fashion",
    'Home & Lifestyle',
    'Arts & Crafts',
    'Computer & Electronics',
    'Food & Grocery',
  ];

  return (
    <header>
      <nav className="pb-3 md:py-8">
        <div className="container flex items-center justify-between gap-6 flex-wrap md:flex-nowrap">
          {/* Logo */}
          <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>

          {/* Search Box with Popup Implementation */}
          <div className="order-3 md:order-2 w-full max-w-3xl">
      
             <SearchPopup />
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4 md:gap-10 text-secondary text-[16px] font-[400] order-2 md:order-3">
            <Link to="/login" className="flex items-center gap-[6px]">
              <FaRegUser className="text-xl" />
              <span className="hidden md:flex">Login</span>
            </Link>

            <Link to="/wishlist" className="flex items-center gap-[6px]">
              <GiSelfLove className="text-xl" />
              <span className="hidden md:flex">Wishlist</span>
            </Link>

            <Link to="/shop" className="flex items-center gap-[6px]">
              <BsCart3 className="text-xl" />
              <span className="hidden md:flex">My Cart</span>
              <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                9
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Categories Bar */}
      <div className='pb-2.5 border-b border-gray-200'>
        <div className="container">
          <ul className="flex items-center justify-center gap-[20px] md:gap-[60px] overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to="/categorys"
                  className="text-secondary text-[16px] font-[400] whitespace-nowrap hover:text-blue-500"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
