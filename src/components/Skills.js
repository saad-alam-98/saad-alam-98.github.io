import React from "react";
import { FiCode, FiCpu, FiServer, FiUsers } from "react-icons/fi";
const groups = [
  {
    title: "Gameplay & tools",
    icon: FiCode,
    description: "Reusable systems for games that keep evolving.",
    skills: [
      "Unity 6 / 2022",
      "C#",
      "ScriptableObjects",
      "TextMeshPro",
      "Editor scripting",
      "Physics",
      "UniTask",
      "DOTween",
    ],
  },
  {
    title: "Performance & delivery",
    icon: FiCpu,
    description: "Find the bottleneck. Make the next release better.",
    skills: [
      "Unity Profiler",
      "CPU & memory profiling",
      "Addressables",
      "Asset loading",
      "Object pooling",
      "Build workflows",
      "SOLID principles",
    ],
  },
  {
    title: "Backend & web",
    icon: FiServer,
    description: "The services and integrations behind the experience.",
    skills: [
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      "REST APIs",
      "Identity / JWT",
      "Next.js",
      "TypeScript",
      "Go",
      "AWS",
      "Docker",
      "Firebase",
      "PlayFab",
    ],
  },
  {
    title: "Team & cross-platform",
    icon: FiUsers,
    description: "Thoughtful implementation, review, and collaboration.",
    skills: [
      "Code reviews",
      "Developer mentoring",
      "Flutter / Flame",
      "Git",
      "Jira",
      "Designer & artist collaboration",
      "Codex",
      "Claude Code",
    ],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / TOOLKIT</p>
          <h2>What I bring to the build.</h2>
        </div>
        <p>
          Tools and practices used across my professional work and independent
          projects.
        </p>
      </div>
      <div className="skills-grid">
        {groups.map((group) => (
          <article key={group.title} className="skill-card">
            <group.icon className="skill-icon" />
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
