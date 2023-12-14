import React, { useState } from 'react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';

const Header = ({ onRegionChange }) => {
  const [burger, setBurger] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('All'); 

  const handleBurger = () => {
    setBurger(!burger);
  };

  const navLinks = [
    {
      id: 1,
      name: 'All',
      link: '/home',
    },
    {
      id: 2,
      name: 'Asia',
      link: '/asia',
    },
    {
      id: 3,
      name: 'Europe',
      link: '/europe',
    },
  ];

  const handleRegionChange = (region) => {
    onRegionChange(region);
    setSelectedRegion(region);
    setBurger(false);
  };

  return (
    <header className="min-h-[10px] z-50 bg-[#FFFFFF] sticky top-0 py-2 lg:py-4">
      <div className="container mx-auto px-4 lg:px-8"> 
        <div className="flex items-center justify-between">
          <div className="pl-2 lg:pl-4">
            <h1 className="text-2xl font-bold text-slate-500">Countries</h1>
          </div>
          <div className="lg:hidden">
            {burger ? (
              <XIcon onClick={handleBurger} className="h-10 text-gray-800 cursor-pointer" />
            ) : (
              <MenuAlt1Icon onClick={handleBurger} className="h-10 cursor-pointer" />
            )}
          </div>
          <div className="hidden lg:inline-flex flex-1 justify-end">
            <div className="flex items-center space-x-4 lg:space-x-6 lg:pr-4">
              {navLinks.map((data) => (
                <button
                  key={data.id}
                  onClick={() => handleRegionChange(data.name)}
                  className={`text-xl font-bold text-slate-500 cursor-pointer ${
                    selectedRegion === data.name ? 'border-b-2 border-black' : ''
                  }`}
                >
                  {data.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${burger ? 'block' : 'hidden'} bg-[#FFFF] py-4 px-4`}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((data) => (
            <button
              key={data.id}
              onClick={() => handleRegionChange(data.name)}
              className={`text-xl font-bold text-slate-500 cursor-pointer ${
                selectedRegion === data.name ? 'border-b-2 border-black' : ''
              }`}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;