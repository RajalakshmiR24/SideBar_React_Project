/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Articles = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/adminform`)
      .then(response => {
        const articleData = response.data.filter(item => item.category === 'Articles');
        setArticles(articleData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/adminform/${id}`)
      .then(() => {
        setArticles(articles.filter(article => article.id !== id));
      })
      .catch(error => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="flex flex-wrap">
      {articles.map(article => (
        <div key={article.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full" src={article.imageUrl} alt={`${article.name} image`} />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">{article.name}</h5>
            <p className="text-gray-700 text-base">
              {article.description}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="text-blue-500 hover:text-blue-700 mr-4"
                onClick={() => handleEdit(article.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(article.id)}
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

export default Articles;
