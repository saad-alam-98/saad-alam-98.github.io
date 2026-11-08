import React, { useEffect, useRef, useState } from "react";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiExternalLink } from "react-icons/fi";
import { asset } from "../data/profile";
import PaperClip from "./PaperClip";

const games = [
  { tab: "Tollan Survivors", title: "Tollan Survivors", image: "/Icons/TollanSurvivorsSeason-1.png", video: "XgiZ02kY9mI", credit: "Footage: Alpha Web 3", contribution: "Player skins and attacks · Enemy AI and boss attacks · Boss Mode encounter flow" },
  { tab: "Narcos", title: "Narcos: Idle Empire of Crime", image: "/Icons/NarcosEmpire.png", video: "2c-3CAZAKJw", contribution: "Led development · Weekly live events · Battle Mode and puzzle mini-games" },
  { tab: "El Patrón", title: "El Patrón: Idle Cartel", image: "/Icons/NarcosCartel.png", video: "yT1Gq4di0hc", contribution: "Main gameplay loop · Daily rewards · Boosts · Remote event configuration" },
  { tab: "High Tide", title: "High Tide", image: "/Icons/HighTide.png", video: "TZhoqyvTx_c", contribution: "Development on a released commercial Unity game" },
];
let apiPromise;
function youtubeAPI() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) apiPromise = new Promise(resolve => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { previous?.(); resolve(window.YT); };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });
  return apiPromise;
}
function Preview({ game, active, visible, mobile, started, register, onState, onReady, onError }) {
  const host = useRef(null);
  const player = useRef(null);
  const current = useRef({ active, visible, mobile, started });
  current.current = { active, visible, mobile, started };
  useEffect(() => {
    if (!started) return;
    let cancelled = false;
    youtubeAPI().then(YT => {
      if (cancelled || !host.current) return;
      const container = document.createElement("div");
      host.current.appendChild(container);
      player.current = new YT.Player(container, {
        videoId: game.video,
        playerVars: { playsinline: 1, controls: 1, rel: 0, origin: window.location.origin, ...(game.video === "XgiZ02kY9mI" ? { end: 150 } : {}) },
        events: {
          onReady: event => {
            if(cancelled) return;
            event.target.getIframe().title = game.title + " gameplay";
            register(event.target);
            const c = current.current;
            if (!c.mobile) event.target.mute();
            onReady(!c.mobile);
            if (c.active && c.visible) event.target.playVideo();
          },
          onStateChange: event => { if(!cancelled) onState(event.data, event.target.isMuted()); },
          onError: () => { if(!cancelled) onError(); }
        }
      });
    });
    return () => { cancelled = true; player.current?.destroy(); player.current = null; register(null); };
    // The player stays mounted across game selections to preserve playback position.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, game.video]);
  useEffect(() => {
    const p = player.current;
    if(!p?.playVideo) return;
    if(active && visible && started) p.playVideo();
    else p.pauseVideo();
  }, [active, visible, started]);
  return <div ref={host} className="scrap-player-host" />;
}
export default function GameChannel() {
  const [selected, setSelected] = useState(0);
  const [mobile, setMobile] = useState(() => window.matchMedia("(max-width: 700px)").matches);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState({});
  const [ready, setReady] = useState({});
  const [errors, setErrors] = useState({});
  const [states, setStates] = useState({});
  const [muted, setMuted] = useState(true);
  const [rotation, setRotation] = useState(true);
  const [hovered, setHovered] = useState(false);
  const stage = useRef(null);
  const players = useRef({});
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 700px)");
    const change = () => setMobile(mq.matches);
    mq.addEventListener("change", change);
    return () => mq.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .25 });
    observer.observe(stage.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!mobile && visible) setStarted(s => s[selected] ? s : { ...s, [selected]: true });
  }, [mobile, visible, selected]);
  useEffect(() => {
    const pause = () => { if(document.hidden) Object.values(players.current).forEach(p => p?.pauseVideo?.()); };
    document.addEventListener("visibilitychange", pause);
    return () => document.removeEventListener("visibilitychange", pause);
  }, []);
  useEffect(() => {
    if(mobile || !visible || !rotation || hovered) return;
    const timer = window.setTimeout(() => setSelected(s => (s + 1) % games.length), 30000);
    return () => window.clearTimeout(timer);
  }, [mobile, visible, rotation, hovered, selected]);
  function choose(index) { setSelected(index); setMuted(players.current[index]?.isMuted?.() ?? true); }
  function play() {
    setRotation(false);
    if(!started[selected]) setStarted(s => ({ ...s, [selected]: true }));
    else if(states[selected] === 1) players.current[selected]?.pauseVideo();
    else players.current[selected]?.playVideo();
  }
  function sound() {
    const p = players.current[selected];
    if(!p) return;
    if(p.isMuted()) { p.unMute(); setMuted(false); } else { p.mute(); setMuted(true); }
    setRotation(false);
  }
  return <section ref={stage} className="scrap-game-sheet" id="featured" aria-label="Featured gameplay" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <PaperClip />
    <div className="scrap-tabs" role="tablist" aria-label="Choose a game">
      {games.map((g, i) => <button key={g.video} id={"game-tab-" + i} role="tab" aria-selected={selected === i} aria-controls={"game-panel-" + i} tabIndex={selected === i ? 0 : -1} onClick={() => choose(i)} onKeyDown={e => { if(["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) { e.preventDefault(); const next = e.key === "Home" ? 0 : e.key === "End" ? 3 : (i + (e.key === "ArrowRight" ? 1 : 3)) % 4; choose(next); document.getElementById("game-tab-" + next).focus(); } }}>{g.tab}</button>)}
    </div>
    <div className="scrap-screen">
      {games.map((g, i) => <div key={g.video} id={"game-panel-" + i} role="tabpanel" aria-labelledby={"game-tab-" + i} className="scrap-video" hidden={selected !== i}>
        {started[i] && <Preview game={g} active={selected === i} visible={visible} mobile={mobile} started={started[i]} register={p => { players.current[i] = p; }} onReady={isMuted => { setReady(r => ({...r, [i]: true})); if(i === selectedRef.current) setMuted(isMuted); }} onState={(state, isMuted) => { setStates(s => ({...s, [i]: state})); if(i === selectedRef.current) setMuted(isMuted); }} onError={() => setErrors(s => ({...s, [i]: true}))} />}
        {(!started[i] || !ready[i] || errors[i]) && <div className="scrap-poster"><img src={asset(g.image)} alt={g.title + " artwork"} />{errors[i] ? <a href={"https://www.youtube.com/watch?v=" + g.video} target="_blank" rel="noreferrer">Watch on YouTube <FiExternalLink /></a> : <button onClick={play}><FiPlay />{started[i] ? "Load / play preview" : "Play preview"}</button>}</div>}
      </div>)}
    </div>
    <div className="scrap-player-bar">
      <button onClick={play} aria-label={states[selected] === 1 ? "Pause preview" : "Play preview"}>{states[selected] === 1 ? <FiPause /> : <FiPlay />}</button>
      <span>{games[selected].title}</span>
      <button onClick={sound} disabled={!ready[selected]} aria-label={muted ? "Enable sound" : "Mute sound"}>{muted ? <FiVolumeX /> : <FiVolume2 />}</button>
    </div>
    <div className="scrap-contribution"><h2>My contribution</h2><p>{games[selected].contribution}</p></div>
    <div className="scrap-video-notes"><a href={"https://www.youtube.com/watch?v=" + games[selected].video} target="_blank" rel="noreferrer">{games[selected].credit || "Watch on YouTube"} <FiExternalLink /></a>{!mobile && <button aria-pressed={rotation} onClick={() => setRotation(!rotation)}>{rotation ? "Auto-switch: 30 sec" : "Auto-switch paused"}</button>}</div>
  </section>;
}

