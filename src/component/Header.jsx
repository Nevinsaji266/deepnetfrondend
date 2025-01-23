import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">DEEPNETSOFT</div>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-8 absolute lg:static top-16 left-0 right-0 bg-black lg:bg-transparent z-10`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
            <li>
              <Link
                to="/"
                className="text-white hover:text-red-500 text-lg no-underline"    style={{textDecoration:"none"}}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-white hover:text-red-500 text-lg no-underline"    style={{textDecoration:"none"}}
              >
                Menu
              </Link>
            </li>
            <li>
              <a
                href="#reservation"
                className="text-white hover:text-red-500 text-lg no-underline"   style={{textDecoration:"none"}}
              >
                Make a Reservation
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-red-500 text-lg no-underline"
                style={{textDecoration:"none"}}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
