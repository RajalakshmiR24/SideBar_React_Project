import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminForm() {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const categories = [
    'Company',
    'Articles',
    'Tutorials',
    'About'
  ];

  const initialData = {
    name: '',
    description: '',
    category: '',
    imageUrl: ''
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${apiUrl}/adminform`, formData)
      .then((res) => {
        console.log("Response:", res);
        setFormData(initialData);
        navigate('/success');
      })
      .catch((err) => console.error("Error submitting form:", err));

    console.log("Data:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category:</label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />

          
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default AdminForm;