import { useState } from "react";
import "./App.css";

const PASSWORD = "happybdanushroom";

const photos = [
  { file: "photos/early-bd.jpg",  caption: "early BD party 🎂", tall: true },
  { file: "photos/slope-day.jpg", caption: "slope day ⛷️",     tall: false },
  { file: "photos/lock-in.jpg",   caption: "the lock in 🔒",   tall: false },
].map(p => ({ ...p, file: import.meta.env.BASE_URL + p.file }));

export default function App() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function handleUnlock() {
    if (input === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleUnlock();
  }

  if (!unlocked) return <LoginPage input={input} setInput={setInput} error={error} onUnlock={handleUnlock} onKeyDown={handleKeyDown} />;
  return <InnerPage />;
}

function LoginPage({ input, setInput, error, onUnlock, onKeyDown }) {
  return (
    <div className="login-page">
      <FlowerBackground />
      <div className="login-card">
        <div className="login-emoji">🌸</div>
        <h1>a little something<br /><em>just for you!</em></h1>
        <p className="subtitle">enter the password to check what's inside:)) ✨</p>
        <div className="flower-divider">
          <div className="divider-line" />
          <span className="divider-flower">✿</span>
          <div className="divider-line" />
        </div>
        <div className="input-wrap">
          <input
            type="password"
            placeholder="enter the secret password"
            value={input}
            onChange={e => { setInput(e.target.value); }}
            onKeyDown={onKeyDown}
            className={error ? "shake" : ""}
          />
          {error && <p className="error-msg">hmm, try again 🌷</p>}
        </div>
        <button className="btn-enter" onClick={onUnlock}>open it 🌷</button>
        <p className="hint">from your favorite roomie :)) </p>
      </div>
    </div>
  );
}

function InnerPage() {
  return (
    <div className="inner-page">
      <FlowerBackground />

      <div className="inner-header">
        <div className="tag">happy birthday 🎂</div>
        <h1>to my<br /><em>best friend</em></h1>
        <p>for my favorite roommate 🌸</p>
      </div>

      <div className="photo-grid">
        {photos.map((photo, i) => (
          <div key={i} className={`photo-card ${photo.tall ? "tall" : ""}`}>
            <img src={photo.file} alt={photo.caption} />
            <div className="caption">{photo.caption}</div>
          </div>
        ))}
      </div>

      <div className="letter-section">
        <div className="letter-card">
          <div className="quote-mark">"</div>
          <p className="letter-text">
            ✷ this is where your letter to Anusha goes — just open <code>App.jsx</code> and replace this text inside the <code>letter-text</code> paragraph with whatever you want to say. the box will grow automatically as you write more. 🌸
          </p>
          <div className="letter-sign">from your best roommate, Alice ✿</div>
        </div>
      </div>
    </div>
  );
}

function FlowerBackground() {
  return (
    <div className="flower-bg" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(60,60)">
          {[0,60,120,180,240,300].map(r => <g key={r} transform={`rotate(${r})`}><ellipse cx="0" cy="-28" rx="14" ry="22" fill="#f5c4b8" opacity="0.7"/></g>)}
          <circle cx="0" cy="0" r="10" fill="#e8957f" opacity="0.8"/>
        </g>
        <g transform="translate(130,30)">
          {[0,72,144,216,288].map(r => <g key={r} transform={`rotate(${r})`}><ellipse cx="0" cy="-16" rx="8" ry="14" fill="#fde8e0" opacity="0.8"/></g>)}
          <circle cx="0" cy="0" r="7" fill="#f0b090" opacity="0.9"/>
        </g>
        <g transform="translate(740,50)">
          {[0,60,120,180,240,300].map(r => <g key={r} transform={`rotate(${r})`}><ellipse cx="0" cy="-32" rx="16" ry="26" fill="#f9d8cc" opacity="0.7"/></g>)}
          <circle cx="0" cy="0" r="12" fill="#e8957f" opacity="0.8"/>
        </g>
        <g transform="translate(760,560)">
          {[0,60,120,180,240,300].map(r => <g key={r} transform={`rotate(${r})`}><ellipse cx="0" cy="-24" rx="12" ry="20" fill="#f5c4b8" opacity="0.6"/></g>)}
          <circle cx="0" cy="0" r="9" fill="#d4706a" opacity="0.8"/>
        </g>
        <g transform="translate(40,550)">
          {[0,72,144,216,288].map(r => <g key={r} transform={`rotate(${r})`}><ellipse cx="0" cy="-20" rx="10" ry="17" fill="#fde8e0" opacity="0.7"/></g>)}
          <circle cx="0" cy="0" r="8" fill="#e8957f" opacity="0.9"/>
        </g>
        <ellipse cx="80" cy="100" rx="6" ry="18" fill="#c8ddb0" opacity="0.5" transform="rotate(-30,80,100)"/>
        <ellipse cx="110" cy="85" rx="5" ry="14" fill="#b8d098" opacity="0.4" transform="rotate(20,110,85)"/>
        <ellipse cx="720" cy="80" rx="6" ry="18" fill="#c8ddb0" opacity="0.5" transform="rotate(30,720,80)"/>
        <ellipse cx="750" cy="100" rx="5" ry="14" fill="#b8d098" opacity="0.4" transform="rotate(-20,750,100)"/>
        <circle cx="200" cy="20" r="5" fill="#f5c4b8" opacity="0.5"/>
        <circle cx="600" cy="580" r="7" fill="#fde8e0" opacity="0.5"/>
        <circle cx="680" cy="120" r="4" fill="#f5c4b8" opacity="0.4"/>
        <circle cx="100" cy="300" r="5" fill="#fde8e0" opacity="0.4"/>
      </svg>
    </div>
  );
}
