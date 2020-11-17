import React, { useState } from 'react';
import './Dropdown.scss';
import { ChevronRight, ChevronDown } from 'react-feather';

export default function Dropdown({ link, name, image, theme }) {
  let [showGif, setShowGif] = useState(false);
  let iconTheme = { color: `var(--${theme}Text)` };

  let toggleChevron = () => {
    setShowGif(prevState => !prevState);
  }

  let icon = showGif ?
            <ChevronDown
              className="chevronIcon"
              size={20}
              onClick={toggleChevron}
            /> :
            <ChevronRight
              className="chevronIcon" 
              size={20} 
              onClick={toggleChevron}
            />;

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