import { useState, useRef, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./HeaderComponent.css";

function HeaderComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <header className="site-header" ref={menuRef}>
      <div className="header-inner">

        <div className="logo-link" onClick={() => navigate("/")}>
          <div className="logo-icon-wrap">
            <GraduationCap size={30} color="#2563eb" />
          </div>
          <span className="logo-text">
            <span className="logo-pink">ცოდნის</span>{" "}
            <span className="logo-blue">სამყარო</span>
          </span>
        </div>

        <nav className="desktop-nav">
          <button className="nav-link nav-georgian">ქართული</button>
          <button className="nav-link nav-math">მათემატიკა</button>
          <button className="nav-link nav-science">მეცნიერება</button>
          <button className="nav-link nav-art">ხელოვნება</button>
          <button className="nav-link nav-games">თამაშები</button>
        </nav>

        <div className="header-actions">
          <div className="parents-btn">
            <button className="playful-button white sm">მშობლებისთვის</button>
          </div>
          <button
            className="playful-button yellow sm"
            onClick={() => navigate("/auth")}
          >
            შესვლა
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      <div className={`mobile-nav ${mobileOpen ? "open" : "close"}`}>
        <button className="mobile-nav-link" onClick={() => setMobileOpen(false)}>ქართული</button>
        <button className="mobile-nav-link" onClick={() => setMobileOpen(false)}>მათემატიკა</button>
        <button className="mobile-nav-link" onClick={() => setMobileOpen(false)}>მეცნიერება</button>
        <button className="mobile-nav-link" onClick={() => setMobileOpen(false)}>ხელოვნება</button>
        <button className="mobile-nav-link" onClick={() => setMobileOpen(false)}>თამაშები</button>
        <div className="mobile-divider" />
        <button className="mobile-nav-link mobile-parents">მშობლებისთვის</button>
      </div>

    </header>
  );
}

export default HeaderComponent;
