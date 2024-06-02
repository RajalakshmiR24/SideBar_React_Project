import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaBook, FaInfoCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';

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
    <nav className='bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <h1 className='text-white text-3xl font-bold'>REWARD SHARE.</h1>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navItems.map((item, index) => (
                item.submenu ? (
                  <div key={item.id} className='relative'>
                    <button
                      onClick={() => handleDropdown(index)}
                      className='flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    >
                      {item.icon} <span className='ml-1'>{item.text}</span>
                    </button>
                    {dropdownIndex === index && (
                      <div className='absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                        <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                          {item.submenu.map(subItem => (
                            <Link
                              key={subItem.id}
                              to={subItem.path}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    key={item.id}
                    className='flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    {item.icon} <span className='ml-1'>{item.text}</span>
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={handleNav}
              className='text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none'
            >
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navItems.map((item, index) => (
              item.submenu ? (
                <div key={item.id}>
                  <button
                    onClick={() => handleDropdown(index)}
                    className='flex items-center text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                  >
                    {item.icon} <span className='ml-1'>{item.text}</span>
                  </button>
                  {dropdownIndex === index && (
                    <div className='pl-4'>
                      {item.submenu.map(subItem => (
                        <Link
                          key={subItem.id}
                          to={subItem.path}
                          className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
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
                  className='flex items-center text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  {item.icon} <span className='ml-1'>{item.text}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
