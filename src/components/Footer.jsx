/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export default function Footer({ themeColor }) {

  const footerStyle = (theme) => css`
    padding: 48px 0;
    margin: 64px 0 0;
    border-top: 1px solid ${themeColor === "dark" ? theme.color.darkShadow : theme.color.lightShadow};
  `;

  const listOfLinksStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  `;

  return (
    <div css={footerStyle}>
      <ul css={listOfLinksStyle}>
        <li><a
          href="https://github.com/masonmcelvain/masonmcelvain"
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
}