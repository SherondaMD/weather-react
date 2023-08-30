import React from "react";

export default function Footer(props) {
  return (
    <div className="footer">
      <small>
        This project was coded by
        <a
          href="https://www.linkedin.com/in/dr-sheronda-mckee-dollar/"
          target="_blank"
          rel="noreferrer"
        >
          Sheronda McKee-Dollar{" "}
        </a>
        and is
        <a
          href="https://github.com/SherondaMD/weather-app-smd"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub.
        </a>
      </small>
    </div>
  );
}
