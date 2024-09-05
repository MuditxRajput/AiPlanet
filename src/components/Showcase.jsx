import React from 'react';
import calender from '../assets/IdentificationCard.svg';
import Robot from '../assets/Robot.svg';
import skill from '../assets/skills.svg';
import people from '../assets/Vector.svg';

const Showcase = () => {
  const data = [
    {
      name: 'Prove your skills',
      desc: 'Gain substantial experience by solving real-world problems and competing against others to come up with innovative solutions.',
      img: skill,
    },
    {
      name: 'Learn from community',
      desc: 'One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.',
      img: people,
    },
    {
      name: 'Challenge yourself',
      desc: 'There is nothing to lose by participating in a challenge. You can fail safely, learn from the entire experience, and bounce back stronger.',
      img: Robot,
    },
    {
      name: 'Earn recognition',
      desc: 'You will stand out from the crowd if you perform well in an AI challenge, helping you shine in the community and earn rewards.',
      img: calender,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 bg-[#f9f9f9]">

      <div className="text-center mb-16">
        <h3 className="font-bold text-4xl mb-4">
          Why Participate in <span className="text-green-600">AI Challenges?</span>
        </h3>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl w-full">
        {data.map((val, index) => (
          <div
            key={index}
            className="flex flex-col  bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
          
            <img src={val.img} alt={val.name} className="w-12 h-12 mb-4" />

         
            <h4 className="text-2xl font-semibold mb-2 text-gray-800">{val.name}</h4>

            
            <p className="text-gray-500 ">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
