import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaBook, FaInfoCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/home', icon: <FaHome size={24} /> },
    { id: 2, text: 'Company', path: '/company', icon: <FaBuilding size={24} /> },
    { id: 3, text: 'Resources', path: '/resources', icon: <FaBook size={24} />, submenu: [
      { id: 6, text: 'Articles', path: '/resources/articles' },
      { id: 7, text: 'Tutorials', path: '/resources/tutorials' },
      { id: 8, text: 'Case Studies', path: '/resources/case-studies' },
    ]},
    { id: 4, text: 'About', path: '/about', icon: <FaInfoCircle size={24} /> },
    { id: 5, text: 'Contact', path: '/contact', icon: <FaPhone size={24} />, submenu: [
      { id: 9, text: 'Contact1', path: '/contacts/contact1/Ramya' },
      { id: 10, text: 'Contact2', path: '/contacts/contact2/Lakshmi' },
    ]},
    { id: 11, text: 'Login', path: '/', icon: <FaSignInAlt size={24} /> },
  ];

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:flex flex-col w-full md:w-64 ">
        <h1 className="text-white text-2xl md:text-4xl font-bold p-4 hidden md:block">REWARD SHARE</h1>

        {navItems.map((item, index) => (
          item.submenu ? (
            <div key={item.id} className="relative">
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
              key={item.id}
              className="flex items-center text-gray-300 hover:text-white w-full px-3 py-2 rounded-md text-lg font-medium"
            >
              {item.icon} <span className="ml-2">{item.text}</span>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default Navbar;
