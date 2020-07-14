import React, { useState, useEffect } from 'react';
import './App.scss';

import Bio from './components/Bio/Bio';
import ProjectListing from './components/ProjectListing/ProjectListing';
import ExperienceListing from './components/ExperienceListing/ExperienceListing';
import Footer from './components/Footer/Footer';

function App() {
  let [theme, setTheme] = useState("dark");
  let appTheme = { backgroundColor: `var(--${theme}Backdrop)` };
  let categoryTheme = { borderColor: `var(--${theme}Shadow)` };

  let toggleTheme = () => {
    setTheme(prev => {
      let newTheme = prev === "light" ? "dark" : "light";
      let bkgd = getComputedStyle(document.body).getPropertyValue(`--${newTheme}Backdrop`);
      document.body.style.backgroundColor = bkgd;
      return newTheme;
    });
  }

  useEffect(() => {
    let bkgd = getComputedStyle(document.body).getPropertyValue(`--${theme}Backdrop`);
    document.body.style.backgroundColor = bkgd;
    return () => {document.body.style.backgroundColor = null};
  });

  return (
    <div className="App" style={appTheme}>
      <div className={`content ${theme}-theme`}>
        <Bio theme={theme} toggleTheme={toggleTheme} />

        <h2 className="category" style={categoryTheme}>Projects</h2>
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
          link="https://speed-typing-mm.netlify.app"
          title="Speed Typing Game"
          description="A simple app that keeps your fingers limber."
        />

        <h2 className="category" style={categoryTheme}>Work & Leadership</h2>
        <ExperienceListing
          link="https://www.calpolycsai.com/"
          title="Web Developer, Cal Poly CSAI"
          description="Computer Science & Artificial Intelligence Club"
          timePeriod="Apr 2020 - present"
        />
        <ExperienceListing
          link="https://www.tedxsanluisobispo.com/"
          title="TEDxSanLuisObispo Administrator"
          description="TEDx Conference hosted at Cal Poly"
          timePeriod="Apr 2020 - present"
        />
        <ExperienceListing
          link="http://mcsla.org/"
          title="Ocean Lifeguard & EMT"
          description="California State Parks, Los Angeles"
          timePeriod="Jun 2016 - present"
        />
        <ExperienceListing
          link="http://marchtriathlonseries.com/"
          title="MTS Triathlon Coordinator"
          description="Cal Poly Triathlon Team"
          timePeriod="Sep 2018 - Apr 2020"
        />

        <Footer theme={theme} />
      </div>
    </div>
  )
}

export default App

