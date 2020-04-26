import React from "react"
import bioStyles from "./bio.module.css"

export default () => (
  <div className={bioStyles.bio}>
    <h1 id="name">Mason McElvain</h1>
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