import React from 'react';
import './App.scss';

import Bio from './components/Bio/Bio';
import ProjectListing from './components/ProjectListing/ProjectListing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Bio />

        <div>
          <h2 class="category">Projects</h2>
          <ProjectListing
            link="https://nimbus.calpolycsai.com/"
            title="CSAI Nimbus Chat"
            description="A text-based interface to ask Nimbus questions about Cal Poly."
          />
          <ProjectListing
            link="https://www.csai.app/record"
            title="CSAI Recorder"
            description="A web app for club members to train Nimbus to recognize its name."
          />
          <ProjectListing
            link="https://github.com/calpoly-csai/nimbus-validator-app"
            title="CSAI Nimbus Validator"
            description="An app for club members to validate phrases that Nimbus can understand."
          />
          <ProjectListing
            link="https://github.com/masonmcelvain/leojgs"
            title="Leo JG's Website"
            description="Actively building a new website for the Leo Carrillo Junior Lifeguards."
          />
          <ProjectListing
            link="https://speed-typing-mm.netlify.app"
            title="Speed Typing Game"
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

        <Footer />
      </div>
    </div>
  )
}

export default App

