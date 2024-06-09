import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Company() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/adminform`)
      .then(response => {
        const companyData = response.data.filter(item => item.category === 'Company');
        setCompanies(companyData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [apiUrl]);

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/adminform/${id}`)
      .then(() => {
        setCompanies(companies.filter(company => company.id !== id));
      })
      .catch(error => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="flex flex-wrap">
      {companies.map(company => (
        <div key={company.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full" src={company.imageUrl} alt={`${company.name} image`} />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">{company.name}</h5>
            <p className="text-gray-700 text-base">
              {company.description}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="text-blue-500 hover:text-blue-700 mr-4"
                onClick={() => handleEdit(company.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(company.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Company;
