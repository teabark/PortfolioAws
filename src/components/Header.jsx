export default function Header({ darkMode, setDarkMode }) {
  const textColor = darkMode ? "#ffffff" : "#000000"; // 👈 dynamic color

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        color: textColor,
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2.7rem", color: textColor }}>
        Denzel Jones
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "8px 12px",
          background: "none",
          border: `1px solid ${textColor}`,
          color: textColor,
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}
