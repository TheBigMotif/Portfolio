import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Project from "./components/Project.jsx";
import Resume from "./components/Resume.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
