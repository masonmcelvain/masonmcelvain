import React from 'react';
import './Projects.scss';
import ProjectListing from '../ProjectListing/ProjectListing';
import Dropdown from '../Dropdown/Dropdown';

export default function Projects({ theme }) {
  let categoryTheme = { borderColor: `var(--${theme}Shadow)` };
  let nimbusValidatorGif = 'https://media.giphy.com/media/6Zc3pEySruneZ6XY4I/giphy.gif';
  let nimbusChatGif = 'https://media.giphy.com/media/Piv6R2iqQ7OwhUUaQV/giphy.gif';

  return (
    <div className="Projects">
      <h2 className="category" style={categoryTheme}>Projects</h2>
      <ProjectListing
        link="https://github.com/calpoly-csai/nimbus-validator-app"
        title="CSAI Phrase Validator"
        description="A web app for club members to validate phrases that Nimbus, the club's AI Chatbot, can understand."
      >
        <Dropdown
          name="Demo (still in development)"
          image={nimbusValidatorGif}
          theme={theme}
        />
      </ProjectListing>
      <ProjectListing
        link="https://github.com/calpoly-csai/"
        title="Other CSAI Contributions"
      >
      <div className="listItems">
        <div className="noDropdown">
          <a href='https://github.com/calpoly-csai/api' 
          target='_blank' 
          rel='noopener noreferrer'>Nimbus API</a>
        </div>
        <div className="noDropdown">
          <a href='https://www.csai.app/record' 
          target='_blank' 
          rel='noopener noreferrer'>CSAI Recorder</a>
        </div>
        <Dropdown
          link='https://nimbus.calpolycsai.com/'
          name='Nimbus Chat'
          image={nimbusChatGif}
          theme={theme}
        />
      </div>
      </ProjectListing>
      <ProjectListing
        link="https://speed-typing-mm.netlify.app"
        title="Speed Typing Game"
        description="A simple app that keeps your fingers limber."
      />
    </div>
  );
}