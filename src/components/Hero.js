import React from "react";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { asset, profile } from "../data/profile";
import GameplayReel from "./GameplayReel";

export default function Hero() {
  return (
    <section id="home" className="editorial-home shell">
      <div className="editorial-intro">
        <div className="editorial-lead">
          <p className="editorial-role">Senior Gameplay Engineer · Unity / C#</p>
          <h1>Muhammad<br />Saad Alam</h1>
          <p className="editorial-statement">I build the systems behind play.</p>
          <p className="editorial-deck">Gameplay, combat, bosses, and live features for games people play. My work spans Unity clients, server integrations, and the tools that help teams ship.</p>
          <div className="editorial-lead-actions">
            <a href="#featured">See gameplay <FiArrowDown aria-hidden="true" /></a>
            <a href={profile.cv} target="_blank" rel="noreferrer">View résumé <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <aside className="editorial-id" aria-label="Profile and contact details">
          <div className="editorial-id-top">
            <img src={asset("/saad-alam.webp")} alt="Portrait of Muhammad Saad Alam" width="900" height="900" fetchpriority="high" />
            <div><strong>Senior Gameplay<br />Engineer</strong><span>Unity · C# · Live games</span></div>
          </div>
          <dl>
            <div><dt>Shipped games</dt><dd><b>5+</b> across mobile and browser</dd></div>
            <div><dt>Game reach</dt><dd>El Patrón · <b>1M+</b> downloads</dd></div>
            <div><dt>Development lead</dt><dd>Narcos: Idle Empire of Crime</dd></div>
            <div><dt>Gameplay</dt><dd>Tollan combat and boss flow</dd></div>
            <div><dt>Live features</dt><dd>Events without new builds</dd></div>
            <div><dt>Building games</dt><dd>Since <b>2017</b></dd></div>
          </dl>
          <div className="editorial-id-actions">
            <a href={`mailto:${profile.email}`}>Email me</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </aside>
      </div>
      <GameplayReel />
    </section>
  );
}
