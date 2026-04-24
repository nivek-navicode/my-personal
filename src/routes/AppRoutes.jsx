import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { useState, useEffect } from 'react';

function AppRoutes() {

  return (
      <MainLayout>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      </MainLayout>
  );
}

export default AppRoutes;