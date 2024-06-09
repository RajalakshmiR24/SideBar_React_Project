/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [about, setAbout] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({ id: '', name: '', description: '', imageUrl: '' });

  useEffect(() => {
    axios.get(`${apiUrl}/adminform`)
      .then(response => {
        const aboutData = response.data.filter(item => item.category === 'About');
        setAbout(aboutData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [apiUrl]);

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/adminform/${id}`)
      .then(() => {
        setAbout(about.filter(item => item.id !== id));
      })
      .catch(error => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    const itemToEdit = about.find(item => item.id === id);
    setCurrentEdit(itemToEdit);
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
    setCurrentEdit({ id: '', name: '', description: '', imageUrl: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdit({ ...currentEdit, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put(`${apiUrl}/adminform/${currentEdit.id}`, currentEdit)
      .then(() => {
        setAbout(about.map(item => (item.id === currentEdit.id ? currentEdit : item)));
        handleModalClose();
      })
      .catch(error => console.error("Error updating data:", error));
  };

  return (
    <div className="flex flex-wrap">
      {about.map(item => (
        <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full h-64 object-cover" src={item.imageUrl} alt={`${item.name} image`} />
          <div className="px-6 py-4">
            <h5 className="font-bold text-xl mb-2">{item.name}</h5>
            <p className="text-gray-700 text-base">
              {item.description}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="text-blue-500 hover:text-blue-700 mr-4"
                onClick={() => handleEdit(item.id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}

      {modalShow && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Item</h5>
                <button type="button" className="close" onClick={handleModalClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="col-form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={currentEdit.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description" className="col-form-label">Description:</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={currentEdit.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageUrl" className="col-form-label">Image URL:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="imageUrl"
                      name="imageUrl"
                      value={currentEdit.imageUrl}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
