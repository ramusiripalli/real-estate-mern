import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState ({});
  const handleChange= (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(formData);
  return (
<div className="min-h-screen p-5 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
<div className="bg-white p-10 rounded-lg shadow-lg shadow-black max-w-md w-full m-2">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
    Create Your Account
  </h2>
  
  <form onSubmit={handleSubmit}>
    <div className="mb-6">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">User Name</label>
      <input  onChange={handleChange}
        type="text"
        id="username"
        placeholder="Enter your user name"
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
      <input onChange={handleChange}
        type="email"
        id="email"
        placeholder="Enter your email"
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input onChange={handleChange}
        type="password"
        id="password"
        placeholder="Enter your password"
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
      <input onChange={handleChange}
        type="password"
        id="confirm-password"
        placeholder="Confirm your password"
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition ease-in-out duration-300"
      >
        Sign Up
      </button>
    </div>
  </form>

  <p className="mt-6 text-sm text-center text-gray-600 ">
   <p>Already have an account?{' '}</p> 
    <Link to={'/sign-in'} ><span className="text-indigo-500 font-medium hover:text-indigo-700 pl-3 text-xl">  Sign in</span></Link>
  </p>
</div>
</div>
  )
}
