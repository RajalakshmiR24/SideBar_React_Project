import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faDownload } from '@fortawesome/free-solid-svg-icons';

const contacts = [
    { id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
];

function ContactTable() {
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
                                Name
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Phone
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
                                    <p className="text-gray-900 whitespace-no-wrap">{contact.name}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{contact.email}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{contact.phone}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button className="text-blue-500 hover:text-blue-700 mx-1">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700 mx-1">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                    <button className="text-green-500 hover:text-green-700 mx-1">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactTable;
