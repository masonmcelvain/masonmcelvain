import React, { useState } from 'react';
import './Dropdown.scss';

import {ReactComponent as ChevronRight} from '../../assets/chevron-right.svg';
import {ReactComponent as ChevronDown} from '../../assets/chevron-down.svg';

export default function Dropdown({ link, name, image, theme }) {
  let [showGif, setShowGif] = useState(false);
  let iconTheme = { color: `var(--${theme}Text)` };

  let toggleChevron = () => {
    setShowGif(prevState => !prevState);
  }

  let icon = showGif ?
             <ChevronDown className="chevronIcon" onClick={toggleChevron}/> :
             <ChevronRight className="chevronIcon"  onClick={toggleChevron}/>;

  return (
    <div className="Dropdown">
      <div className="dropdownLine">
        <button className={`chevronButton ${theme}`} style={iconTheme}>
          {icon}
        </button>
        {
          link ?
          <a href={link} target='_blank' rel='noopener noreferrer'>
            {name}
          </a> : <p>{name}</p>
        }
      </div>
      {showGif ?
        <div className="gifContainer">
          <img src={image} className="gif" alt="dropdown gif"/>
        </div>
        : null
      }
    </div>
  );
}