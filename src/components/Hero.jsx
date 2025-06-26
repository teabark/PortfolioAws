import { useEffect, useState } from "react";
import denzelImg from "../assets/denzel.jpg";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const font = document.createElement("link");
    font.href = "https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap";
    font.rel = "stylesheet";
    document.head.appendChild(font);
  }, []);

const containerStyle = {
  display: "flex",
  alignItems: "center",          // ✅ vertical alignment
  justifyContent: "center",      // ✅ horizontal alignment
  flexWrap: "wrap",
  gap: "40px",
  width: "100vw",
  height: "100vh",               // ✅ fill entire viewport height
  padding: "40px 20px",          // ✅ padding stays for smaller screens
  boxSizing: "border-box",
  overflow: "hidden",
};

// For large screens, override with JS media query
const isLargeScreen = window.innerWidth > 1024;
if (isLargeScreen) {
  containerStyle.padding = "80px 60px";
}


  const textStyle = {
    flex: "1 1 300px",
    maxWidth: "500px",
    textAlign: "left",
  };

  const polaroidContainerStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "rotate(0deg) scale(1.05)" : "rotate(-3deg)",
    boxShadow: isHovered ? "0 12px 24px rgba(0,0,0,0.3)" : "none",
    cursor: "pointer",
    flex: "0 0 auto",
  };

  const polaroidStyle = {
    backgroundColor: "#fff",
    padding: "10px 10px 30px 10px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    border: "1px solid #ccc",
    borderRadius: "4px",
    textAlign: "center",
    width: "200px",
    fontFamily: "'Patrick Hand', cursive",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    marginBottom: "10px",
  };

  const captionStyle = {
    fontSize: "14px",
    color: "#333",
  };

  return (
    <section style={containerStyle}>
      <div style={textStyle}>
        <h2 style={{ marginBottom: "10px" }}>Hello, I'm Denzel</h2>
        <p style={{ lineHeight: "1.6" }}>
          Full Stack Web Developer passionate about building creative apps.
        </p>
      </div>

      <div
        style={polaroidContainerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={polaroidStyle}>
          <img src={denzelImg} alt="Profile" style={imageStyle} />
          <div style={captionStyle}>Denzel Jones – DJ</div>
        </div>
      </div>
    </section>
  );
}
