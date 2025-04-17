import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    );
};

export default ErrorPage;