import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/Hero.svg';
const Hero = () => {
  const navigate = useNavigate();
  return (
    

    <div className='flex flex-col md:flex-row items-center bg-[#003145] px-8 py-16'>
      <div className='flex-1 text-white  ml-20'>
        <h1 className='text-5xl font-bold mb-4'>
          Accelerate Innovation <br /> with Global AI Challenges
        </h1>
        <p className='text-lg mb-6'>
          AI Challenges at DPhi simulate real-world problems. It is a<br></br> great place to put your AI/Data Science skills to test on <br></br> diverse datasets allowing you to foster learning through<br></br> competitions.
        </p>
        <button onClick={()=>navigate('/create')} className='bg-white text-[#0a3c47] px-6 py-3 rounded-md text-lg font-semibold'>
          Create Challenge
        </button>
      </div>

      <div className='flex-1 mt-8 md:mt-0  flex ml-32 '>
        <img src={heroImage} alt='hero_image' className='' />
      </div>
    </div>
  );
};

export default Hero;
