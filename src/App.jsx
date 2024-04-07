import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skillset from "./components/Skillset";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Careers from "./components/Careers";
import About from "./components/About";
import WhatNext from "./components/WhatIsNext/WhatIsNext";
import ThemeChanger from "./components/ThemeChanger";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("white");

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  function applyThemeClass(theme) {
    return theme === "purple" ? "purple" : theme === "dark" ? "dark" : "white";
  }

  return (
    <div className={`template ${applyThemeClass(theme)}`}>
      <Header mode={theme} />
      <Landing mode={theme} />
      <Skillset mode={theme} />
      <Process mode={theme} />
      <Projects mode={theme} />
      <Careers mode={theme} />
      <About mode={theme} />
      <WhatNext mode={theme} />
      <ThemeChanger mode={theme} onThemeChange={handleThemeChange} />
    </div>
  );
}

export default App;
