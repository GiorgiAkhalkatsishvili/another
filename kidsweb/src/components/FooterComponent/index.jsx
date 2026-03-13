import React from 'react';
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <div className="FooterComponent">
      {/* Rainbow top bar */}
      <div className="footer-rainbow">
        <div style={{ background: "#f87171" }} />
        <div style={{ background: "#facc15" }} />
        <div style={{ background: "#4ade80" }} />
        <div style={{ background: "#60a5fa" }} />
        <div style={{ background: "#c084fc" }} />
      </div>

      {/* Main content */}
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-pink">ცოდნის</span>
            <span className="logo-blue">სამყარო</span>
          </div>
          <div className="footer-tagline">
            შევქმნათ უკეთესი მომავალი ჩვენი ბავშვებისთვის, ერთად!
          </div>
        </div>

        {/* Links as paragraphs */}
        <div className="footer-links">
          <p className="footer-link">ხშირად დასმული კითხვები</p>
          <p className="footer-link">კონტაქტი</p>
          <p className="footer-link">წესები და პირობები</p>
        </div>

        {/* Footer note */}
        <div className="footer-social-col">
          <div className="footer-copy">© 2026 ცოდნის სამყარო. ყველა უფლება დაცულია.</div>
        </div>

      </div>
    </div>
  );
};

export default FooterComponent;
