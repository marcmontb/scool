import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-blue-600">s</span>
              <span className="text-red-500">c</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-600">o</span>
              <span className="text-green-500">l</span>
            </Link>
          </div>

          <div className="flex items-center">
            <Link 
              to="/auth" 
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}