import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Resume from "./Pages/Resume.jsx";
import Project from "./Pages/Project.jsx";
import Footer from "./Components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/project" element={<Project />} />
      </Route>
    </Routes>
      <Footer />
      
    </BrowserRouter>
  </StrictMode>
);
