import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          saad<span>.</span>alam
          <span className="wordmark-code"> / engineer</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <div id="navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {[
            ["Work", "featured"],
            ["About", "about"],
            ["Experience", "experience"],
            ["Projects", "projects"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cv"
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
          >
            View CV <FiArrowUpRight />
          </a>
        </div>
      </nav>
    </header>
  );
}
