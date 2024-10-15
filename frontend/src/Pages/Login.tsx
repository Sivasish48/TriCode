import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-[440px] h-[400px] p-8 flex flex-col justify-center bg-black shadow-lg rounded-lg">
        
        {/* Login Header */}
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl font-semibold">Login</h2>
        </div>

        {/* Input Fields */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Email"
              className="w-full h-[60px] text-lg px-6 border-b-2 border-gray-400 rounded-full shadow-sm bg-black text-white placeholder-gray-400 focus:outline-none transition-transform duration-300 focus:scale-105"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[60px] text-lg px-6 border-b-2 border-gray-400 rounded-full shadow-sm bg-black text-white placeholder-gray-400 focus:outline-none transition-transform duration-300 focus:scale-105"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="relative mb-5">
            <button
              type="submit"
              className="w-full h-[60px] bg-gray-700 rounded-full text-white font-medium transition-transform duration-300 hover:scale-105 hover:bg-gray-600"
            >
             Login
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center text-gray-400 text-sm">
          <p>
           Dont have an account?{" "}
            <a href="#" className="font-semibold text-white hover:underline" onClick={() => navigate("/signup")}>
              Sign Up 
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
