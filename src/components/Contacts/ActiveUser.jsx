import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faDownload } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';

const ActiveUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [contacts, setContacts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({ id: '', name: '', email: '', phone: '' });

  useEffect(() => {
    axios.get(`${apiUrl}/signin`)
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [apiUrl]);

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/signin/${id}`)
      .then(() => {
        setContacts(contacts.filter(contact => contact.id !== id));
      })
      .catch(error => console.error("Error deleting data:", error));
  };

  const handleEdit = (id) => {
    const contactToEdit = contacts.find(contact => contact.id === id);
    setCurrentEdit(contactToEdit);
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
    setCurrentEdit({ id: '', name: '', email: '', phone: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdit({ ...currentEdit, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put(`${apiUrl}/signin/${currentEdit.id}`, currentEdit)
      .then(() => {
        setContacts(contacts.map(contact => (contact.id === currentEdit.id ? currentEdit : contact)));
        handleModalClose();
      })
      .catch(error => console.error("Error updating data:", error));
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(contacts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    XLSX.writeFile(workbook, "contacts.xlsx");
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{contact.id}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{contact.email}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button onClick={() => handleEdit(contact.id)} className="text-blue-500 hover:text-blue-700 mx-1">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => handleDelete(contact.id)} className="text-red-500 hover:text-red-700 mx-1">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  <button onClick={handleDownload} className="text-green-500 hover:text-green-700 mx-1">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalShow && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Contact</h5>
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
                    <label htmlFor="email" className="col-form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={currentEdit.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="col-form-label">Phone:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={currentEdit.phone}
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
}

export default ActiveUser;

