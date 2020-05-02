import React from "react"

import Bio from "../components/bio"
import Category from "../components/category"

const IndexPage = () => (
    <div id="root">
      <Bio />

      <div>
        <h2 class="category">Projects</h2>
        <h3><a
            href="https://nimbus.calpolycsai.com/"
            target="_blank"
            rel="noopener noreferrer"
            >CSAI Nimbus Chat</a></h3>
        <p>A text-based interface to ask Nimbus questions about Cal Poly.</p>
        <h3><a
            href="https://www.csai.app/record"
            target="_blank"
            rel="noopener noreferrer"
            >CSAI Recorder</a></h3>
        <p>A web app for club members to train Nimbus, the AI chatbot.</p>
        <h3><a
            href="https://github.com/masonmcelvain/meme-generator-react"
            target="_blank"
            rel="noopener noreferrer"
            >Meme Generator</a></h3>
        <p>A simple react.js web app.</p>
      </div>

      <div>
        <h2 class="category">Work & Leadership</h2>
        <h3><a
            href="https://www.calpolycsai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >Web Developer, Cal Poly CSAI</a></h3>
        <p>Computer Science & Artificial Intelligence Club
          <span class="interval">Apr 2020 - present</span>
        </p>
        <h3><a
            href="https://www.tedxsanluisobispo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >TEDxSanLuisObispo Administrator</a>
        </h3>
        <p><span class="interval">Apr 2020 - present</span></p>
        <h3><a
            href="http://mcsla.org/"
            target="_blank"
            rel="noopener noreferrer"
          >Ocean Lifeguard & EMT</a></h3>
        <p>California State Parks, Los Angeles
          <span class="interval">Jun 2016 - present</span>
        </p>
        <h3><a
          href="http://marchtriathlonseries.com/"
          target="_blank"
          rel="noopener noreferrer"
          >MTS Triathlon Coordinator</a></h3>
        <p>Cal Poly Triathlon Team
          <span class="interval">Sep 2018 - Apr 2020</span>
        </p>
      </div>

      <hr />
      
      <ul>
            <li><a
              href="https://github.com/masonmcelvain/mason-mcelvain"
              target="_blank"
              rel="noopener noreferrer">
              View Source
            </a></li>
            <li><a
              href="https://github.com/masonmcelvain"
              target="_blank" rel="noopener noreferrer">
              GitHub
            </a></li>
            <li><a
              href="https://www.linkedin.com/in/masonmcelvain/"
              target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a></li>
            <li><a
              href="mailto:mmcelvai@calpoly.edu"
              target="_blank" rel="noopener noreferrer">
              Email
            </a></li>
        </ul>
    </div>   
)

export default IndexPage
