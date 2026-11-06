import React from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { profile, asset } from "../data/profile";
export function ProfileIntro() {
  return (
    <section id="profile" className="profile-intro shell">
      <div className="hero-copy">

        <p className="hero-intro">Hi, I'm Muhammad Saad Alam.</p>

        <h1>
          Good games<span className="title-stop">.</span>
          <br />{" "}
          Solid systems<span className="title-stop">.</span>
          <br />{" "}
          <span>Built with care<span className="title-stop">.</span></span>
        </h1>
        <p className="hero-description">
          Senior Software Engineer building gameplay, live features, and the
          services behind them. From Unity and C# to ASP.NET Core and Next.js, I
          turn ideas into software people can use.
        </p>
        <div className="button-row">
          <a className="button primary" href="#featured">
            Explore my work <FiArrowDown />
          </a>
          <a
            className="button secondary"
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
          >
            View / download CV <FiArrowUpRight />
          </a>
        </div>
        <p className="eyebrow">
          <span className="status-dot" /> UNITY · C# · BACKEND ENGINEERING
        </p>
        <div className="hero-meta">
          <span>
            <FiMapPin /> {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Saad Alam on GitHub"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Saad Alam on LinkedIn"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-label">
          <span className="status-dot" /> THE PERSON BEHIND THE CODE
        </div>
        <img
          className="portrait"
          src={asset("/saad-alam.webp")}
          alt="Muhammad Saad Alam"
          width="900"
          height="900"
          fetchpriority="high"
        />
        <div className="portrait-caption">
          <span>Gameplay to backend.</span>
          <span>Karachi → everywhere</span>
        </div>
        <span className="portrait-corner" aria-hidden="true">
          &lt;/&gt;
        </span>
      </div>
      <div className="hero-strip">
        <div>
          <strong>Since 2017</strong>
          <span>Building professionally</span>
        </div>
        <div>
          <strong>Unity + C#</strong>
          <span>Gameplay & performance</span>
        </div>
        <div>
          <strong>Client ↔ server</strong>
          <span>Features through delivery</span>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return <section id="home" className="hero"><ProfileIntro /></section>;
}
