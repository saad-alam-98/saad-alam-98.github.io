import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";
const links = [["Work", "home"], ["About", "about"], ["Experience", "experience"], ["Projects", "projects"], ["Contact", "contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const close = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    links.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => { window.removeEventListener("keydown", close); observer.disconnect(); };
  }, []);
  return (
    <header className="site-header">
      <div className="masthead shell">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          saad<span>.</span>alam<span className="wordmark-code"> / engineer</span>
        </a>
        <p className="masthead-name">{profile.name}</p>
        <a className="nav-cv" href={profile.cv} target="_blank" rel="noreferrer">View CV <FiArrowUpRight /></a>
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      </div>
      <nav className="nav-dock" aria-label="Main navigation">
        <div className="dock-shortcuts">
          {links.filter(([, id]) => ["home", "projects", "contact"].includes(id)).map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <div id="navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
      </nav>
    </header>
  );
}
