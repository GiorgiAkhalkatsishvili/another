import { useEffect, useRef, useState } from "react";
import { BookA, Calculator, FlaskConical, Palette } from "lucide-react";
import "./SubjectsComponent.css";

const subjects = [
  { id: "georgian", title: "ქართული ენა", description: "ვისწავლოთ ანბანი", bg: "#ef4444", shadow: "rgba(239,68,68,0.3)", iconColor: "#ef4444", Icon: BookA },
  { id: "math", title: "მათემატიკა", description: "ვითამაშოთ ციფრებით", bg: "#22c55e", shadow: "rgba(34,197,94,0.3)", iconColor: "#22c55e", Icon: Calculator },
  { id: "science", title: "მეცნიერება", description: "აღმოვაჩინოთ სამყარო", bg: "#a855f7", shadow: "rgba(168,85,247,0.3)", iconColor: "#a855f7", Icon: FlaskConical },
  { id: "art", title: "ხელოვნება", description: "შევქმნათ სილამაზე", bg: "#ec4899", shadow: "rgba(236,72,153,0.3)", iconColor: "#ec4899", Icon: Palette },
];

function SubjectCard({ subject, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`subject-card ${visible ? "subject-card-in" : ""}`}
      style={{
        background: subject.bg,
        boxShadow: `0 12px 40px ${subject.shadow}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="subject-inner">
        <div className="subject-glow" />
        <div className="subject-icon-wrap">
          <subject.Icon size={48} color={subject.iconColor} strokeWidth={2.5} />
        </div>

        <h3 className="subject-title">{subject.title}</h3>

        <div className="subject-spacer" />

        <button className="subject-button">
          <span style={{ color: subject.iconColor, fontWeight: 800 }}>
            {subject.description}
          </span>
        </button>

      </div>
    </div>
  );
}

export function SubjectsComponent() {
  return (
    <section className="subjects-section">
      <div className="subjects-header">
        <h2 className="subjects-title">
          აირჩიე <span className="subjects-yellow">საგანი</span>
        </h2>
        <p className="subjects-subtitle">დავიწყოთ დღევანდელი გაკვეთილი!</p>
      </div>

      <div className="subjects-grid">
        {subjects.map((subject, i) => (
          <SubjectCard key={subject.id} subject={subject} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}

export default SubjectsComponent;
