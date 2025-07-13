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
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route
          path="/"
          element={
            /* ① Beri max‑width supaya konten tidak “melar” terlalu lebar
                 ② Gunakan 2xl:h-screen agar tinggi penuh di TV/monitor */
            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row 2xl:h-screen">
              {/* Profile Section */}
              <div
                id="home"
                /* 1/3 di desktop, 1/4 di monitor besar */
                className="w-full lg:w-1/3 2xl:w-1/4 border-gray-700 lg:border-r-4 2xl:border-r-8 2xl:h-screen"
              >
                <Profile />
              </div>

              {/* Content Section */}
              <div
                id="content"
                /* 2/3 di desktop, 3/4 di monitor besar */
                className="w-full lg:w-2/3 2xl:w-3/4 overflow-y-auto h-full p-2 2xl:p-8"
              >
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

                <ResumeDownload />
                <BlogList />
                <ContactMe />
                <Footer />
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
