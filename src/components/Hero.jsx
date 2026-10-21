import { useState } from "react";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import Countdown from "./Countdown.jsx";
import { heroPhoto } from "../data/gallery.js";

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);
  return (
    <section className="hero" id="home">
      {photoOk && (
        <div className="hero-bg">
          <img src={heroPhoto} alt="" onError={() => setPhotoOk(false)} />
        </div>
      )}
      <div className="hero-content">
        <span className="eyebrow"><Sparkles size={14} /> We invite you to celebrate</span>
        <p className="hero-sub">The Wedding Celebration Of</p>
        <h1>Dinesh <i>&</i> Komal</h1>
        <div className="flourish">──── ✦ ────</div>


        <p className="hero-message">Two hearts, two families, one beautiful beginning.</p>
        <div className="hero-meta">
          <span><CalendarDays /> Wednesday, 25 November 2026</span>
          <span><MapPin /> Pali, Rajasthan</span>
        </div>
        <a className="button" href="#events">Explore the celebrations ↗</a>
        <p className="count-label">COUNTING DOWN TO THE BIG DAY</p>
        <Countdown />
      </div>
    </section>
  );
}