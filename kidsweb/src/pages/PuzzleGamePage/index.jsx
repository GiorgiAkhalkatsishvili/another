import { useState, useEffect } from "react";
import { ArrowLeft, Star, Trophy, RotateCcw, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./PuzzleGamePage.css";

const PUZZLES = [
  { word: "მასწავლებელი", hint: "ვინ გვასწავლის სკოლაში?",             emoji: "👩‍🏫", hiddenIndexes: [1, 4, 7] },
  { word: "წიგნი",        hint: "საიდან ვიგებთ ახალ ინფორმაციას?",     emoji: "📚",  hiddenIndexes: [1, 3] },
  { word: "მათემატიკა",   hint: "რომელ საგანს ვსწავლობთ ციფრებით?",    emoji: "🔢",  hiddenIndexes: [2, 5, 8] },
  { word: "სკოლა",        hint: "სად ვსწავლობთ ყოველ დღე?",            emoji: "🏫",  hiddenIndexes: [1, 3] },
  { word: "მეგობარი",     hint: "ვინ არის ჩვენი ახლო ადამიანი?",       emoji: "🤝",  hiddenIndexes: [1, 4, 6] },
  { word: "ანბანი",       hint: "ასოების ერთობლიობა ეწოდება...",        emoji: "🔤",  hiddenIndexes: [0, 3] },
];

const GEORGIAN_KEYBOARD = [
  ["ა","ბ","გ","დ","ე","ვ","ზ","თ","ი"],
  ["კ","ლ","მ","ნ","ო","პ","ჟ","რ","ს"],
  ["ტ","უ","ფ","ქ","ღ","ყ","შ","ჩ","ც"],
  ["ძ","წ","ჭ","ხ","ჯ","ჰ"],
];

export default function PuzzleGame() {
  const navigate = useNavigate();
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [guesses, setGuesses] = useState({});
  const [wrongLetters, setWrongLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("playing");
  const [showConfetti, setShowConfetti] = useState(false);
  const [mounted, setMounted] = useState(false);

  const puzzle = PUZZLES[puzzleIndex];

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    setGuesses({});
    setWrongLetters([]);
    setStatus("playing");
    setShowConfetti(false);
  }, [puzzleIndex]);

  const hiddenLetters = puzzle.hiddenIndexes.map(i => puzzle.word[i]);
  const uniqueHidden = [...new Set(hiddenLetters)];
  const remainingLives = 6 - wrongLetters.length;

  const handleGuess = (letter) => {
    if (status !== "playing") return;
    if (guesses[letter] || wrongLetters.includes(letter)) return;

    if (uniqueHidden.includes(letter)) {
      const newGuesses = { ...guesses, [letter]: "correct" };
      setGuesses(newGuesses);
      const allFound = uniqueHidden.every(l => newGuesses[l] === "correct");
      if (allFound) {
        setStatus("won");
        setScore(s => s + 50);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    } else {
      const newWrong = [...wrongLetters, letter];
      setWrongLetters(newWrong);
      if (newWrong.length >= 6) setStatus("lost");
    }
  };

  const handleNext = () => {
    setPuzzleIndex(i => (i < PUZZLES.length - 1 ? i + 1 : 0));
  };

  const handleReset = () => {
    setGuesses({});
    setWrongLetters([]);
    setStatus("playing");
    setShowConfetti(false);
  };

  return (
    <div className={`puzzle-page ${mounted ? "puzzle-page-in" : ""}`}>

      {showConfetti && (
        <div className="confetti-wrap">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="confetti-dot" style={{
              left: `${Math.random() * 100}%`,
              background: ["#facc15","#3b82f6","#ec4899","#22c55e","#a855f7"][i % 5],
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${1 + Math.random()}s`,
            }} />
          ))}
        </div>
      )}

      <div className="puzzle-page-inner">

        {/* Top bar */}
        <div className="puzzle-topbar">
          <button className="back-btn" onClick={() => navigate("/")}>
            <ArrowLeft size={20} />
            მთავარი
          </button>
          <div className="puzzle-score-badge">
            <Trophy size={18} color="#f97316" />
            <span>{score} ქულა</span>
          </div>
        </div>

        {/* Progress dots */}
        <div className="puzzle-progress">
          {PUZZLES.map((_, i) => (
            <div key={i} className={`progress-dot ${i === puzzleIndex ? "progress-dot-active" : ""} ${i < puzzleIndex ? "progress-dot-done" : ""}`} />
          ))}
        </div>

        {/* Main card */}
        <div className="puzzle-main-card">

          <div className="puzzle-hint-wrap">
            <span className="puzzle-emoji">{puzzle.emoji}</span>
            <div>
              <div className="puzzle-hint-label">მინიშნება</div>
              <div className="puzzle-hint-text">{puzzle.hint}</div>
            </div>
          </div>

          <div className="lives-row">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`life-heart ${i < remainingLives ? "life-alive" : "life-dead"}`}>❤️</div>
            ))}
            <span className="lives-label">{remainingLives} შეცდომა დარჩა</span>
          </div>

          <div className="word-display">
            {puzzle.word.split("").map((char, i) => {
              const isHidden = puzzle.hiddenIndexes.includes(i);
              const isGuessed = isHidden && guesses[char] === "correct";
              const isRevealed = status === "lost" && isHidden && !isGuessed;
              return (
                <div key={i} className={`word-tile ${!isHidden ? "tile-visible" : ""} ${isGuessed ? "tile-guessed" : ""} ${isRevealed ? "tile-revealed" : ""} ${isHidden && !isGuessed && !isRevealed ? "tile-blank" : ""}`}>
                  {!isHidden ? char : isGuessed ? char : isRevealed ? char : "?"}
                </div>
              );
            })}
          </div>

          {wrongLetters.length > 0 && (
            <div className="wrong-letters">
              <span className="wrong-label">არასწორი:</span>
              {wrongLetters.map((l, i) => (
                <span key={i} className="wrong-letter">{l}</span>
              ))}
            </div>
          )}

          {status === "won" && (
            <div className="status-banner status-won">
              <CheckCircle size={28} />
              <div>
                <div className="status-title">ყოჩაღ! 🎉</div>
                <div className="status-sub">+50 ქულა მოიპოვე!</div>
              </div>
            </div>
          )}

          {status === "lost" && (
            <div className="status-banner status-lost">
              <XCircle size={28} />
              <div>
                <div className="status-title">სცადე კიდევ! </div>
                <div className="status-sub">სიტყვა იყო: {puzzle.word}</div>
              </div>
            </div>
          )}

          {status !== "playing" && (
            <div className="puzzle-actions">
              <button className="action-btn action-btn-blue" onClick={handleNext}>
                შემდეგი სიტყვა →
              </button>
              <button className="action-btn action-btn-white" onClick={handleReset}>
                <RotateCcw size={16} /> თავიდან
              </button>
            </div>
          )}
        </div>

        {/* Keyboard */}
        {status === "playing" && (
          <div className="geo-keyboard">
            {GEORGIAN_KEYBOARD.map((row, ri) => (
              <div key={ri} className="keyboard-row">
                {row.map((letter) => {
                  const isCorrect = guesses[letter] === "correct";
                  const isWrong = wrongLetters.includes(letter);
                  return (
                    <button
                      key={letter}
                      className={`key-btn ${isCorrect ? "key-correct" : ""} ${isWrong ? "key-wrong" : ""}`}
                      onClick={() => handleGuess(letter)}
                      disabled={isCorrect || isWrong}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* Stars */}
        <div className="star-row">
          {[...Array(3)].map((_, i) => (
            <Star key={i} size={32}
              fill={score >= (i + 1) * 50 ? "#facc15" : "none"}
              color={score >= (i + 1) * 50 ? "#facc15" : "#cbd5e1"}
            />
          ))}
          <span className="star-score">{score} / 150 ქულა</span>
        </div>

      </div>
    </div>
  );
}
