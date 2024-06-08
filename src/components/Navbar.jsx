import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaBook, FaInfoCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setDropdownIndex(null);
  };

  const handleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/home', icon: <FaHome size={24} /> },
    { id: 2, text: 'Company', path: '/company', icon: <FaBuilding size={24} /> },
    { id: 3, text: 'Resources', path: '/resources', icon: <FaBook size={24} />, submenu: [
      { id: 4, text: 'Articles', path: '/resources/articles' },
      { id: 5, text: 'Tutorials', path: '/resources/tutorials' },
    ]},
    { id: 6, text: 'About', path: '/about', icon: <FaInfoCircle size={24} /> },
    { id: 7, text: 'Contact', path: '/contact', icon: <FaPhone size={24} />, submenu: [
      { id: 8, text: 'ContactTable', path: '/contact/contacttable' },

    ]},
    { id: 9, text: 'Login', path: '/', icon: <FaSignInAlt size={24} /> },
    { id: 10, text: 'Admin', path: '/adminform', icon: <FaInfoCircle size={24} /> },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:flex flex-col w-full md:w-64">
        {isSmallScreen ? (
          <div className="md:hidden flex justify-end p-4">
            <button onClick={handleToggle} className="text-white">
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        ) : (
          <div className="hidden md:flex justify-end p-4">
            <button onClick={handleToggle} className="text-white">
              {isOpen ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
            </button>
          </div>
        )}
        <h1 className="text-white text-2xl md:text-4xl font-bold p-4 hidden md:block">REWARD SHARE</h1>
        <div className={`md:flex flex-col w-full ${isOpen || !isSmallScreen ? '' : 'hidden'}`}>
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {item.submenu ? (
                <div className="relative">
                  <button
                    onClick={() => handleDropdown(index)}
                    className="flex items-center text-gray-300 hover:text-white w-full px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {item.icon} <span className="ml-2">{item.text}</span>
                  </button>
                  {dropdownIndex === index && (
                    <div className="ml-8">
                      {item.submenu.map(subItem => (
                        <Link
                          key={subItem.id}
                          to={subItem.path}
                          className="block px-3 py-2 text-lg text-gray-300 hover:bg-gray-700 rounded-md"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center text-gray-300 hover:text-white w-full px-3 py-2 rounded-md text-lg font-medium"
                >
                  {item.icon} <span className="ml-2">{item.text}</span>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
