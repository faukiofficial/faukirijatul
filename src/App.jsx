import Home from "./pages/Home";
import DetailPortfolio from "./pages/DetailProject";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Experience from "./pages/Experience";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import komponen ScrollToTopButton
import AllProjectsPage from "./pages/AllProjectsPage";
import ScrollToTop from "./components/ScrollToTop";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admins from "./pages/Admins";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="relative min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<DetailPortfolio />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/all-projects" element={<AllProjectsPage />} />
            <Route path="/addproject" element={<AddProject />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/editproject/:id" element={<EditProject />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ScrollToTop />
          <ScrollToTopButton />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
