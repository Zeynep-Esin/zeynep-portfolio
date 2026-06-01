const projects = [
  {
    title: "Kuaför Otomasyon Sistemi",
    desc: "Randevu ve müşteri yönetimi için geliştirilmiş sistem.",
    link: "https://github.com"
  },
  {
    title: "Mihrap Academia",
    desc: "Eğitim platformu ve içerik yönetim sistemi.",
    link: "https://github.com"
  },
  {
    title: "Dijital Demans Rehberi",
    desc: "Dijital bağımlılık üzerine farkındalık projesi.",
    link: "https://github.com"
  },
  {
    title: "AI Final Projesi",
    desc: "Yapay zeka tabanlı analiz ve otomasyon uygulaması.",
    link: "https://github.com"
  }
];

export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "40px 20px"
    }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
        position: "sticky",
        top: 0,
        background: "white",
        padding: "10px 0"
      }}>
        <strong>Zeynep</strong>

        <div>
          <button onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }>
            Projeler
          </button>

          <button style={{ marginLeft: "10px" }} onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }>
            İletişim
          </button>
        </div>
      </nav>

      {/* HERO */}
      <h1>Merhaba, ben Zeynep 👋</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Yapay zeka, web geliştirme ve otomasyon sistemleri üzerine çalışan bir geliştiriciyim.
        Gerçek dünya problemlerine çözüm üreten projeler geliştiriyorum.
      </p>

      {/* ABOUT */}
      <section style={{ marginTop: "50px" }}>
        <h2>Hakkımda</h2>
        <p>
          AI, web ve otomasyon alanında projeler geliştiriyorum.
          Sürekli öğrenen ve üreten bir geliştiriciyim.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ marginTop: "60px" }}>
        <h2>Projelerim</h2>

        <div style={{
          display: "grid",
          gap: "15px",
          marginTop: "20px"
        }}>

          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => window.open(p.link, "_blank")}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "0.2s"
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
              }}
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <small>GitHub →</small>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ marginTop: "60px" }}>
        <h2>İletişim</h2>
        <p>GitHub ve LinkedIn üzerinden ulaşabilirsin.</p>
      </section>

    </div>
  );
}