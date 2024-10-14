import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://faukirijatul-server.vercel.app/api/auth/register",
        {
          fullName,
          email,
          password,
        }
      );

      setMessage(
        "Pendaftaran Anda sebagai admin sudah masuk antrian. Hubungi admin untuk memverifikasi pendaftaran Anda."
      );
      setError(""); // Clear error message if registration is successful
      setTimeout(() => {
        navigate("/login");
      }, 10000);
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
      setMessage(""); // Clear success message if there's an error
    }
  };

  return (
    <>
      <Navbar />
      <section
        id="register"
        className="flex flex-col items-center justify-center py-16 bg-[#dedede] min-h-[86vh]"
      >
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Register
          </h3>
          {message && (
            <p className="text-green-500 text-center mb-4">{message}</p>
          )}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p>
              Kamu admin?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
