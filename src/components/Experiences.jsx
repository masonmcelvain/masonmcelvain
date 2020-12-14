/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import ExperienceListing from './ExperienceListing';

export default function Experiences({ themeColor }) {

  const categoryTitleStyle = (theme) => css`
    ${theme.category}
    border-color: ${themeColor === "dark" ? theme.color.darkShadow : theme.color.lightShadow};
  `;

  return (
    <div className="Experiences">
      <h2 css={categoryTitleStyle}>Work & Leadership</h2>
      <ExperienceListing
        link="https://www.ifixit.com/User/3406834/Mason+McElvain"
        title="Student Developer, iFixit"
        description="Focusing on full stack web development"
        timePeriod="Nov 2020 - present"
      />
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