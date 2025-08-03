import React, { useRef } from 'react';
import api from '../Api/Api';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
      const navigate = useNavigate(null);

  

  const submit = async (e) => {
    e.preventDefault(); // prevent page refresh

    const payload = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    try {
      const response = await api.post('/auth/signin', payload);
      console.log('Login successful:', response.data);


      const newToken = response.data.jwt; 
      
      if (newToken) {
        localStorage.setItem('jwtToken', newToken);
        console.log("New JWT token saved to localStorage.");
      } else {
        console.warn("Login successful, but no token received from backend.");
      }
      
       navigate('/upload');

    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] px-4">
      <div className="w-full max-w-md bg-[#2C2C2E] rounded-2xl p-8 shadow-lg shadow-[#1E1F2F]">
        <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-6">Welcome Back</h2>

        <form className="space-y-5" onSubmit={submit}>
          <div>
            <label htmlFor="email" className="block text-[#F4F4F4] mb-1">Email</label>
            <input
              id="email"
              type="email"
              ref={emailRef}
              required
              autoComplete="email"
              className="w-full p-3 rounded-md bg-[#1C1C1E] text-[#F4F4F4] placeholder-[#A1A1A1] border border-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="thekrmx@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#F4F4F4] mb-1">Password</label>
            <input
              id="password"
              type="password"
              ref={passRef}
              required
              autoComplete="current-password"
              className="w-full p-3 rounded-md bg-[#1C1C1E] text-[#F4F4F4] placeholder-[#A1A1A1] border border-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-[#A1A1A1]">
              <input type="checkbox" className="mr-2 rounded text-[#FFD700]" />
              Remember me
            </label>
            <a href="#" className="text-sm text-[#FFD700] hover:text-[#D4AF37]">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#FFD700] hover:bg-[#D4AF37] text-[#0F0F0F] font-bold rounded-md transition" onClick={()=>navigate('/login')}
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-[#A1A1A1] text-sm">
          Don’t have an account?{' '}
          <a href="#" className="text-[#FFD700] hover:text-[#D4AF37] font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
