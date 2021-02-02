import React from "react";

export default function Footer() {
  return (
    <footer class="footer mt-auto py-3" style={{ textAlign: "center" }}>
      <div class="container">
        <span class="text-muted" style={{ fontSize: "0.8em" }}>
          Copyright {new Date().getFullYear()} |{" "}
          <a className="text-muted" href="https://vyash.nl" target="_blank">
            vyash.nl
          </a>
        </span>
      </div>
    </footer>
  );
}
