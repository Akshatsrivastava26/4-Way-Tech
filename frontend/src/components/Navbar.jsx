import React from 'react';
import { Search, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const handleClick = () => {
    alert('Work in progress, get back in few days');
  };

  return (
    <div className="fixed top-0 left-0 lg:left-48 right-0 h-20 bg-black border-b border-zinc-800 flex items-center justify-between px-4 lg:px-6 z-40">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl ml-12 lg:ml-0">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Dive into endless fantasies - start searching!"
            onClick={handleClick}
            className="w-full bg-zinc-900 text-gray-400 rounded-full py-4 pl-12 lg:pl-20 pr-6 text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-orange-600 cursor-pointer"
            readOnly
          />
        </div>
      </div>

      {/* Sign In Button */}
      <Button
        onClick={handleClick}
        className="ml-2 lg:ml-6 bg-orange-600 hover:bg-orange-700 text-white px-4 lg:px-8 py-4 lg:py-6 rounded-xl text-sm lg:text-base font-medium"
      >
        Sign In
      </Button>
    </div>
  );
};

export default Navbar;