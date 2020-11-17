/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'react-feather';

export default function Dropdown({ name, image, themeColor }) {
  let [showGif, setShowGif] = useState(false);

  const dropDownLineStyle = css`display: flex; align-items: center;`;

  const chevronButtonStyle = (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-right: 10px;
    padding: 0;
    background-color: transparent;
    border: none;
    border-radius: 6px;
    opacity: 0.7;
    transition: background-color 300ms, opacity 300ms;
    color: ${themeColor === "dark" ? theme.color.darkText : theme.color.lightText};
    cursor: pointer;

    @media(hover: hover) and (pointer: fine) {
      :hover {
        background-color: ${themeColor === "dark" ? theme.color.darkShadow2 : theme.color.lightShadow2};
        opacity: 1;
      }
    }

    :active {
      transform: scale(0.98);
      transition: none;
    }

    :focus {
      outline: none;
    }
  `;

  const gifContainerStyle = css`
    width: 100%;
    text-align: center;
  `;

  const gifStyle = css`
    margin: 10px 0 0;
    width: 80%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 1px 4px 0 rgba(14,30,37,.12);
  `;

  const chevronStyle = css`
    color: inherit;
    cursor: pointer;
  `;

  let toggleChevron = () => {
    setShowGif(prevState => !prevState);
  }

  let icon = showGif ?
            <ChevronDown
              css={chevronStyle}
              size={20}
            /> :
            <ChevronRight
              css={chevronStyle}
              size={20}
            />;

  return (
    <div className="Dropdown">
      <div css={dropDownLineStyle}>
        <button css={chevronButtonStyle} onClick={toggleChevron} >
          {icon}
        </button>
        <p>{name}</p>
      </div>
      {showGif ?
        <div css={gifContainerStyle}>
          <img src={image} css={gifStyle} alt="dropdown gif"/>
        </div>
        : null
      }
    </div>
  );
}