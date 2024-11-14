import Home from "./pages/Home";
import DetailPortfolio from "./pages/DetailProject";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import komponen ScrollToTopButton
import AllProjectsPage from "./pages/AllProjectsPage";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
      <BrowserRouter>
        <div className="relative min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<DetailPortfolio />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/all-projects" element={<AllProjectsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ScrollToTop />
          <ScrollToTopButton />
        </div>
      </BrowserRouter>
  );
}

export default App;
