import "./FooterComponent.css";

function FooterComponent() {
  return (
    <footer className="site-footer">
      {/* Rainbow strip */}
      <div className="footer-rainbow">
        <div style={{ background: "#f87171" }} />
        <div style={{ background: "#facc15" }} />
        <div style={{ background: "#4ade80" }} />
        <div style={{ background: "#60a5fa" }} />
        <div style={{ background: "#c084fc" }} />
      </div>

      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo">
            <span className="logo-pink">ცოდნის</span>{" "}
            <span className="logo-blue">სამყარო</span>
          </h3>
          <p className="footer-tagline">
            შევქმნათ უკეთესი მომავალი ჩვენი ბავშვებისთვის, ერთად!
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#" className="footer-link">ხშირად დასმული კითხვები</a>
          <a href="#" className="footer-link">კონტაქტი</a>
          <a href="#" className="footer-link">წესები და პირობები</a>
        </div>

        {/* Footer copy */}
        <div className="footer-social-col">
          <p className="footer-copy">© 2024 ცოდნის სამყარო. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
