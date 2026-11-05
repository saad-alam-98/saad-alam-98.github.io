import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiPlay, FiX } from "react-icons/fi";
import projects from "../data/projects.json";
import { asset } from "../data/profile";
const filters = [
  ["all", "All work"],
  ["card", "Card games"],
  ["idle", "Idle games"],
  ["hypercasual", "Hyper-casual"],
];
export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const [video, setVideo] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (!video) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [video]);
  const filtered = projects.filter(
    (p) => filter === "all" || p.category === filter,
  );
  const visible = expanded ? filtered : filtered.slice(0, 6);
  return (
    <section id="projects" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / GAME PORTFOLIO</p>
          <h2>Made for play.</h2>
        </div>
        <p>
          Commercial titles and smaller games from my development work. Explore
          store listings and gameplay videos.
        </p>
      </div>
      <div className="project-toolbar">
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map(([id, label]) => (
            <button
              key={id}
              aria-pressed={filter === id}
              onClick={() => {
                setFilter(id);
                setExpanded(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="project-count" role="status">
          {filtered.length} projects
        </span>
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-art">
              <img
                src={asset(project.icon)}
                alt={`${project.title} artwork`}
                width="400"
                height="400"
                loading="lazy"
              />
              <span className="project-category">
                {filters.find(([id]) => id === project.category)[1]}
              </span>
              {project.videoLink && (
                <button
                  className="play-button"
                  onClick={() => setVideo(project)}
                  aria-label={`Watch ${project.title} gameplay`}
                >
                  <FiPlay />
                </button>
              )}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.videoLink && (
                  <button
                    className="text-link"
                    onClick={() => setVideo(project)}
                  >
                    Watch gameplay <FiPlay />
                  </button>
                )}
                {project.playStoreLink && (
                  <a
                    className="text-link"
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Play <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {filtered.length > 6 && (
        <div className="show-more">
          <button
            className="button secondary"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? "Show fewer projects"
              : `View all ${filtered.length} projects`}
          </button>
        </div>
      )}
      <dialog
        ref={dialog}
        className="video-dialog"
        aria-labelledby="video-title"
        onCancel={() => setVideo(null)}
        onClose={() => setVideo(null)}
        onClick={(e) => {
          if (e.target === dialog.current) setVideo(null);
        }}
      >
        {video && (
          <>
            <div className="dialog-heading">
              <h3 id="video-title">{video.title} — gameplay</h3>
              <button
                className="icon-button"
                autoFocus
                onClick={() => setVideo(null)}
                aria-label="Close video"
              >
                <FiX />
              </button>
            </div>
            <iframe
              src={getDriveEmbedUrl(video.videoLink)}
              title={`${video.title} gameplay video`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
            <p className="video-fallback">
              Video not loading?{" "}
              <a href={video.videoLink} target="_blank" rel="noreferrer">
                Open in Google Drive ↗
              </a>
            </p>
          </>
        )}
      </dialog>
    </section>
  );
}
function getDriveEmbedUrl(url) {
  const match = url.match(/\/file\/d\/([\w-]+)/);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
}
