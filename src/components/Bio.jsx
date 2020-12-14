/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Sun, Moon } from 'react-feather';
import theme from '../theme';

export default function Bio({ themeColor, toggleThemeColor }) {
  const wrapperStyle = css` display: block; `;

  const nameContainerStyle = css`
    display: flex;
    align-items: center;
    padding-bottom: 24px;
  `;

  const titleStyle = css`
    margin: auto;
    margin-left: 0;
    font-size: 30px;
    font-weight: 600;
  `;

  const iconButtonStyle = (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-right: 0;
    padding: 0;
    width: 36px;
    height: 36px;
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

  let featherIcon = (
    themeColor === "dark" ?
    <Sun fill={theme.color.darkText} />
    :
    <Moon fill={theme.color.lightText} />
  );

  return (
    <div css={wrapperStyle} >
      <div css={nameContainerStyle} >
        <h1 css={titleStyle} >Mason McElvain</h1>
        <button css={iconButtonStyle} onClick={toggleThemeColor}>
          { featherIcon }
        </button>
      </div>
      <p>Student developer at <a
          href="https://www.ifixit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        iFixit
        </a>, avid surfer + swimmer, and nature lover. Studying computer science at <a
              href="https://www.calpoly.edu/"
              target="_blank"
              rel="noopener noreferrer"
              >
        Cal Poly,
      </a> class of 2022. My goals in life are to enjoy the present, be my authentic self, and make the world a little better.
      </p>
    </div>
  )
}
