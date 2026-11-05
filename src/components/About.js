import React from "react";
import { experience, profile } from "../data/profile";
export default function About() {
  return (
    <section id="about" className="section section-tinted">
      <div className="shell">
        <div className="about-grid">
          <div>
            <p className="eyebrow">02 / ABOUT ME</p>
            <h2>
              An engineer who
              <br />
              cares about the feel.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a Unity and C# engineer based in Karachi. I’ve been building
              professionally since 2017, working on commercial games, live
              updates, and the systems that connect clients to online services.
            </p>
            <p>
              At Tollan Universe, I implement features across the Unity client,
              server, and Next.js applications. Before that, I spent over five
              years at Big Wolf Games working on titles including El Patrón:
              Idle Cartel and Narcos: Idle Empire of Crime, alongside
              cross-platform Flutter/Flame development.
            </p>
            <p>
              I enjoy profiling a slow frame, making a system easier to extend,
              and helping teammates deliver good work. My backend experience
              includes ASP.NET Core, relational data modelling, authentication,
              and API integrations.
            </p>
            <div className="about-facts">
              <div>
                <span>EDUCATION</span>
                <strong>Bachelor’s in Computer Software Engineering</strong>
                <p>Karachi University · 2012–2015</p>
              </div>
              <div>
                <span>LANGUAGES</span>
                <strong>English & Urdu</strong>
                <p>Professional working / native proficiency</p>
              </div>
            </div>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
        <div id="experience" className="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE JOURNEY</p>
              <h2>Experience</h2>
            </div>
          </div>
          <div className="timeline">
            {experience.map((job, i) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-date">
                  <span className="timeline-dot" />
                  {job.dates}
                  {i === 0 && <span className="current-badge">Current</span>}
                </div>
                <div>
                  <h3>{job.company}</h3>
                  <p className="job-role">{job.role}</p>
                  <div className="job-location">
                    <span>{job.location}</span>
                    <span className="work-mode">{job.workMode}</span>
                  </div>
                  <p>{job.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
