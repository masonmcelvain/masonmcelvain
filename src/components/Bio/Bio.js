import React, {useContext} from "react"
import "./Bio.scss"
import {ThemeContext} from "../ThemeContext";

export default function Bio() {
  let {theme, toggleTheme} = useContext(ThemeContext);
  let iconName = (theme === "dark" ? "sunny" : "moon");

  return (
    <div className="Bio">
      <div className="name-container">
        <h1>Mason McElvain</h1>
        <button className={`icon-container ${theme}-theme`} onClick={toggleTheme}>
          <ion-icon name={iconName}></ion-icon>
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
