import React from 'react';
import { Flame } from 'lucide-react';

const FilterTabs = () => {
  const handleClick = () => {
    alert('Work in progress, get back in few days');
  };

  const tabs = [
    { label: 'All', active: true },
    { label: 'Following', active: false },
    { label: 'New', active: false },
    { label: 'Popular', active: false },
    { label: 'Premium', icon: Flame, active: false },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full lg:w-auto">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <button
              key={index}
              onClick={handleClick}
              className={`px-4 lg:px-6 py-2.5 rounded-full text-sm lg:text-base font-medium whitespace-nowrap transition-colors ${
                tab.active
                  ? 'text-orange-500 bg-transparent'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <span className="flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                {tab.label}
                {tab.label === 'Premium' && (
                  <span className="w-6 h-6 bg-white rounded-full"></span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* NSFW Toggle */}
      <div className="flex items-center gap-3">
        <span className="text-white font-medium text-sm">NSFW</span>
        <button
          onClick={handleClick}
          className="w-12 h-7 bg-white rounded-full relative transition-colors"
        >
          <div className="absolute right-1 top-1 w-5 h-5 bg-gray-800 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default FilterTabs;