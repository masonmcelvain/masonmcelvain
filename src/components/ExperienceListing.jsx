/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export default function ExperienceListing(props) {
  const { link, title, description, timePeriod } = props;

  const experienceListingStyle = css` margin: 0 0 40px; `;

  const timePeriodStyle = css` float: right; `;

  return (
    <div css={experienceListingStyle}>
      <h3><a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >{title}</a></h3>
      <p>{description}
        <span css={timePeriodStyle}>{timePeriod}</span>
      </p>
    </div>
  )
}