import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmail(email, pass)
      .then(result => {
        const user = result.user;
        console.log("Logged in user:", user);
        alert("Login successful!");
        navigate("/"); // redirect after login
      })
      .catch((err) => {
        alert("Wrong email or password! " + err.message);
      });
  }

  return (
    <div className="bg-blue-950 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-blue-950 text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <input 
            className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 transition"
            type="email" 
            name='email'
            placeholder="Enter Your Email" 
            required
          />
          <input 
            className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 transition"
            type="password" 
            placeholder="Enter Your Password" 
            name='password'
            required
          />
          <p className='text-right hover:text-red-600 cursor-pointer'>Forgot Password</p>

          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className='flex flex-col justify-center items-center text-center py-4 text-3xl'>or</p>

        <div className="flex flex-col gap-4 mt-3">
          <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300">
            Login With Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition duration-300">
            Login With Github
          </button>
        </div>

        <p className="text-center text-gray-700 mt-6">
          Don't have an account?{" "}
          <Link className="text-blue-600 font-semibold hover:underline" to="/register">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
