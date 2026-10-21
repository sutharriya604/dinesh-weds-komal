import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "../data/gallery.js";
import SectionHeading from "./SectionHeading.jsx";

const INTERVAL = 3500; // har photo kitni der (milliseconds) dikhe

export default function Gallery() {
  const [broken, setBroken] = useState({});
  const photos = gallery.filter((p) => !broken[p.src]);
  const n = photos.length;

  // index n = pehli photo ki copy (taaki last se first pe smooth slide ho)
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const next = () => { setAnimate(true); setIndex((i) => i + 1); };
  const prev = () => {
    if (index === 0) {
      setAnimate(false); setIndex(n);
      requestAnimationFrame(() => requestAnimationFrame(() => { setAnimate(true); setIndex(n - 1); }));
    } else { setAnimate(true); setIndex(index - 1); }
  };

  useEffect(() => {
    if (paused || n < 2) return;
    const id = setInterval(() => { setAnimate(true); setIndex((i) => i + 1); }, INTERVAL);
    return () => clearInterval(id);
  }, [paused, n]);

  const onEnd = () => {
    if (index >= n) { setAnimate(false); setIndex(0); }
  };

  if (n === 0) return null;
  const active = index % n;
  const slides = n > 1 ? [...photos, photos[0]] : photos;

  return (
    <section className="section tinted" id="gallery">
      <SectionHeading
        eyebrow="Little moments, big memories"
        title="A Glimpse of"
        accent="Love"
        description="Moments from our journey together."
      />
      <div
        className="slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; setPaused(true); }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
          setPaused(false);
        }}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)`, transition: animate ? "transform .8s ease" : "none" }}
          onTransitionEnd={onEnd}
        >
          {slides.map((p, i) => (
            <figure className="slide" key={i}>
              <div className="slide-img">
                <img className="bg" src={p.src} alt="" aria-hidden="true" />
                <img
                  className="fg"
                  src={p.src}
                  alt={p.alt}
                  onError={() => setBroken((b) => ({ ...b, [p.src]: true }))}
                />
              </div>
              <figcaption className="slide-caption">{p.caption || p.alt}</figcaption>
            </figure>
          ))}
        </div>
        {n > 1 && (
          <>
            <button className="slider-btn slider-prev" aria-label="Previous photo" onClick={prev}><ChevronLeft /></button>
            <button className="slider-btn slider-next" aria-label="Next photo" onClick={next}><ChevronRight /></button>
            <div className="slider-dots">
              {photos.map((_, i) => (
                <button key={i} className={i === active ? "dot on" : "dot"} aria-label={`Photo ${i + 1}`} onClick={() => { setAnimate(true); setIndex(i); }} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}