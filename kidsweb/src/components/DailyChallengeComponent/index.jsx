import { useEffect, useRef, useState } from "react";
import { Trophy, Puzzle, Brain, ChevronRight, User2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./DailyChallengeComponent.css";

const MOCK_LEADERBOARD = [
  { id: 1, name: "ანი გელაშვილი", score: 980, avatar: null },
  { id: 2, name: "გიორგი მარტიაშვილი", score: 850, avatar: null },
  { id: 3, name: "მარიამ კობახიძე", score: 740, avatar: null },
  { id: 4, name: "ლუკა ბერიძე", score: 620, avatar: null },
  { id: 5, name: "სოფო ჩიქოვანი", score: 510, avatar: null },
];

const RANK_STYLES = [
  { background: "#fef9c3", color: "#854d0e", border: "#fde047" },
  { background: "#f1f5f9", color: "#475569", border: "#cbd5e1" },
  { background: "#ffedd5", color: "#9a3412", border: "#fb923c" },
];

function LeaderboardEntry({ entry, index }) {
  const isTop3 = index < 3;

  const style = isTop3
    ? RANK_STYLES[index]
    : { background: "#fff", color: "#334155", border: "#f1f5f9" };

  return (
    <div
      className="lb-entry"
      style={{
        background: style.background,
        borderColor: style.border,
        animationDelay: `${index * 80}ms`,
      }}
    >
      <span
        className={`lb-rank ${isTop3 ? "lb-rank-big" : ""}`}
        style={{ color: style.color }}
      >
        #{index + 1}
      </span>

      <div className="lb-avatar">
        {entry.avatar ? (
          <img src={entry.avatar} alt={entry.name} />
        ) : (
          <User2 size={18} color="#60a5fa" />
        )}
      </div>

      <span className="lb-name">{entry.name}</span>
      <span className="lb-score">{entry.score}</span>
    </div>
  );
}

function DailyChallengeComponent() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tiles = [
    { char: "მ", mystery: false },
    { char: "?", mystery: true },
    { char: "ლ", mystery: false },
    { char: "ა", mystery: false },
    { char: "?", mystery: true },
  ];

  return (
    <section className="challenge-section" ref={sectionRef}>
      <div className="challenge-inner">

        <div className="challenge-heading">
          <div className="challenge-icon-wrap">
            <Trophy size={32} color="#fff" />
          </div>

          <h2 className="challenge-title">
            დღის <span className="challenge-orange">გამოწვევა!</span>
          </h2>
        </div>

        <div className="challenge-grid">

          <div className={`card puzzle-card ${visible ? "card-in" : ""}`}>
            <div className="puzzle-bg-icon">
              <Puzzle size={256} />
            </div>

            <div className="puzzle-content">
              <div className="puzzle-icon-wrap">
                <Brain size={40} color="#2563eb" />
              </div>

              <div className="puzzle-text">
                <h3 className="puzzle-title">ამოხსენი თავსატეხი</h3>

                <p className="puzzle-subtitle">
                  იპოვე დაკარგული ასოები და ააწყვე სიტყვა! მოიპოვე 50 ქულა.
                </p>

                <div className="letter-tiles-wrap">
                  {tiles.map((tile, i) => (
                    <div
                      key={i}
                      className={`letter-tile ${
                        tile.mystery ? "tile-mystery" : "tile-known"
                      }`}
                    >
                      {tile.char}
                    </div>
                  ))}
                </div>

                <button
                  className="challenge-button"
                  onClick={() => {
                    navigate("/puzzle");
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 0);
                  }}
                >
                  თამაში <ChevronRight size={18} />
                </button>

              </div>
            </div>
          </div>

          <div className={`card lb-card ${visible ? "card-in" : ""}`}>
            <div className="lb-card-inner">

              <h3 className="lb-card-title">
                <span className="lb-star-icon">
                  <Star size={22} fill="currentColor" color="#ca8a04" />
                </span>
                შენი მეგობრები
              </h3>

              <div className="lb-list">
                {MOCK_LEADERBOARD.map((entry, i) => (
                  <LeaderboardEntry
                    key={entry.id}
                    entry={entry}
                    index={i}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DailyChallengeComponent;
