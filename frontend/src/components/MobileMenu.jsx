import React, { useState } from 'react';
import { Menu, X, Home, MessageCircle, Heart, Bot, Store, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    alert('Work in progress, get back in few days');
  };

  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: MessageCircle, label: 'Recent Chats', active: false },
    { icon: Heart, label: 'Favorites', active: false },
    { icon: Bot, label: 'My Chatbots', active: false },
    { icon: Store, label: 'Store', active: false },
    { icon: Calendar, label: 'Daily Task', active: false },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-5 left-4 z-50 p-2 bg-zinc-900 rounded-lg text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`lg:hidden fixed left-0 top-0 h-full w-64 bg-black border-r border-zinc-800 flex flex-col p-4 z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="mb-6 mt-12 cursor-pointer" onClick={handleClick}>
          <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
        </div>

        {/* Create Button */}
        <Button
          onClick={handleClick}
          className="w-full mb-6 bg-transparent border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl py-6 text-base font-medium"
        >
          + Create
        </Button>

        {/* Menu Items */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  handleClick();
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                  item.active
                    ? 'bg-orange-900/30 text-orange-500'
                    : 'text-gray-400 hover:text-orange-500 hover:bg-orange-900/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
