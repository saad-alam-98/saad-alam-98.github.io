import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const highlights = [
  {
    figure: "1M+",
    label: "Downloads · El Patrón",
    title: "Shipped gameplay for a million-download game",
    description: "El Patrón: Idle Cartel reached 1M+ downloads on Google Play. As a senior developer, I implemented its main gameplay loop, daily rewards, boosts, and remotely configured events.",
    href: "#project-3",
    link: "See El Patrón",
  },
  {
    figure: "Development lead",
    label: "Narcos: Idle Empire of Crime",
    title: "Led a live game's development and team delivery",
    description: "I led development, managed developers, and reviewed and merged pull requests. I also built Battle Mode, puzzles, and the weekly event system, with remotely pushed schedules, milestones, and leaderboard rewards that needed no new client build.",
    href: "#project-4",
    link: "See Narcos",
  },
  {
    figure: "Full combat loop",
    label: "Tollan Survivors",
    title: "Built combat from player attacks to boss fights",
    description: "I implemented character skins and abilities, player attacks, enemy spawning, distinct enemy and boss AI, and the Boss Mode flow from hordes and mini-bosses to the boss arena. I also worked on memory optimization and Unity server integrations.",
    href: "#project-21",
    link: "See Tollan Survivors",
  },
  {
    figure: "Shipped multiplayer",
    label: "Spades · Flutter / Flame",
    title: "Built real-time play into the client",
    description: "I implemented and shipped socket multiplayer integration to players, including synchronized moves, reconnects, and match recovery in the Flutter/Flame client.",
    href: "#project-1",
    link: "See Spades",
  },
  {
    figure: "Android + iOS",
    label: "Mobile game releases",
    title: "Took live Unity games through release",
    description: "I handled store releases for Narcos and El Patrón, used Unity Cloud Build for both games, and implemented Addressables loading for event-specific content.",
    href: "#project-4",
    link: "See the Narcos games",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="section shell editorial-highlights" aria-labelledby="highlights-title">
      <h2 id="highlights-title">Highlights</h2>
      <div className="editorial-ledger">
        {highlights.map((item) => (
          <article key={item.figure}>
            <div className="editorial-ledger-figure">
              <strong>{item.figure}</strong>
              <span>{item.label}</span>
            </div>
            <div className="editorial-ledger-entry">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href}>{item.link} <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
