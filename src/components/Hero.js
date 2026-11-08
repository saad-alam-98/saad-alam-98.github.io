import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { asset } from "../data/profile";
import GameChannel from "./GameChannel";
export function PaperClip() {
  return <svg className="metal-clip" viewBox="0 0 52 130" fill="none" aria-hidden="true"><path d="M36 103V24C36 5 8 5 8 24v81c0 27 39 27 39 0V29" stroke="#171710" strokeWidth="7"/><path d="M36 103V24C36 5 8 5 8 24v81c0 27 39 27 39 0V29" stroke="#dac49f" strokeWidth="4"/><path d="M35 103V24C35 7 10 7 10 24v81c0 24 35 24 35 0V29" stroke="#fff1d3" strokeWidth="1.4"/></svg>;
}
export function ProfileIntro() {
  return <div className="scrap-hero">
    <div className="scrap-intro">
      <figure className="scrap-portrait"><PaperClip /><div className="photo-crop"><img src={asset("/saad-alam.webp")} alt="Muhammad Saad Alam" width="900" height="900" fetchpriority="high" /></div></figure>
      <div className="scrap-biography">
        <h1>Muhammad<br />Saad Alam</h1>
        <div className="ink-flourish" aria-hidden="true"><span /><i /></div>
        <p className="role-paper">Senior Gameplay<br />Engineer</p>
        <p className="scrap-description">Hi, I’m Saad — a gameplay programmer who loves building engaging gameplay systems, combat, bosses, and live features for games.</p>
        <a href="#projects" className="scrap-explore">Explore my work <FiArrowDown /></a>
      </div>
      <img className="scrap-temple" src={asset("/art/temple-ink.png")} alt="" aria-hidden="true" />
    </div>
    <GameChannel />
  </div>;
}
export default function Hero() {
  return <section id="home" className="scrap-home"><ProfileIntro /></section>;
}
