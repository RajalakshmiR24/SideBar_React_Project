import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Articles from './Resources/Articles';
import About from './Pages/About';

const OutletComponent = () => {
  const location = useLocation();

  // Determine the category from the route path
  const getCategory = (path) => {
    if (path.includes('/resources/articles')) {
      return 'Articles';
    } else if (path.includes('/about')) {
      return 'About';
    }
    // Add more conditions for other categories if needed
    return null;
  };

  // Render component based on the category
  const renderComponent = (category) => {
    switch (category) {
      case 'Articles':
        return <Articles />;
      case 'About':
        return <About />;
      // Add cases for other categories if needed
      default:
        return null;
    }
  };

  const category = getCategory(location.pathname);

  return (
    <div className="flex flex-col flex-grow bg-gray-100 p-4">
      <Breadcrumbs />
      <div className="mt-4">
        {/* Render the appropriate component based on the category */}
        {renderComponent(category)}
        {/* Render the child route components */}
        <Outlet />
      </div>
    </div>
  );
};

export default OutletComponent;
