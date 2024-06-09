/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Tutorials = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/adminform`)
      .then(response => {
        const tutorialsData = response.data.filter(item => item.category === 'Tutorials');
        setTutorials(tutorialsData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/adminform/${id}`)
      .then(() => {
        setTutorials(tutorials.filter(article => article.id !== id));
      })
      .catch(error => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="flex flex-wrap">
      {tutorials.map(tutorial => (
        <div key={tutorial.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full" src={tutorial.imageUrl} alt={`${tutorial.name} image`} />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">{tutorial.name}</h5>
            <p className="text-gray-700 text-base">
              {tutorial.description}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="text-blue-500 hover:text-blue-700 mr-4"
                onClick={() => handleEdit(tutorial.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(tutorial.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tutorials;