import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const OutletComponent = () => {
  return (
    <div className="flex flex-col flex-grow bg-gray-100 p-4">
      <Breadcrumbs />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default OutletComponent;
