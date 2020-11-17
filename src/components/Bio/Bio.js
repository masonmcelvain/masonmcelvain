import React from "react"
import "./Bio.scss"
import { Sun, Moon } from 'react-feather';

export default function Bio({ theme, toggleTheme }) {
  let featherIcon = (
    theme === "dark" ?
    <Sun fill={`var(--${theme}Text)`} />
    :
    <Moon fill={`var(--${theme}Text)`} />
  );
  let iconTheme = { color: `var(--${theme}Text)` };

  return (
    <div className="Bio">
      <div className="name-container">
        <h1>Mason McElvain</h1>
        <button className={`icon-container ${theme}`} style={iconTheme} onClick={toggleTheme}>
          { featherIcon }
        </button>
      </div>
      <p>Aspiring software engineer, avid surfer and swimmer, and nature lover. Studying computer science at <a
              href="https://www.calpoly.edu/"
              target="_blank"
              rel="noopener noreferrer"
              >
        Cal Poly,
      </a> class of 2022. My goals in life are to enjoy the present, put people first, dare to be vulnerable, and make the world a little better.
      </p>
    </div>
  )
}
