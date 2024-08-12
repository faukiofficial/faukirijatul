import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Admins = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          navigate("/");
        }

        const response = await axios.get(
          "https://faukirijatul-server.onrender.com/api/auth/users"
        );
        setUsers(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  const verifyUser = async (user) => {
    try {
      const response = await axios.post(
        "https://faukirijatul-server.onrender.com/api/auth/verifyuser",
        {
          email: user.email,
          verificationCode: user.verificationCode,
        }
      );

      if (response.status === 200) {
        setUsers(
          users.map((u) =>
            u._id === user._id
              ? { ...u, isVerified: true, verificationCode: undefined }
              : u
          )
        );
      } else {
        setError(response.data.message || "Verification failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to verify user");
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`https://faukirijatul-server.onrender.com/api/auth/users/${userId}`);
        setUsers(users.filter((user) => user._id !== userId));
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete user");
      }
    }
  };

  return (
    <>
      <Navbar />
      <section id="users" className="py-16 bg-[#dedede] min-h-[86vh]">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Admins List
          </h3>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-200 border-b">
                  <th className="py-2 px-4 text-left">Full Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Verification Code</th>
                  <th className="py-2 px-4 text-left">Verify</th>
                  <th className="py-2 px-4 text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="py-2 px-4 border-b">{user.fullName}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td
                      className={`py-2 px-4 border-b ${
                        user.isVerified ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {user.isVerified
                        ? "Sudah terverifikasi"
                        : "Belum terverifikasi"}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {user.verificationCode ? user.verificationCode : "Sudah terpakai"}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => verifyUser(user)}
                        className={`${user.isVerified ? "bg-slate-500 hover:bg-slate-600" : "bg-green-500 hover:bg-green-600"} text-white py-1 px-3 rounded-md  transition duration-300`}
                        disabled={user.isVerified}
                      >
                        Verify
                      </button>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Admins;
