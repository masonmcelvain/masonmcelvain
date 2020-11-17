import React from 'react';
import './Footer.scss';

export default function Footer({ themeColor }) {
  let footerTheme = { borderTop: `1px solid var(--${themeColor}Shadow)` };

  return (
    <div className="Footer" style={footerTheme}>
      <ul className="links">
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