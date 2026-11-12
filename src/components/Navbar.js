import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="scrap-header">
    <a className="scrap-wordmark" href="#home" aria-label="Gameplay portfolio home">Game log<span> / Saad</span></a>
    <button className="scrap-menu" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="scrap-navigation" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
    <nav id="scrap-navigation" className={open ? "scrap-nav is-open" : "scrap-nav"} aria-label="Main navigation" onKeyDown={e => { if(e.key === "Escape") setOpen(false); }}>
      <a href="#home" className="nav-paper" onClick={() => setOpen(false)}>Home</a>
      <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
      <a href="#about" onClick={() => setOpen(false)}>About</a>
      <a href={profile.cv} target="_blank" rel="noreferrer">Resume</a>
      <a href="#contact" className="nav-contact" onClick={() => setOpen(false)}>Contact</a>
    </nav>
  </header>;
}
