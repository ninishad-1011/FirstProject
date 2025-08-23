import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const { createUserWithPass } = useContext(AuthContext);

  const [errorMsg, setErrormsg] = useState("");
  const [successregister, setSuccess] = useState("");

  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleform = (e) => {
    e.preventDefault();
    const fullname = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const confirmPassword = e.target.confirmpass.value;

    if (pass !== confirmPassword) {
      setErrormsg("Passwords do not match");
      setSuccess("");
      return;
    }
    if (!passwordRegex.test(confirmPassword)) {
      setErrormsg(
        "Password must be at least 6 characters long and include letters & numbers"
      );
      return;
    }

    createUserWithPass(email, pass)
      .then((result) => {
        const user = result.user;

        setErrormsg("");
        e.target.reset();

        Swal.fire({
          title: "Good job!",
          text: "Registration Successfully!",
          icon: "success",
        });
        setTimeout(() => {
          setSuccess("");
          navigate("/login");
        }, 500);
      })
      .catch((err) => {
        setErrormsg(err.message);
        setSuccess("");
      });
  };

  return (
    <div className="bg-blue-950 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-blue-950 text-center mb-6">
          Register
        </h1>

        <form onSubmit={handleform} className="space-y-5">
          <input
            className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 transition"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 transition"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <div className="relative w-full">
            <input
              className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 transition"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              name="pass"
              required
            />
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="relative w-full">
            <input
              className="w-full border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 transition"
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmpass"
              required
            />
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {errorMsg && <p className="text-center text-red-700">{errorMsg}</p>}
          {successregister && (
            <p className="text-center text-green-600">{successregister}</p>
          )}

          <p className="flex items-center gap-2">
            <input type="checkbox" name="terms" id="checkbox" required />
            <label htmlFor="checkbox">Accept Terms and Conditions</label>
          </p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300">
            Register
          </button>
        </form>

        {/* github & google signing button */}
        <div className="flex flex-col gap-4 mt-6">
          <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300">
            Register With Google
          </button>

          <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition duration-300">
            Register With Github
          </button>
        </div>

        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link
            className="text-blue-600 font-semibold hover:underline"
            to="/login"
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
