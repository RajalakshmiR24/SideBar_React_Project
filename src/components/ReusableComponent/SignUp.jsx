import React from 'react';
import { useForm } from './hooks/useForm';
import { validateSignUp } from './utils/validation';
import { AuthForm } from './AuthForm';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const initialData = { name: '', email: '', password: '', phone: '' };
  const { formData, errors, handleChange, handleSubmit } = useForm(initialData, validateSignUp);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const onSubmit = (formData) => {
    axios.post(`${apiUrl}/newuser`, formData)
      .then((res) => {
        console.log("Response:", res);
        navigate('/success');
      })
      .catch((err) => console.error("Error submitting form:", err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <AuthForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={(e) => handleSubmit(e, onSubmit)}
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
