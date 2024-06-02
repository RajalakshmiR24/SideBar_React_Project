import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/home" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
