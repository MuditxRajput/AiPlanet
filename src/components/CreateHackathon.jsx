import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateHackathon = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        image: '',
        difficulty: 'Easy',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('New Hackathon Data:', formData);
        
        navigate('/hackathons'); 
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">Add New Hackathon</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-600" htmlFor="name">Challenge Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                   
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-600" htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-600" htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-600" htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                            required
                        />
                    </div>

                  
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-600" htmlFor="image">Image</label>
                        <input type="file" name="image" id="image"  value={formData.image}  onChange={handleChange}
                            className="mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        
                    </div>

                   
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-600" htmlFor="difficulty">Level Type</label>
                        <select
                            id="difficulty"
                            name="difficulty"
                            value={formData.difficulty}
                            onChange={handleChange}
                            className="mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    {/* Save Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white py-3 px-8 rounded-md shadow-md hover:bg-indigo-700 transition"
                        >
                            Save Hackathon
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateHackathon;
