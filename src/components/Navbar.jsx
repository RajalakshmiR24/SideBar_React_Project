import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaBook, FaInfoCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';
import OutletComponent from './OutletComponent'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/home', icon: <FaHome /> },
    { id: 2, text: 'Company', path: '/company', icon: <FaBuilding /> },
    { id: 3, text: 'Resources', path: '/resources', icon: <FaBook />, submenu: [
      { id: 6, text: 'Articles', path: '/resources/articles' },
      { id: 7, text: 'Tutorials', path: '/resources/tutorials' },
      { id: 8, text: 'Case Studies', path: '/resources/case-studies' },
    ]},
    { id: 4, text: 'About', path: '/about', icon: <FaInfoCircle /> },
    { id: 5, text: 'Contact', path: '/contact', icon: <FaPhone />, submenu: [
      { id: 9, text: 'Contact1', path: '/contacts/contact1/1/Ramya' },
      { id: 10, text: 'Contact2', path: '/contacts/contact2/2/Lakshmi' },
    ]},
    { id: 11, text: 'Login', path: '/', icon: <FaSignInAlt /> },
  ];

  return (
    <div className='flex h-screen bg-gray-900'>
      <div className={`fixed md:static inset-y-0 left-0 flex flex-col w-64 bg-gray-800 transition-transform duration-200 ease-in-out transform ${nav ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className='flex items-center justify-between h-16 px-4 bg-gray-900'>
          <h1 className='text-white text-2xl font-bold'>REWARD SHARE.</h1>
          <div className='md:hidden'>
            <button
              onClick={handleNav}
              className='text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none'
            >
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </button>
          </div>
        </div>
        <div className='flex flex-col flex-grow px-4 py-4 overflow-y-auto'>
          {navItems.map((item, index) => (
            item.submenu ? (
              <div key={item.id} className='relative'>
                <button
                  onClick={() => handleDropdown(index)}
                  className='flex items-center text-gray-300 hover:text-white w-full px-3 py-2 rounded-md text-sm font-medium'
                >
                  {item.icon} <span className='ml-1'>{item.text}</span>
                </button>
                {dropdownIndex === index && (
                  <div className='mt-2 ml-6'>
                    {item.submenu.map(subItem => (
                      <Link
                        key={subItem.id}
                        to={subItem.path}
                        className='block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md'
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
                className='flex items-center text-gray-300 hover:text-white w-full px-3 py-2 rounded-md text-sm font-medium'
              >
                {item.icon} <span className='ml-1'>{item.text}</span>
              </Link>
            )
          ))}
        </div>
      </div>
      <OutletComponent />
    </div>
  );
};

export default Navbar;
