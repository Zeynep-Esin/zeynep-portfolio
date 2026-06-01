const projects = [
  {
    name: "Kuaför Otomasyon Sistemi",
    desc: "Randevu ve müşteri yönetimi sistemi",
    link: "https://github.com/Zeynep-Esin"
  },
  {
    name: "Dijital Demans Rehberi",
    desc: "Dijital bağımlılık farkındalık projesi",
    link: "https://github.com/Zeynep-Esin"
  },
  {
    name: "Mihrap Academia",
    desc: "Eğitim platformu ve içerik sistemi",
    link: "https://github.com/Zeynep-Esin"
  },
  {
    name: "AI Final Projesi",
    desc: "Yapay zeka tabanlı analiz sistemi",
    link: "https://github.com/Zeynep-Esin"
  }
];

export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "#ffffff",
      minHeight: "100vh",
      color: "#111"
    }}>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        padding: "14px 0",
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
          alignItems: "center"
        }}>
          <strong style={{ fontSize: "18px", color: "#000" }}>
            Zeynep Portfolio
          </strong>

          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }>
              Projeler
            </button>

            <button onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }>
              İletişim
            </button>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "50px 16px"
      }}>

        {/* HERO */}
        <h1 style={{
          fontSize: "38px",
          fontWeight: 800,
          color: "#000",
          marginBottom: "10px"
        }}>
          Merhaba, ben Zeynep
        </h1>

        <p style={{
            marginTop: "10px",
            lineHeight: "1.8",
            color: "#222"
          }}>
          Yapay zeka, web geliştirme ve otomasyon sistemleri üzerine çalışan bir geliştiriciyim. Gerçek dünya problemlerine çözüm üreten projeler geliştiriyorum.
        </p>

        {/* ABOUT */}
        <section style={{ marginTop: "50px" }}>
          <h2 style={{ fontSize: "24px", color: "#000", fontWeight: 700 }}>
            Hakkımda
          </h2>

          <p style={{
            marginTop: "10px",
            lineHeight: "1.8",
            color: "#222"
          }}>
            AI, web ve otomasyon alanında projeler geliştiriyorum.
            Sürekli öğrenen ve üreten bir geliştiriciyim.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ marginTop: "60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#000" }}>
            Projelerim
          </h2>

          <div style={{
            display: "grid",
            gap: "14px",
            marginTop: "20px"
          }}>
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => window.open(p.link, "_blank")}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "18px",
                  cursor: "pointer",
                  transition: "0.2s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <strong style={{
                  fontSize: "16px",
                  color: "#000"
                }}>
                  {p.name}
                </strong>

                <p style={{
                  marginTop: "6px",
                  fontSize: "14px",
                  color: "#333"
                }}>
                  {p.desc}
                </p>

                <small style={{ color: "#555" }}>
                  GitHub →
                </small>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ marginTop: "60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#000" }}>
            İletişim
          </h2>

          <p style={{ color: "#222", marginTop: "10px" }}>
            GitHub üzerinden ulaşabilirsin.
          </p>
        </section>

      </div>
    </div>
  );
}