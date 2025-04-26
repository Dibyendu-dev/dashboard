import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            className="md:hidden p-2 rounded-md hover:bg-indigo-600"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold">School Management System</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-sm">Admin Dashboard</span>
          <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
            <span className="font-medium">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;