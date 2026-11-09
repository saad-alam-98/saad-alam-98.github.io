import React, { useEffect, useRef, useState } from "react";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiExternalLink } from "react-icons/fi";
import { asset, profile } from "../data/profile";

const games = [
  { tab: "Tollan Survivors", title: "Tollan Survivors", image: "/Icons/TollanSurvivorsSeason-1.png", drive: "1LlN87dDB0sJdtwWTcgf2_ahSyU-8Rnia", credit: "Gameplay footage", description: "An action roguelite where players survive arena combat against enemy hordes, develop their characters, and combine skills and abilities to face boss battles.", systems: ["Enemy spawning and hordes", "Boss waves and encounters", "Combat mechanics", "Character progression, skills and abilities", "Performance optimization", "Unity server integrations"], technologies: ["Unity", "C#", "Addressables", "Next.js"] },
  { tab: "Narcos", title: "Narcos: Idle Empire of Crime", image: "/Icons/NarcosEmpire.png", video: "2c-3CAZAKJw", store: "https://play.google.com/store/apps/details?id=com.bigwolf.narcos.idle.empire&hl=en", description: "A story-driven idle tycoon and business management sim with shooting, driving, battles, Save the Hippo, puzzles, time-limited events, social features, in-app purchases, ads, and VIP subscriptions.", systems: ["Development lead", "Weekly live events with remote schedules, leaderboard rewards, and milestones", "Battle Mode and puzzle mini-games", "Event-specific Addressables content", "Asset-duplication and memory optimization", "Unity Cloud Build and store releases"], technologies: ["Unity", "C#", "Addressables", "Unity Cloud Build"] },
  { tab: "El Patrón", title: "El Patrón: Idle Cartel", image: "/Icons/NarcosCartel.png", video: "yT1Gq4di0hc", store: "https://play.google.com/store/apps/details?id=com.tiltingpoint.bigwolf.narcosfactory&hl=en", description: "A story-driven idle tycoon and factory management game. Grow production, collect and upgrade characters, complete narrative episodes, and compete in limited-time events with leaderboards.", systems: ["Senior developer", "Main gameplay loop, daily rewards, and boosts", "Remote configuration for live events", "Event-specific Addressables content", "Memory optimization across asset bundles", "Android and iOS store releases", "1M+ downloads"], technologies: ["Unity", "C#", "Addressables", "Unity Cloud Build", "Remote event configuration"] },
  { tab: "High Tide", title: "High Tide: Weed Game", image: "/Icons/HighTide.png", video: "TZhoqyvTx_c", store: "https://play.google.com/store/apps/details?id=com.hazyarts.weed.hightide&pcampaignid=web_share", description: "A story-driven idle business sim set on a colorful 1980s tropical island. Help Jake grow a surf shop into an automated business empire through character collection, card upgrades, chapter progression, live events, leaderboards, surfing, and minigames.", systems: [], technologies: ["Unity", "C#"] },
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
    <div className="scrap-tabs" role="tablist" aria-label="Choose a game">
      {games.map((g, i) => <button key={g.video} id={"game-tab-" + i} role="tab" aria-selected={selected === i} aria-controls={"game-panel-" + i} tabIndex={selected === i ? 0 : -1} onClick={() => choose(i)} onKeyDown={e => { if(["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) { e.preventDefault(); const next = e.key === "Home" ? 0 : e.key === "End" ? 3 : (i + (e.key === "ArrowRight" ? 1 : 3)) % 4; choose(next); document.getElementById("game-tab-" + next).focus(); } }}>{g.tab}</button>)}
    </div>
    <div className="scrap-screen">
      {selected === 0 ? <div className="scrap-video"><iframe src={`https://drive.google.com/file/d/${games[0].drive}/preview`} title="Tollan Survivors gameplay" allow="autoplay; fullscreen" allowFullScreen /></div> : null}
      {games.map((g, i) => <div key={g.video} id={"game-panel-" + i} role="tabpanel" aria-labelledby={"game-tab-" + i} className="scrap-video" hidden={selected !== i}>
        {i > 0 && started[i] && <Preview game={g} active={selected === i} visible={visible} mobile={mobile} started={started[i]} register={p => { players.current[i] = p; }} onReady={isMuted => { setReady(r => ({...r, [i]: true})); if(i === selectedRef.current) setMuted(isMuted); }} onState={(state, isMuted) => { setStates(s => ({...s, [i]: state})); if(i === selectedRef.current) setMuted(isMuted); }} onError={() => setErrors(s => ({...s, [i]: true}))} />}
        {i > 0 && (!started[i] || !ready[i] || errors[i]) && <div className="scrap-poster"><img src={asset(g.image)} alt={g.title + " artwork"} />{errors[i] ? <a href={"https://www.youtube.com/watch?v=" + g.video} target="_blank" rel="noreferrer">Watch on YouTube <FiExternalLink /></a> : <button onClick={play}><FiPlay />{started[i] ? "Load / play preview" : "Play preview"}</button>}</div>}
      </div>)}
    </div>
    <div className="scrap-player-bar" hidden={selected === 0}>
      <button onClick={play} aria-label={states[selected] === 1 ? "Pause preview" : "Play preview"}>{states[selected] === 1 ? <FiPause /> : <FiPlay />}</button>
      <button onClick={sound} disabled={!ready[selected]} aria-label={muted ? "Enable sound" : "Mute sound"}>{muted ? <FiVolumeX /> : <FiVolume2 />}</button>
    </div>
    <div className="scrap-game-info"><h2 className="scrap-game-title">{games[selected].title}</h2><div className="scrap-game-description"><h3>About the game</h3><p>{games[selected].description}</p></div><div className="scrap-game-tech"><h3>Technologies</h3><ul>{games[selected].technologies.map(technology => <li key={technology}>{technology}</li>)}</ul></div>{games[selected].systems.length > 0 && <div className="scrap-game-systems"><h3>Gameplay systems</h3><ul>{games[selected].systems.map(system => <li key={system}>{system}</li>)}</ul></div>}</div>
    <div className="scrap-game-actions">{games[selected].store && <a href={games[selected].store} target="_blank" rel="noreferrer">Google Play ↗</a>}{selected === 0 && <a href={profile.tollan} target="_blank" rel="noreferrer">Explore the Tollan hub ↗</a>}</div>
    <div className="scrap-video-notes">{selected !== 0 && <a href={"https://www.youtube.com/watch?v=" + games[selected].video} target="_blank" rel="noreferrer">{games[selected].credit || "Watch on YouTube"} <FiExternalLink /></a>}{!mobile && <button aria-pressed={rotation} onClick={() => setRotation(!rotation)}>{rotation ? "Auto-switch: 30 sec" : "Auto-switch paused"}</button>}</div>
  </section>;
}

