import { ChevronDown, Filter, Search } from 'lucide-react';
import React, { useState } from 'react';

const SearchBox = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: [],
    level: []
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value];
      
      const newFilters = { ...prevFilters, [category]: updatedCategory };
      onFilter(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="w-[700px]   space-y-4">
      <div className="flex space-x-4">
        <div className="relative flex-grow ">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full py-2 px-4 pl-10  text-white bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <button
          onClick={toggleFilter}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Filter size={20} />
          <span>Filter</span>
          <ChevronDown size={20} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      {isFilterOpen && (
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white font-semibold mb-2">Status</h3>
          <div className="space-y-2">
            {['All', 'Active', 'Upcoming', 'Past'].map(status => (
              <label key={status} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.status.includes(status)}
                  onChange={() => handleFilterChange('status', status)}
                  className="form-checkbox text-blue-500"
                />
                <span className="text-white">{status}</span>
              </label>
            ))}
          </div>
          
          <h3 className="text-white font-semibold mt-4 mb-2">Level</h3>
          <div className="space-y-2">
            {['Easy', 'Medium', 'Hard'].map(level => (
              <label key={level} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.level.includes(level)}
                  onChange={() => handleFilterChange('level', level)}
                  className="form-checkbox text-blue-500"
                />
                <span className="text-white">{level}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;