import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const sectionStyle = {
    padding: "40px 20px",
    textAlign: "center",
  };

  const headingStyle = {
    marginBottom: "20px",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "20px",
    flexWrap: "wrap",
  };

  const iconStyle = {
    fontSize: "28px",
    transition: "transform 0.3s ease, color 0.3s ease",
    textDecoration: "none",
    color: "currentColor", 
  };

  const iconHoverStyle = {
    transform: "scale(1.2)",
    color: "#0073b1", // Default hover color (LinkedIn blue)
  };

  const handleHover = (e, hover) => {
    if (hover) {
      e.currentTarget.style.transform = iconHoverStyle.transform;
      e.currentTarget.style.color = iconHoverStyle.color;
    } else {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.color = "#333";
    }
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <p>Let's connect! Reach out via email or social media.</p>
      <div style={iconContainerStyle}>
        <a
          href="mailto:denzeljones442@gmail.com"
          style={iconStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/teabark"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/denzel-jones-1b314a307/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
