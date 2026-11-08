import React from "react";
import { FiArrowUpRight, FiCode, FiLayers } from "react-icons/fi";
import { asset, profile } from "../data/profile";
export function TollanCard() {
  return (
    <article className="project-card tollan-card" id="project-tollan" aria-labelledby="tollan-title">
      <div className="project-art">
          <img
            src={asset("/Icons/TollanSurvivorsSeason-1.png")}
            alt="Tollan Survivors artwork"
            loading="lazy"
            width="1000"
            height="600"
          />
          <span className="art-tag">TOLLAN UNIVERSE / 2025 — PRESENT</span>
      </div>
      <div className="project-content">
        <h3 id="tollan-title">Tollan Survivors</h3>
          <p>
            Implemented player skins and attacks including Windveil, Chain Lightning,
            Arcane Bolt, and Fire Breadth, enemy AI with distinct boss attacks, and
            the full Boss Mode flow from early encounters to the boss arena.
          </p>
          <p className="eyebrow">UNITY · WEB3 · CLIENT & SERVER</p>


          <ul className="detail-list">
            <li>Personally implemented Addressables for startup asset loading and smaller builds</li>
            <li>Built a pre-build balance check to exclude unused items and prefabs</li>
            <li>Developed Next.js hub features and integrated hub APIs in the Unity client</li>
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
  );
}

export default function FeaturedGame() {
  return (
    <div className="additional-projects">
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


      <div className="case-grid">
        <article className="case-card" id="case-saudi-plus">
          <span className="case-icon">
            <FiCode />
          </span>
          <p className="eyebrow">BACKEND CASE STUDY</p>
          <h3>Saudi Plus</h3>
          <p>
          A live product with an ASP.NET Core 8 backend I built from scratch and host on AWS EC2. It supports business offers, redemptions,
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
            Review the backend sample <FiArrowUpRight />
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

    </div>
  );
}
