import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import difficult from '../assets/diff.svg';
import { initialHackathons } from '../utils/initialHackathons';
const HackathonDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const hackathon = initialHackathons.find((h) => h.id === parseInt(id));
  
  if (!hackathon) {
    return <div className="text-center text-white">Hackathon not found</div>;
  }
 
  return (
    <>
    
    <div className="bg-[#003145] text-white  p-8">
     
        <div className="flex items-center justify-between mb-4">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-md">
            Starts on {hackathon.date}
          </div>
          <img src={difficult} alt="Difficulty" className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-bold mb-4">{hackathon.name}</h1>
        <p className="text-lg mb-6">{hackathon.description}</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white text-black px-4 py-2 rounded-md flex items-center">
            <img src={difficult} alt="Difficulty" className="w-5 h-5 mr-2" />
            <p className="font-semibold">Difficulty: {hackathon.difficulty}</p>
          </div>
          <div className="bg-green-500 text-white px-4 py-2 rounded-md">
            Status: {hackathon.status}
          </div>
        </div>
     
    </div>
     <div className='w-full shadow-md shadow-black h-12 flex items-center justify-between '>
     <p className='px-10 text-xl'>Overview</p>
     <div className='flex justify-between  gap-5 mr-10'>
        <button  onClick={()=>navigate(`/edit/${id}`)} className='bg-green-600 px-4 text-white font-semibold py-1  rounded-md'>Edit</button>
        <button  className='border-2 border-red-500 text0-red-500  font-semibold px-2 py-1  rounded-md'>Delete</button>
     </div>
   </div>
   <div className='p-5'>
    <p className='text-lg'> {hackathon.overview}   </p>
   </div>
   </>
  );
};

export default HackathonDetail;
