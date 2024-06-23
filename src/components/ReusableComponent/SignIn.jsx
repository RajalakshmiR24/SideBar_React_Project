import React from 'react';
import { useForm } from './hooks/useForm';
import { validateSignIn } from './utils/validation';
import { AuthForm } from './AuthForm';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const initialData = { email: '', password: '' };
  const { formData, errors, handleChange, handleSubmit } = useForm(initialData, validateSignIn);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const onSubmit = (formData) => {
    axios.post(`${apiUrl}/signin`, formData)
      .then((res) => {
        console.log("Response:", res);
        navigate('/success');
      })
      .catch((err) => console.error("Error submitting form:", err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <AuthForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={(e) => handleSubmit(e, onSubmit)}
          isSignUp={false}
        />
        <div className="text-center">
          <p>Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
