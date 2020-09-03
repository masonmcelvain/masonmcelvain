import React, { useState, useEffect } from 'react';
import './App.scss';

import Bio from './components/Bio/Bio';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Footer from './components/Footer/Footer';

function App() {
  let [theme, setTheme] = useState("dark");
  let appTheme = { backgroundColor: `var(--${theme}Backdrop)` };

  let toggleTheme = () => {
    setTheme(prev => {
      let newTheme = prev === "light" ? "dark" : "light";
      let bkgd = getComputedStyle(document.body).getPropertyValue(`--${newTheme}Backdrop`);
      document.body.style.backgroundColor = bkgd;
      return newTheme;
    });
  }

  useEffect(() => {
    let bkgd = getComputedStyle(document.body).getPropertyValue(`--${theme}Backdrop`);
    document.body.style.backgroundColor = bkgd;
    return () => {document.body.style.backgroundColor = null};
  });

  return (
    <div className="App" style={appTheme}>
      <div className={`content ${theme}-theme`}>
        <Bio theme={theme} toggleTheme={toggleTheme} />
        <Projects theme={theme} />
        <Experiences theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  )
}

export default App

