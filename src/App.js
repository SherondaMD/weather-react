import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
        <script
          src="https://kit.fontawesome.com/042f17eb03.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="src/style.css" />
        <title>Weather App</title>
      </head>
      <body></body>
    </html>
  );
}
