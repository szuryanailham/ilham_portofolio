import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Ability from "./Components/Ability";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import MenuBar from "./Components/MenuBar";
import Portofolio from "./Components/Portofolio";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import RuangEditDetail from "./page/ruang_edit_detail";
import CertificateSection from "./Components/certificate";
import { Testimony } from "./Components/Testimony";
import ResumeDownload from "./Components/resumeDownload";
import BlogList from "./Components/blogList";
import ContactMe from "./Components/ContactMe";
function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route
          path="/"
          element={
            <div className="flex flex-col md:flex-row h-fit">
              {/* Profile Section */}
              <div id="home" className="w-full md:w-1/3 md:border-r-4 border-gray-700 md:h-screen">
                <Profile />
              </div>

              {/* Content Section */}
              <div id="content" className="w-full md:w-2/3 overflow-y-auto md:h-full p-4">
                <MenuBar />
                <Hero />
                <Skill />
                <div id="education">
                  <Education />
                </div>
                <div id="experience">
                  <Experience />
                </div>
                <div id="portofolio">
                  <Portofolio />
                </div>
                <Ability />
                <div id="certificate">
                  <CertificateSection />
                </div>
                <div id="testimony">
                  <Testimony />
                </div>
                <div>
                  <ResumeDownload />
                </div>
                <div>
                  <BlogList />
                </div>
                <div>
                  <ContactMe />
                </div>
              </div>
            </div>
          }
        />

        {/* Halaman Detail Portofolio */}
        <Route path="/portfolio/ruang-edit" element={<RuangEditDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
