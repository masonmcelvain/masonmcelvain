/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import ProjectListing from './ProjectListing';
import Dropdown from './Dropdown';

export default function Projects({ themeColor }) {
  const gifURL = 'https://media.giphy.com/media/6Zc3pEySruneZ6XY4I/giphy.gif';

  const categoryTitleStyle = (theme) => css`
    ${theme.category}
    border-color: ${themeColor === "dark" ? theme.color.darkShadow : theme.color.lightShadow};
  `;

  return (
    <div className="Projects">
      <h2 css={categoryTitleStyle}>
        Projects
      </h2>
      <ProjectListing
        link="https://github.com/calpoly-csai/nimbus-validator-app"
        title="CSAI Phrase Validator"
        description="A web app for club members to validate phrases that Nimbus, the club's AI Chatbot, can understand."
      >
        <Dropdown
          name="Demo"
          image={gifURL}
          themeColor={themeColor}
        />
      </ProjectListing>
      <ProjectListing
        link="https://wonderful-meninsky-341976.netlify.app/"
        title="Swanton Chat Bot"
        description="Mobile friendly tool to communicate with Swanton Ranch's chatbot."
      />
      <ProjectListing
        link="https://ifixit-grab-bag-mm.netlify.app/"
        title="iFixit Grab Bag"
        description="Create a collection of devices you own to easily find repair guides."
      />
    </div>
  );
}