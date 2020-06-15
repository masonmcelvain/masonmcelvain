import React from 'react';
import './Footer.scss';

export default function Footer({ theme }) {
  return (
    <div className={`Footer ${theme}-theme`}>
      <ul className="links">
        <li><a
          href="https://github.com/masonmcelvain/mason-mcelvain"
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
          href="mailto:mason@masonmcelvain.dev"
          target="_blank" rel="noopener noreferrer">
          Email
        </a></li>
      </ul>
    </div>
  )
}