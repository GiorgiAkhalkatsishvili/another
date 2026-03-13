import { Facebook, Instagram, Youtube } from "lucide-react";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <footer className="site-footer">
      <div className="footer-rainbow">
        <div style={{ background: "#f87171" }} />
        <div style={{ background: "#facc15" }} />
        <div style={{ background: "#4ade80" }} />
        <div style={{ background: "#60a5fa" }} />
        <div style={{ background: "#c084fc" }} />
      </div>

      <div className="footer-inner">

        <div className="footer-brand">
          <h3 className="footer-logo">
            <span className="logo-pink">ცოდნის</span>{" "}
            <span className="logo-blue">სამყარო</span>
          </h3>
          <p className="footer-tagline">
            შევქმნათ უკეთესი მომავალი ჩვენი ბავშვებისთვის, ერთად!
          </p>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">ხშირად დასმული კითხვები</a>
          <a href="#" className="footer-link">კონტაქტი</a>
          <a href="#" className="footer-link">წესები და პირობები</a>
        </div>

        <div className="footer-social-col">
          <div className="social-icons">
            <a href="#" className="social-btn social-facebook" aria-label="Facebook">
              <Facebook size={22} />
            </a>
            <a href="#" className="social-btn social-instagram" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href="#" className="social-btn social-youtube" aria-label="YouTube">
              <Youtube size={22} />
            </a>
          </div>
          <p className="footer-copy">© 2024 ცოდნის სამყარო. ყველა უფლება დაცულია.</p>
        </div>

      </div>
    </footer>
  );
}

export default FooterComponent;
