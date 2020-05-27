import React from 'react';
import './App.scss';

import Bio from './components/Bio/Bio'
import ProjectListing from './components/ProjectListing/ProjectListing'

function App() {
  return (
    <div className="App">
      <div className="content">
        <Bio />

        <div>
          <h2 class="category">Projects</h2>
          <ProjectListing
            link="https://nimbus.calpolycsai.com/"
            heading="CSAI Nimbus Chat"
            description="A text-based interface to ask Nimbus questions about Cal Poly."
          />
          <ProjectListing
            link="https://www.csai.app/record"
            heading="CSAI Recorder"
            description="A web app for club members to train Nimbus to recognize its name."
          />
          <ProjectListing
            link="https://github.com/calpoly-csai/nimbus-validator-app"
            heading="CSAI Nimbus Validator"
            description="An app for club members to validate phrases that Nimbus can understand."
          />
          <ProjectListing
            link="https://speed-typing-mm.netlify.app"
            heading="Speed Typing Game"
            description="A simple app that keeps your fingers limber."
          />
        </div>

        <div>
          <h2 class="category">Work & Leadership</h2>
          <h3><a
              href="https://www.calpolycsai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >Web Developer, Cal Poly CSAI</a></h3>
          <p>Computer Science & Artificial Intelligence Club
            <span class="timePeriod">Apr 2020 - present</span>
          </p>
          <h3><a
              href="https://www.tedxsanluisobispo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >TEDxSanLuisObispo Administrator</a>
          </h3>
          <p><span class="timePeriod">Apr 2020 - present</span></p>
          <h3><a
              href="http://mcsla.org/"
              target="_blank"
              rel="noopener noreferrer"
            >Ocean Lifeguard & EMT</a></h3>
          <p>California State Parks, Los Angeles
            <span class="timePeriod">Jun 2016 - present</span>
          </p>
          <h3><a
            href="http://marchtriathlonseries.com/"
            target="_blank"
            rel="noopener noreferrer"
            >MTS Triathlon Coordinator</a></h3>
          <p>Cal Poly Triathlon Team
            <span class="timePeriod">Sep 2018 - Apr 2020</span>
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
    </div>
  )
}

export default App

