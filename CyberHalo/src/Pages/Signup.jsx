import React, { useRef } from 'react';
import api from '../Api/Api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate =useNavigate(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await api.post('/auth/signup', {
        name,
        email,
        password,
      });
      console.log('Signup successful:', res.data);
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] px-4">
      <div className="w-full max-w-md bg-[#2C2C2E] rounded-2xl p-8 shadow-lg shadow-[#1E1F2F]">
        <h2 className="text-3xl font-bold text-center text-[#FFD700] mb-6">Create Account</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="signup-name" className="block text-[#F4F4F4] mb-1">Name</label>
            <input
              id="signup-name"
              type="text"
              ref={nameRef}
              required
              autoComplete="name"
              className="w-full p-3 rounded-md bg-[#1C1C1E] text-[#F4F4F4] placeholder-[#A1A1A1] border border-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="John Cyber"
            />
          </div>

          <div>
            <label htmlFor="signup-email" className="block text-[#F4F4F4] mb-1">Email</label>
            <input
              id="signup-email"
              type="email"
              ref={emailRef}
              required
              autoComplete="email"
              className="w-full p-3 rounded-md bg-[#1C1C1E] text-[#F4F4F4] placeholder-[#A1A1A1] border border-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="cyberjohn@domain.com"
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="block text-[#F4F4F4] mb-1">Password</label>
            <input
              id="signup-password"
              type="password"
              ref={passwordRef}
              required
              autoComplete="new-password"
              className="w-full p-3 rounded-md bg-[#1C1C1E] text-[#F4F4F4] placeholder-[#A1A1A1] border border-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="signup-confirm-password" className="block text-[#F4F4F4] mb-1">Confirm Password</label>
            <input
              id="signup-confirm-password"
              type="password"
              ref={confirmPasswordRef}
              required
              autoComplete="new-password"
              className="w-full p-3 rounded-md bg-[#1C1C1E] text-[#F4F4F4] placeholder-[#A1A1A1] border border-[#3A3A3C] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#FFD700] hover:bg-[#D4AF37] text-[#0F0F0F] font-bold rounded-md transition" onClick={()=>navigate('/signup')}
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-[#A1A1A1] text-sm">
          Already have an account?{' '}
          <a href="#" className="text-[#FFD700] hover:text-[#D4AF37] font-medium">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
