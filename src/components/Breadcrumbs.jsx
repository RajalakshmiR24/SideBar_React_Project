import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profile from '../assets/profile.jpg'

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(null);

  // Toggle dropdown visibility
  const toggleDropdown = (icon) => {
    setShowDropdown(showDropdown === icon ? null : icon);
  };

  // Handle click events for message, notification, and profile
  const handleClick = (icon) => {
    if (showDropdown === icon) {
      setShowDropdown(null);
    } else {
      setShowDropdown(icon);
    }
  };

  return (
    <nav className="bg-gray-200 p-3 rounded-md w-full flex justify-between items-center">
      <ol className="list-reset flex text-gray-800">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={to} className="px-2">
              <span>{value}</span>
            </li>
          ) : (
            <li key={to} className="px-2">
              <Link to={to} className="text-blue-600 hover:underline">
                {value}
              </Link>
            </li>
          );
        })}
      </ol>
      
      {/* Dropdown section */}
      <div className="flex items-center">
        {/* Message Icon */}
        <div className="relative mx-2" onClick={() => handleClick('message')}>
          <span className="material-icons cursor-pointer">Message</span>
          {showDropdown === 'message' && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-md">
              <ul className="py-2">
                <li className="px-4 py-2">Message 1</li>
                <li className="px-4 py-2">Message 2</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Notification Icon */}
        <div className="relative mx-2" onClick={() => handleClick('notification')}>
          <span className="material-icons cursor-pointer">Notifications</span>
          {showDropdown === 'notification' && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-md">
              <ul className="py-2">
                <li className="px-4 py-2">Notification 1</li>
                <li className="px-4 py-2">Notification 2</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Profile Picture */}
        <div className="relative mx-2" onClick={() => handleClick('profile')}>
        <img src={profile} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" />
        {showDropdown === 'profile' && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-md">
        <ul className="py-2">
        <li className="px-4 py-2">Edit Profile</li>
        <li className="px-4 py-2">Favorite</li>
        <li className="px-4 py-2">Settings</li>
        <li className="px-4 py-2">Logout</li>
        </ul>
        </div>
        )}
        </div>
        </div>
        </nav>
        );
        };
        
        export default Breadcrumbs;
