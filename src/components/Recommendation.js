import React from "react";

export default function Recommendation() {
  return (
    <section className="section shell editorial-recommendation" aria-labelledby="recommendation-title">
      <h2 id="recommendation-title">From someone I worked with</h2>
      <figure>
        <figcaption>
          <strong><a href="https://www.linkedin.com/in/samisdd/" target="_blank" rel="noreferrer">Sami Siddiqui</a></strong>
          <span>Worked together at Big Wolf Games and Tollan Universe</span>
        </figcaption>
        <blockquote>
          <p>I had the pleasure of working closely with Saad Alam, and I can confidently say he’s one of the most talented Unity developers I’ve come across. His technical expertise in Unity, paired with his innovative approach to game development, consistently resulted in high-quality, immersive experiences for our users.</p>
          <p>Beyond his technical skills, Saad is a collaborative team player. He’s always willing to lend a hand, share knowledge, and mentor junior developers. His positive attitude and genuine passion for game development create a motivating and productive environment for everyone involved.</p>
          <p>If you’re looking for a Unity developer who combines technical skill, creativity, and teamwork, Saad Alam would be an outstanding choice. I’m excited to see the incredible projects he will bring to life in the future.</p>
        </blockquote>
      </figure>
    </section>
  );
}
