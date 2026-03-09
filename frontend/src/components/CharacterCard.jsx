import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

const CharacterCard = ({ character }) => {
  const handleClick = () => {
    alert('Work in progress, get back in few days');
  };

  return (
    <div
      onClick={handleClick}
      className="bg-zinc-900 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-600 transition-all transform hover:scale-105 duration-200"
    >
      {/* Character Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Character Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg mb-1">{character.name}</h3>
          <p className="text-orange-400 text-sm mb-2">{character.username}</p>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{character.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {character.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{character.messages}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>{character.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;