import React from 'react';

const CategoryPills = () => {
  const handleClick = () => {
    alert('Work in progress, get back in few days');
  };

  const categories = [
    'AI Assistant',
    'Action',
    'Adventure',
    'Age Play',
    'Anal',
    'Anime',
    'Anthro',
    'Bondage',
    'Cheating',
    'Chubby',
    'Comedy',
    'All tags',
  ];

  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={handleClick}
          className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            category === 'All tags'
              ? 'bg-orange-100 text-black hover:bg-orange-200'
              : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800 border border-zinc-700'
          }`}
        >
          {category}
          {category === 'All tags' && ' ∨'}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;