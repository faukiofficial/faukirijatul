import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      navigate('/page-not-found');
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    title: "",
    linkDemo: "",
    linkGithub: "",
    tool: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const form = new FormData();
    form.append("title", formData.title);
    form.append("linkDemo", formData.linkDemo);
    form.append("linkGithub", formData.linkGithub);
    form.append("tool", formData.tool);
    form.append("image", image);

    try {
      await axios.post("https://faukirijatul-server.vercel.app/api/projects", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess("Project added successfully!");
      setFormData({
        title: "",
        linkDemo: "",
        linkGithub: "",
        tool: "",
      });
      setImage(null);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  


  return (
    <>
      <Navbar />
      <section className="py-8 bg-gray-100 min-h-[86vh] flex justify-center items-center">
        <div className="max-w-xl w-full px-6 py-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Add New Project</h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkDemo">
                Demo Link
              </label>
              <input
                type="url"
                id="linkDemo"
                name="linkDemo"
                value={formData.linkDemo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkGithub">
                GitHub Link
              </label>
              <input
                type="url"
                id="linkGithub"
                name="linkGithub"
                value={formData.linkGithub}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tool">
                Tools (comma separated)
              </label>
              <input
                type="text"
                id="tool"
                name="tool"
                value={formData.tool}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring"
                placeholder="e.g., HTML, CSS, JavaScript, ReactJS"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring"
                accept="image/*"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-500 text-white px-4 py-2 rounded-full shadow-md focus:outline-none transition duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                }`}
              >
                {loading ? "Adding..." : (
                  <>
                    <FaPlus className="inline mr-2" />
                    Add Project
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddProject;
