/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export default function ProjectListing({ link, title, description, children }) {
  const projectListingStyle = css` margin: 0 0 40px; `;

  return (
    <div css={projectListingStyle}>
      <h3><a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              >{title}</a></h3>
      <p>{description}</p>
      {children}
    </div>
  )
}