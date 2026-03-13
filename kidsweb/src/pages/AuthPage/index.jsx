import { useState, useEffect } from "react";
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Star,
  BookOpen,
  Pencil,
  Rocket,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

function AuthPage() {
  const [tab, setTab] = useState("login");         // "login" | "signup"
  const [role, setRole] = useState("student");     // "student" | "parent"
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "", email: "", password: "", confirm: "",
  });

  const navigate = useNavigate();

  useEffect(() => { setMounted(true); }, []);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = () => {
    if (tab === "signup") {
      if (!form.name.trim()) return setError("სახელის შეყვანა სავალდებულოა.");
      if (!form.email.includes("@")) return setError("მიუთითეთ სწორი ელ-ფოსტა.");
      if (form.password.length < 6) return setError("პაროლი მინიმუმ 6 სიმბოლო უნდა იყოს.");
      if (form.password !== form.confirm) return setError("პაროლები არ ემთხვევა.");
    } else {
      if (!form.email.includes("@")) return setError("მიუთითეთ სწორი ელ-ფოსტა.");
      if (!form.password) return setError("პაროლის შეყვანა სავალდებულოა.");
    }
    setSuccess(true);
  };

  const switchTab = (t) => {
    setTab(t);
    setError("");
    setSuccess(false);
    setForm({ name: "", email: "", password: "", confirm: "" });
  };

  // Common button style
  const btnStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "14px",
    fontWeight: 800,
    fontSize: "15px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    border: "none",
    transition: "all 0.2s",
  };

  return (
    <div className={`auth-page ${mounted ? "auth-page-in" : ""}`}>

      {/* Floating decorations */}
      <span className="auth-deco auth-deco-star">
        <Star size={48} fill="#facc15" color="#facc15" />
      </span>
      <span className="auth-deco auth-deco-book">
        <BookOpen size={52} color="#f472b6" />
      </span>
      <span className="auth-deco auth-deco-pencil">
        <Pencil size={48} color="#c084fc" />
      </span>
      <span className="auth-deco auth-deco-rocket">
        <Rocket size={52} color="#4ade80" />
      </span>

      <div className="auth-card">

        {/* Logo */}
        <div className="auth-logo" onClick={() => navigate("/")}>
          <div className="auth-logo-icon">
            <GraduationCap size={28} color="#2563eb" />
          </div>
          <span className="auth-logo-text">
            <span className="auth-logo-pink">ცოდნის</span>{" "}
            <span className="auth-logo-blue">სამყარო</span>
          </span>
        </div>

        {/* Tab switcher */}
        <div className="auth-tabs">
          <button
            className={`auth-tab ${tab === "login" ? "auth-tab-active" : ""}`}
            onClick={() => switchTab("login")}
          >
            შესვლა
          </button>
          <button
            className={`auth-tab ${tab === "signup" ? "auth-tab-active" : ""}`}
            onClick={() => switchTab("signup")}
          >
            რეგისტრაცია
          </button>
        </div>

        {/* Success state */}
        {success ? (
          <div className="auth-success">
            <div className="auth-success-icon">
              <CheckCircle size={40} color="#16a34a" />
            </div>
            <div className="auth-success-title">
              {tab === "login" ? "კეთილი იყოს დაბრუნება! 🎉" : "მოგესალმებით! ✨"}
            </div>
            <div className="auth-success-sub">
              {tab === "login"
                ? "წარმატებით შეხვედი სისტემაში."
                : "შენი ანგარიში შეიქმნა!"}
            </div>
            <div style={{ marginTop: 8 }}>
              <button
                style={{
                  ...btnStyle,
                  backgroundColor: "#2563eb",
                  color: "#fff"
                }}
                onClick={() => navigate("/")}
              >
                <Rocket size={18} /> მთავარი გვერდი
              </button>
            </div>
          </div>
        ) : (
          <div className="auth-form">

            {/* Error */}
            {error && (
              <div className="auth-error">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            {/* Role selector — signup only */}
            {tab === "signup" && (
              <div className="auth-field">
                <span className="auth-label">ვინ ხარ?</span>
                <div className="auth-role-row">
                  <button
                    className={`auth-role-btn ${role === "student" ? "auth-role-btn-active" : ""}`}
                    onClick={() => setRole("student")}
                    type="button"
                  >
                    <span className="auth-role-emoji">🎒</span>
                    მოსწავლე
                  </button>
                  <button
                    className={`auth-role-btn ${role === "parent" ? "auth-role-btn-active" : ""}`}
                    onClick={() => setRole("parent")}
                    type="button"
                  >
                    <span className="auth-role-emoji">👨‍👩‍👧</span>
                    მშობელი
                  </button>
                </div>
              </div>
            )}

            {/* Name — signup only */}
            {tab === "signup" && (
              <div className="auth-field">
                <label className="auth-label">სახელი</label>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon"><User size={16} /></span>
                  <input
                    className="auth-input"
                    name="name"
                    placeholder="შენი სახელი"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="auth-field">
              <label className="auth-label">ელ-ფოსტა</label>
              <div className="auth-input-wrap">
                <span className="auth-input-icon"><Mail size={16} /></span>
                <input
                  className="auth-input"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="auth-field">
              <label className="auth-label">პაროლი</label>
              <div className="auth-input-wrap">
                <span className="auth-input-icon"><Lock size={16} /></span>
                <input
                  className="auth-input"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete={tab === "login" ? "current-password" : "new-password"}
                />
                <button
                  className="auth-input-toggle"
                  onClick={() => setShowPassword(v => !v)}
                  type="button"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Forgot password — login only */}
            {tab === "login" && (
              <div className="auth-forgot">
                <button className="auth-forgot-btn" type="button">
                  პაროლი დაგავიწყდა?
                </button>
              </div>
            )}

            {/* Confirm password — signup only */}
            {tab === "signup" && (
              <div className="auth-field">
                <label className="auth-label">პაროლის დადასტურება</label>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon"><Lock size={16} /></span>
                  <input
                    className="auth-input"
                    name="confirm"
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.confirm}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                  <button
                    className="auth-input-toggle"
                    onClick={() => setShowConfirm(v => !v)}
                    type="button"
                    tabIndex={-1}
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            )}

            {/* Submit */}
            <div className="auth-submit">
              <button
                style={{
                  ...btnStyle,
                  backgroundColor: "#2563eb",
                  color: "#fff"
                }}
                onClick={handleSubmit}
              >
                {tab === "login" ? "შესვლა →" : "ანგარიშის შექმნა →"}
              </button>
            </div>

            <div className="auth-divider">
              <div className="auth-divider-line" />
              <span className="auth-divider-text">ან</span>
              <div className="auth-divider-line" />
            </div>

            {/* Google */}
            <button
              style={{
                ...btnStyle,
                backgroundColor: "#fff",
                color: "#1e293b",
                border: "2px solid #e2e8f0"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Google-ით შესვლა
            </button>

          </div>
        )}

        {/* Footer */}
        {!success && (
          <p className="auth-footer-note">
            {tab === "login"
              ? <>ანგარიში არ გაქვს? <button onClick={() => switchTab("signup")} style={{ background: "none", border: "none", color: "#3b82f6", fontWeight: 800, fontSize: 12, cursor: "pointer", padding: 0 }}>დარეგისტრირდი</button></>
              : <>უკვე გაქვს ანგარიში? <button onClick={() => switchTab("login")} style={{ background: "none", border: "none", color: "#3b82f6", fontWeight: 800, fontSize: 12, cursor: "pointer", padding: 0 }}>შედი</button></>
            }
          </p>
        )}

      </div>
    </div>
  );
}

export default AuthPage;
