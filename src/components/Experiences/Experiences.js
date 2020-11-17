import React from 'react';
import './Experiences.scss';
import ExperienceListing from '../ExperienceListing/ExperienceListing';

export default function Experiences({ themeColor }) {
  let categoryTheme = { borderColor: `var(--${themeColor}Shadow)` };

  return (
    <div className="Experiences">
      <h2 className="category" style={categoryTheme}>Work & Leadership</h2>
      <ExperienceListing
        link="https://www.calpolycsai.com/"
        title="Web Developer, Cal Poly CSAI"
        description="Computer Science & Artificial Intelligence Club"
        timePeriod="Apr 2020 - present"
      />
      <ExperienceListing
        link="https://www.tedxsanluisobispo.com/"
        title="TEDxSanLuisObispo Admin & MC"
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
    </div>
  );
}