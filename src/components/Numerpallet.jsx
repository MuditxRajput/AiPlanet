import React from "react";
import ai from "../assets/ai.svg";
import challenge from "../assets/challenge.svg";
import people from "../assets/people.svg";

const Numerpallet = () => {
  return (
    <div className="bg-[#002A3B] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        <div className="flex justify-center items-center space-x-4">
          <div className="bg-white p-4 rounded-xl">
            <img src={ai} alt="ai_image" className="w-12" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold">100K+</h2>
            <p className="text-base text-gray-300">AI model submissions</p>
          </div>
        </div>

       
        <div className="flex justify-center items-center space-x-4">
          <div className="bg-white p-4 rounded-xl">
            <img src={people} alt="people_image" className="w-12" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold">50K+</h2>
            <p className="text-base text-gray-300">Data Scientists</p>
          </div>
        </div>

        
        <div className="flex justify-center items-center space-x-4">
          <div className="bg-white p-4 rounded-xl">
            <img src={challenge} alt="challenge_image" className="w-12" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold">100+</h2>
            <p className="text-base text-gray-300">AI Challenges hosted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numerpallet;
