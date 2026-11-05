import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { profile } from "../data/profile";
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied.");
    } catch {
      setCopyStatus(
        "Copy unavailable. Please select the email address or use the email link.",
      );
    }
  }
  return (
    <section id="contact" className="section shell">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">05 / SAY HELLO</p>
          <h2>
            Have something
            <br />
            <span>worth building?</span>
          </h2>
          <p>
            Let’s talk about gameplay, backend systems, or a place on your
            engineering team.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <FiArrowUpRight />
          </a>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <FiMail /> Write me an email
            </a>
            <button className="button secondary" onClick={copyEmail}>
              {copyStatus === "Email copied." ? <FiCheck /> : <FiCopy />} Copy
              email
            </button>
          </div>
          <p className="copy-status" role="status">
            {copyStatus}
          </p>
        </div>
        <aside className="contact-aside">
          <p className="eyebrow">ELSEWHERE</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn <FiArrowUpRight />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub <FiArrowUpRight />
          </a>
          <a href={profile.cv} target="_blank" rel="noreferrer">
            View / download CV <FiArrowUpRight />
          </a>
          <div className="contact-location">
            Based in Karachi, Pakistan
            <br />
            <a href="tel:+923322180984">{profile.phone}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
