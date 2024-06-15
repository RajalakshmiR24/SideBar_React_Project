import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Breadcrumbs from '../Breadcrumbs'; // Import Breadcrumbs component

const apiUrl = process.env.REACT_APP_API_URL;

function EditProfile() {
  const [profile, setProfile] = useState({
    image: null,
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: ''
  });

  // Add a state to store the profile image
  const [profileImage, setProfileImage] = useState(null);

  const [profiles, setProfiles] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await axios.get(`${apiUrl}/profile`);
      setProfiles(response.data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Update profile image state
      setProfile({
        ...profile,
        image: URL.createObjectURL(e.target.files[0])
      });
      // Update profileImage state
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentEdit) {
        await axios.put(`${apiUrl}/profile/${currentEdit.id}`, profile);
        setProfiles(profiles.map(p => (p.id === currentEdit.id ? profile : p)));
      } else {
        const response = await axios.post(`${apiUrl}/profile`, profile);
        setProfiles([...profiles, response.data]);
      }
      setProfile({
        image: null,
        name: '',
        email: '',
        phone: '',
        address: '',
        pincode: ''
      });
      setCurrentEdit(null);
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  const handleEdit = (profile) => {
    setProfile(profile);
    setCurrentEdit(profile);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/profile/${id}`);
      setProfiles(profiles.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <div>
      {/* Pass profileImage state as a prop to Breadcrumbs component */}
      <Breadcrumbs profileImage={profileImage} />

      <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mb-4">
              <div className="w-24 h-24 mb-4">
                {profile.image ? (
                  <img src={profile.image} alt="Profile" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Upload</span>
                  </div>
                )}
              </div>
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="imageUpload" />
              <label htmlFor="imageUpload" className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md">
                Upload Image
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={profile.pincode}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
              {currentEdit ? 'Update' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="text-xl font-bold mb-4">Profiles</h3>
          <ul>
            {profiles.map(p => (
              <li key={p.id} className="mb-4 p-4 border border-gray-300 rounded-md">
                {p.image && <img src={p.image} alt={p.name} className="w-16 h-16 rounded-full object-cover mb-2" />}
                <p><strong>Name:</strong> {p.name}</p>
                <p><strong>Email:</strong> {p.email}</p>
                <p><strong>Phone:</strong> {p.phone}</p>
                <p><strong>Address:</strong> {p.address}</p>
                <p><strong>Pincode:</strong> {p.pincode}</p>
                <button
                  onClick={() => handleEdit(p)}
                  className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
