import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    navigate('/dashboard'); // Navigate to the dashboard
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form  onSubmit={handleSignIn} className="space-y-4">
          <Input id="email" type="email" label="Email" placeholder="Enter your email" />
          <Input id="password" type="password" label="Password" placeholder="Enter your password" />
          <Button type="submit">Sign In</Button>
        </form>
        <p className="mt-4 text-xs text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/D" className="font-medium text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
