import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

const appStyle = {
  backgroundColor: darkMode ? "#121212" : "#ffffff",
  color: darkMode ? "#ffffff" : "#000000",
  fontFamily: "Arial, sans-serif",
  transition: "background-color 0.3s ease, color 0.3s ease",
  minHeight: "100vh",
  padding: "0 20px",
  minWidth: "100vw",
  backgroundImage: darkMode
    ? "none"
    : "radial-gradient(circle at 1px 1px, #e0e0e0 1px, transparent 0)",
  backgroundSize: darkMode ? "none" : "20px 20px",
};


  return (
    <div style={appStyle}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
