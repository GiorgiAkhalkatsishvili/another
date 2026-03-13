import { useEffect, useState } from "react";
import { Star, BookOpen, Music, Microscope } from "lucide-react";
import "./HeroComponent.css";
//a

function HeroComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="hero-section">
      <span className="deco deco-star"><Star size={48} fill="currentColor" color="#facc15" /></span>
      <span className="deco deco-music"><Music size={56} color="#c084fc" /></span>
      <span className="deco deco-book"><BookOpen size={50} color="#f472b6" /></span>
      <span className="deco deco-micro"><Microscope size={56} color="#4ade80" /></span>

      <div className={`hero-content ${mounted ? "hero-in" : ""}`}>
        <div className="hero-badge">✨ ახალი სასწავლო წელი დაიწყო!</div>
        <h1 className="hero-title">
          ითამაშე, ისწავლე,{" "}
          <span className="hero-gradient">გაიზარდე!</span>
        </h1>
        <p className="hero-subtitle">
          შემოგვიერთდი ჯადოსნურ სამყაროში, სადაც სწავლა სახალისო თავგადასავალია!
        </p>
        <div className="hero-buttons">
          <button>დაიწყე მოგზაურობა</button>
          <button>გაიგე მეტი</button>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
