import React, { useState } from 'react';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/bg.png" 
          alt="Dragon pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-md w-full space-y-8 bg-slate-800 p-8 rounded-lg border-2 border-amber-600 shadow-xl relative mx-16">
        {/* Left Dragon */}
        <div className="absolute -left-32 top-1/4 w-32 h-64">
          <img 
            src="/dragonr.png"
            alt="Left dragon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Dragon */}
        <div className="absolute -right-32 top-1/4 w-32 h-64">
          <img 
            src="/api/placeholder/128/256"
            alt="Right dragon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Header Dragon */}
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-48 h-24">
          <img 
            src="/api/placeholder/192/96"
            alt="Header dragon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Header */}
        <div className="text-center relative">
          <div className="flex justify-center mb-4">
            <span className="text-4xl text-amber-500">
              {isSignIn ? "⚔️" : "📜"}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-amber-500 font-medieval">
            {isSignIn ? "Enter the Realm" : "Join the Adventure"}
          </h2>
          <p className="mt-2 text-gray-400">
            {isSignIn ? "Return to your quest" : "Begin your journey"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 relative z-10">
          <div className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm font-medium">Username</label>
              <div className="mt-1 relative">
                <input
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {!isSignIn && (
              <div>
                <label className="text-gray-300 text-sm font-medium">Email</label>
                <div className="mt-1 relative">
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-gray-300 text-sm font-medium">Password</label>
              <div className="mt-1 relative">
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {!isSignIn && (
              <div>
                <label className="text-gray-300 text-sm font-medium">Confirm Password</label>
                <div className="mt-1 relative">
                  <input
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
            >
              {isSignIn ? "Enter the Realm" : "Begin Your Quest"}
            </button>
          </div>
        </form>

        {/* Toggle between Sign In and Sign Up */}
        <div className="text-center relative z-10">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-amber-500 hover:text-amber-400 text-sm"
          >
            {isSignIn 
              ? "New to the realm? Create an account" 
              : "Already a member? Return to your quest"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;