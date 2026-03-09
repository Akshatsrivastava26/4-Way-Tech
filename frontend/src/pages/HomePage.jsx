import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import CategoryPills from '../components/CategoryPills';
import FilterTabs from '../components/FilterTabs';
import CharacterGrid from '../components/CharacterGrid';
import { mockCharacters } from '../data/mockData';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar - Desktop */}
      <Sidebar />
      
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Main Content */}
      <div className="lg:ml-48">
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <div className="pt-20 px-4 lg:px-6 pb-8">
          {/* Category Pills */}
          <div className="mt-6 mb-6">
            <CategoryPills />
          </div>

          {/* Filter Tabs */}
          <FilterTabs />

          {/* Character Grid */}
          <CharacterGrid characters={mockCharacters} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;