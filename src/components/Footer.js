import React from "react";
export default function Footer() {
  return (
    <footer className="site-footer shell">
      <a className="wordmark" href="#home">
        saad<span>.</span>alam
      </a>
      <p>© {new Date().getFullYear()} Muhammad Saad Alam</p>
      <a className="text-link" href="#home">
        Back to top ↑
      </a>
    </footer>
  );
}
