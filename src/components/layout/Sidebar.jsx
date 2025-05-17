import { useState, useEffect } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from 'react-router';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => { 
    const handleResize = () => {
      const mobile = window.innerWidth < 650; // Tailwind's md breakpoint
      if (mobile) {
        setIsCollapsed(true); // Auto-collapse on mobile
      } else {
        setIsCollapsed(false); // Auto-expand on desktop
      }
    };
    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`transition-all duration-400 ease-in-out flex-shrink-0
        ${isCollapsed ? 'w-13' : 'w-50'}`}
    >
      {/* Sidebar Menu */}
      <nav className="py-3 p-1 overflow-y-scroll scroll">
        <ul className="space-y-2 ">
            <li>
              <Link to='/'
                className={`flex items-center w-full p-3 transition cursor-pointer hover:translate-x-0.5 active:translate-x-1 rounded-l-lg
                  hover:bg-blue-300 text-gray-700
                  ${isCollapsed ? 'justify-center' : ''}`}
              >
                <IoHomeOutline size={20} />
                {!isCollapsed && (
                  <span className="ml-3">Home</span>
                )}
              </Link>
            </li>
            <li>
              <Link to='/movies'
                className={`flex items-center w-full p-3 transition cursor-pointer hover:translate-x-0.5 active:translate-x-1 rounded-l-lg
                  hover:bg-blue-300 text-gray-700
                  ${isCollapsed ? 'justify-center' : ''}`}
              >
                <BiMoviePlay size={20} />
                {!isCollapsed && (
                  <span className="ml-3">Movies</span>
                )}
              </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;