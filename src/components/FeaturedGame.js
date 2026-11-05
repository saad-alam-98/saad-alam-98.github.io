import React from "react";
import { FiArrowUpRight, FiCode, FiLayers } from "react-icons/fi";
import { asset, profile } from "../data/profile";
export default function FeaturedGame() {
  return (
    <section id="featured" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>Games. And what powers them.</h2>
        </div>
        <p>
          A look at my work across gameplay, online features, and backend
          services.
        </p>
      </div>
      <article className="spotlight">
        <div className="spotlight-art">
          <img
            src={asset("/Icons/TollanSurvivorsSeason-1.png")}
            alt="Tollan Survivors artwork"
            loading="lazy"
            width="600"
            height="600"
          />
          <span className="art-tag">TOLLAN UNIVERSE / 2025 — PRESENT</span>
        </div>
        <div className="spotlight-copy">
          <p className="eyebrow">UNITY · WEB3 · CLIENT & SERVER</p>
          <h3>Tollan Survivors</h3>
          <p>
            Reusable combat and progression systems, gameplay and UI features,
            and the web applications around the game.
          </p>
          <ul className="detail-list">
            <li>Unity client and server-side feature implementation</li>
            <li>Next.js applications and API routes</li>
            <li>Debugging, performance, and build workflows</li>
          </ul>
          <div className="tags">
            <span>Unity</span>
            <span>C#</span>
            <span>Next.js</span>
            <span>TypeScript</span>
          </div>
          <a
            className="button primary"
            href={profile.tollan}
            target="_blank"
            rel="noreferrer"
          >
            Explore the Tollan play hub <FiArrowUpRight />
          </a>
        </div>
      </article>
      <div className="case-grid">
        <article className="case-card">
          <span className="case-icon">
            <FiCode />
          </span>
          <p className="eyebrow">BACKEND CASE STUDY</p>
          <h3>Saudi Plus</h3>
          <p>
            An ASP.NET Core 8 backend for business offers, redemptions,
            invoices, and wallet points. Includes Identity and JWT
            authentication, permission-based authorization, AWS integrations,
            background processing, and Arabic/English localization.
          </p>
          <div className="tags">
            <span>ASP.NET Core 8</span>
            <span>EF Core</span>
            <span>SQL Server</span>
            <span>Docker</span>
          </div>
          <a
            className="text-link"
            href={profile.caseStudy}
            target="_blank"
            rel="noreferrer"
          >
            Read the code & case study <FiArrowUpRight />
          </a>
        </article>
        <article className="case-card">
          <span className="case-icon">
            <FiLayers />
          </span>
          <p className="eyebrow">INDEPENDENT PROJECT / IN DEVELOPMENT</p>
          <h3>Small games, reusable foundations.</h3>
          <p>
            A Unity 6 collection of kids' mini games, including an
            animal-matching puzzle and maker games. Built around reusable,
            prefab-based modules with an iterative workflow using Codex and
            AI-generated art.
          </p>
          <div className="tags">
            <span>Unity 6</span>
            <span>2D gameplay</span>
            <span>Modular architecture</span>
          </div>
          <span className="development-note">
            In development · no public build yet
          </span>
        </article>
      </div>
    </section>
  );
}
