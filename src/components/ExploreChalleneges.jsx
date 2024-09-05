import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initialHackathons } from '../utils/initialHackathons';
import SearchBox from './SearchBox';

const ExploreChallenges = () => {
  const [challenges, setChallenges] = useState(initialHackathons);

  const handleSearch = (searchTerm) => {
    const filtered = initialHackathons.filter((val) =>
      val.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setChallenges(filtered);
  };

  const handleFilter = (filters) => {
    const filteredByStatus = initialHackathons.filter((val) =>
      filters.status.includes(val.status)
    );
    const filtered = filteredByStatus.filter((val) =>
      filters.level.includes(val.difficulty)
    );
    setChallenges(filtered);
  };

  // Countdown Timer Logic

  return (
    <div className="bg-[#0A2540] text-white p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 flex justify-center items-center">Explore Challenges</h1>
      <div className='flex justify-center items-center'>

      <SearchBox onSearch={handleSearch} onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {challenges.map((challenge) => (
          <Link
            to={`/hackathon/${challenge.id}`}
            key={challenge.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={challenge.img}
              alt={challenge.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 bg-gray-100 text-center">
           
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-md mb-4  ${
                  challenge.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-600' : challenge.status==='Past' ? 'bg-red-500' : 'bg-green-500'
                }`}
              >
                {challenge.status}
              </span>

             
              <h2 className="text-xl text-center font-semibold mb-4 text-gray-900">{challenge.name}</h2>

             
              {challenge.status === 'Upcoming' || challenge.status === 'Active' ? (
                <div className="text-center mb-4">
                  <p className="text-gray-700 text-sm mb-2">
                    {challenge.status === 'Upcoming' ? 'Starts in' : 'Ends in'}
                  </p>
                  <div className="flex justify-center space-x-2 text-lg font-bold text-gray-900">
                    {challenge.time}
                  </div>
                </div>
              ) : (
                <div className=' text-center'>
                        <p className="text-gray-700 text-sm mb-2">
                   Ended on 
                  </p>
                  <p className='text-black'>{challenge.date}</p>
                </div>
                
              )}

              {/* Participate Button */}
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full mt-4 flex items-center justify-center">
                
                Participate Now
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreChallenges;
