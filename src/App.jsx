/** @jsx jsx */
import { jsx, ThemeProvider, css } from '@emotion/react';
import theme from "./theme.js";
import { useState, useEffect } from 'react';

import Bio from './components/Bio';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

const STORAGE_THEME_KEY = 'grabBagUITheme';

function App() {

  // Set the initial page theme based on local storage. Defualt to dark theme.
  let [themeColor, setThemeColor] = useState(
    window.localStorage.getItem(STORAGE_THEME_KEY) ?
    window.localStorage.getItem(STORAGE_THEME_KEY) :
    "dark"
  );

  const appTheme = (theme) => css`
    background-color: ${themeColor === "dark" ? theme.color.darkBackdrop : theme.color.lightBackdrop };
  `;

  const contentStyle = (theme) => css`
    max-width: 650px;
    margin: auto;
    padding: 24px 24px 0 24px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    line-height: 1.5;
    border-radius: 8px;
    
    // themed styles below
    color: ${themeColor === "dark" ? theme.color.darkText : theme.color.lightText};
    background-color: ${themeColor === "dark" ? theme.color.darkCenter : theme.color.lightCenter};
    a {
      border-bottom: 1px solid ${themeColor === "dark" ? theme.color.darkShadow : theme.color.lightShadow};
    }
    @media(hover: hover) and (pointer: fine) {
      a:hover {
        border-bottom: 1px solid ${themeColor === "dark" ? theme.color.darkText : theme.color.lightText};
      }
    }
  `;

  let toggleThemeColor = () => {
    setThemeColor(prev => prev === "dark" ? "light" : "dark");
  }

  /**
   * Set the document body to match the theme color so that overscrolling looks 
   * natural. Save the new theme in the window's local storage.
   */
  useEffect(() => {
    document.body.style.backgroundColor = themeColor === "dark" ? theme.color.darkBackdrop : theme.color.lightBackdrop;

    // Save the new theme in the window's local storage.
    window.localStorage.setItem(STORAGE_THEME_KEY, themeColor);

    // Cleanup function to clear the background color of the page
    return () => {document.body.style.backgroundColor = null};
  }, [themeColor]);

  return (
    <ThemeProvider theme={theme}>
      <div id="app" css={appTheme}>
        <div css={contentStyle} >
          <Bio themeColor={themeColor} toggleThemeColor={toggleThemeColor} />
          <Projects themeColor={themeColor} />
          <Experiences themeColor={themeColor} />
          <Footer themeColor={themeColor} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

