import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <div className="site-footer">
      <div className="footer-rainbow">
        <div style={{ background: "#f87171" }} />
        <div style={{ background: "#facc15" }} />
        <div style={{ background: "#4ade80" }} />
        <div style={{ background: "#60a5fa" }} />
        <div style={{ background: "#c084fc" }} />
      </div>

      <div className="footer-inner">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-pink">ცოდნის</span>{" "}
            <span className="logo-blue">სამყარო</span>
          </div>
          <div className="footer-tagline">
            შევქმნათ უკეთესი მომავალი ჩვენი ბავშვებისთვის, ერთად!
          </div>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">ხშირად დასმული კითხვები</a>
          <a href="#" className="footer-link">კონტაქტი</a>
          <a href="#" className="footer-link">წესები და პირობები</a>
        </div>

        <div className="footer-social-col">
          {/* Icons removed */}
          <div className="footer-copy">© 2026 ცოდნის სამყარო. ყველა უფლება დაცულია.</div>
        </div>

      </div>
    </div>
  );
}

export default FooterComponent;
