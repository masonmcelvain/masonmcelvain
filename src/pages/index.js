import React from "react"

import Bio from "../components/bio"
import Category from "../components/category"

const IndexPage = () => (
    <div id="root">
      <Bio />

      <div>
        <h2 class="category">Projects</h2>
        <h3><a
            href="https://github.com/masonmcelvain/meme-generator-react"
            target="_blank"
            rel="noopener noreferrer"
            >Meme Generator</a></h3>
        <p>A simple react.js web app.</p>
        <h3>Arduino Robotic Arm</h3>
        <p>A 3D printed robotic arm with positional memory.</p>
      </div>

      <div>
        <h2 class="category">Work & Leadership</h2>
        <h3><a
            href="https://www.calpolycsai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Web Developer, Cal Poly CSAI</a></h3>
        <p>Computer Science & Artificial Intelligence Club
          <span class="interval">April 2020 - present</span>
        </p>
        <h3><a
            href="http://mcsla.org/"
            target="_blank"
            rel="noopener noreferrer"
          >Ocean Lifeguard & EMT</a></h3>
        <p>California State Parks, Los Angeles
          <span class="interval">June 2016 - present</span>
        </p>
        <h3><a
          href="http://marchtriathlonseries.com/"
          target="_blank"
          rel="noopener noreferrer"
          >MTS Triathlon Coordinator</a></h3>
        <p>Cal Poly Triathlon Team
          <span class="interval">September 2018 - April 2020</span>
        </p>
      </div>

      <div>
        <h2 class="category">Teaching & Lab Experience</h2>
        <h3><a
            href="https://atom.calpoly.edu/LA/"
            target="_blank"
            rel="noopener noreferrer"
          >Chemistry Teaching Assistant</a></h3>
        <p>Instructed an undergraduate introductory chemistry course in a lecture-lab studio.</p>
        <h3><a
            href="https://chemistry.calpoly.edu/content/faculty/fogle_emily"
            target="_blank"
            rel="noopener noreferrer"
          >Mechanistic Enzymology Lab Technician</a></h3>
        <p>Characterized a S-NAGS enzyme under the guidance of Dr. Emily Fogle and presented discoveries at <a
            href="https://cosam.calpoly.edu/frost-fund"
            target="_blank"
            rel="noopener noreferrer"
          >research conferences</a> at Cal Poly.
        </p>
        <h3><a
            href="https://cesame.calpoly.edu/content/learn-by-doing-lab"
            target="_blank"
            rel="noopener noreferrer"
          >Learn by Doing Lab Instructor</a></h3>
        <p>Led middle school students in experimental chemistry and biology.</p>
      </div>

      <div>
        <h2 class="category">Get in touch</h2>
        <ul>
          <li class="item">
            <a
              href="https://github.com/masonmcelvain"
              target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li class="item">
            <a
              href="https://www.linkedin.com/in/masonmcelvain/"
              target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li class="item">
            <a
              href="mailto:mmcelvai@calpoly.edu"
              target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li>
        </ul>
      </div>

      <hr />
      <p><a
          href="https://github.com/masonmcelvain/mason-mcelvain"
          target="_blank"
          rel="noopener noreferrer"
        >View Source</a></p>
    </div>   
)

export default IndexPage
