import { useEffect, useState } from "react";

const TARGET = new Date(2026, 10, 25).getTime(); // 25 Nov 2026

function calculate() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    done: diff === 0,
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor((diff / 3600000) % 24),
    Minutes: Math.floor((diff / 60000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [t, setT] = useState(calculate);
  useEffect(() => {
    const id = setInterval(() => setT(calculate()), 1000);
    return () => clearInterval(id);
  }, []);

  if (t.done) return <p className="wedding-day">Today is the big day! 🎉</p>;

  return (
    <div className="countdown">
      {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
        <div key={label}>
          <b>{String(t[label]).padStart(2, "0")}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
