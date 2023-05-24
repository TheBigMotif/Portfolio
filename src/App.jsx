import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Portfolio from "./components/Portfolio.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Resume from "./components/Resume.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <Header></Header> */}
        <Hero></Hero>
        <Routes>
          <Route path="/" element={<AboutMe />}></Route>
          {/* <Route path="/" element={<About />}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
