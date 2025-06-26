export default function About() {
  const sectionStyle = {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "auto",
    textAlign: "center",
    backgroundColor: "inherit",
    color: "inherit",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const tools = [
    "JavaScript",
    "React",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Socket.IO",
    "Git",
    "GitHub",
    "AWS EC2",
    "S3",
    "CloudFront",
    "PM2",
    "NGINX",
    "CI/CD",
    "HTML",
    "CSS",
    "Responsive Design",
  ];

  const toolsStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginTop: "25px",
  };

  const toolBadgeStyle = {
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    color: "inherit",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <section style={sectionStyle} id="about">
      <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>About Me</h2>
      <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
        I'm Denzel Jones, a dedicated Full Stack Developer with a deep interest
        in building responsive, reliable, and scalable web applications. I
        believe that great software is not just functional, but thoughtfully
        designed and impactful. I’m continuously learning and evolving with new
        tools, with a particular passion for real-time systems, cloud-native
        architecture, and clean code practices. My goal is to create software
        that not only meets business needs, but also improves lives through
        thoughtful engineering.
      </p>
      <h3 style={{ marginTop: "40px", fontSize: "22px" }}>
        Technologies & Tools I Use
      </h3>
      <div style={toolsStyle}>
        {tools.map((tool, index) => (
          <div key={index} style={toolBadgeStyle}>
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
