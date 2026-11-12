import React, { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import { asset } from "../data/profile";

export default function GameplayReel() {
  const videoRef = useRef(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [mobile, setMobile] = useState(() => window.matchMedia("(max-width: 700px)").matches);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");
    const update = () => setMobile(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    video.pause();
    video.load();
    if (mobile || reducedMotion) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused.current) video.play().catch(() => setPlaying(false));
      else video.pause();
    }, { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [mobile]);

  const toggle = () => {
    const video = videoRef.current;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => setPlaying(false));
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <figure id="featured" className="editorial-reel" aria-label="Gameplay reel from selected projects">
      <div className="editorial-reel-frame">
        <video ref={videoRef}
          poster={asset(mobile ? "/gameplay-reel-poster.jpg" : "/gameplay-reel-wide-poster.jpg")}
          muted loop playsInline preload="metadata"
          aria-label="Gameplay from Tollan Survivors, Narcos, El Patrón, High Tide, Crack the Block, Drift 2 Win, Wonder Ball, Filler 3D, Angry Bees, and Jump Shot Mania, with project highlights"
          onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
          <source src={asset("/gameplay-reel.mp4")} media="(max-width: 700px)" type="video/mp4" />
          <source src={asset("/gameplay-reel-wide.mp4")} media="(min-width: 701px)" type="video/mp4" />
        </video>
        <button type="button" className={`editorial-reel-control${playing ? " is-playing" : ""}`}
          onClick={toggle} aria-label={playing ? "Pause gameplay reel" : "Play gameplay reel"}>
          {playing ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
          <span>{playing ? "Pause reel" : "Play reel"}</span>
        </button>
      </div>
    </figure>
  );
}
