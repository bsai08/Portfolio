import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import PortFFolio from "./components/PortFFolio.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* <Navbar />
      <Home />
      <About />
      <Experiance />
      <Contact />
      <Footer /> */}
      <div className="bg-[#daeff4]">
        <Navbar />
        <Home />
        <About />
        <PortFFolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;