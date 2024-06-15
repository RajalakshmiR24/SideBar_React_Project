// SignUp.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AuthForm from './AuthForm';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const phoneRegex = /^(\+91[\\-\s]?)?[0]?(91)?(\(\+91\))?[7896]\d{9}$/;

const initialData = {
  name: '',
  email: '',
  password: '',
  phone: ''
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!passwordRegex.test(formData.password)) {
      validationErrors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character';
    }
    if (!phoneRegex.test(formData.phone)) {
      validationErrors.phone = 'Invalid phone number';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .post(`${apiUrl}/newuser`, formData)
        .then((res) => {
          console.log("Response:", res);
          setFormData(initialData);
          navigate('/success');
        })
        .catch((err) => console.error("Error submitting form:", err));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <AuthForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSignUp={true}
        />
        <div className="text-center">
          <p>Already have an account? <Link to="/" className="text-blue-600 hover:underline">Sign In</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
