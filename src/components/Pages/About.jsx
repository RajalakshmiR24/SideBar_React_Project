/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';

const About = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [about, setAbout] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/adminform`)
      .then(response => {
        const aboutData = response.data.filter(item => item.category === 'About');
        setAbout(aboutData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/adminform/${id}`)
      .then(() => {
        setAbout(IoArrowBackOutline.filter(about => about.id !== id));
      })
      .catch(error => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="flex flex-wrap">
      {about.map(about => (
        <div key={about.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full" src={about.imageUrl} alt={`${about.name} image`} />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">{about.name}</h5>
            <p className="text-gray-700 text-base">
              {about.description}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="text-blue-500 hover:text-blue-700 mr-4"
                onClick={() => handleEdit(about.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(about.id)}
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

export default About;
