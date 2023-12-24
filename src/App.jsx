import { useState } from "react";
import "./App.css";

import { changeThemeToDark, darkMode } from "./components/RTK/slice";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Skillset from "./components/Skillset";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Careers from "./components/Careers";
import About from "./components/About";
import WhatNext from "./components/WhatIsNext/WhatIsNext";

function App() {
  const [count, setCount] = useState(0);
  const mode = useSelector((state) => state.changeTheme.darkMode);
  console.log(mode);

  const dispatch = useDispatch();
  return (
    <>
      <section
        style={{
          background: mode ? "white" : "",
          // color: mode ? "black" : "",
        }}
        className="all-template"
      >
        <Header />
        <Landing />
        <Skillset />
        <Process />
        <Projects />
        <Careers />
        <About />
        <WhatNext />
      </section>
      {/* <button
        className="change-theme"
        onClick={() => dispatch(changeThemeToDark())}
      >
        <h1>dark mode</h1>
      </button> */}
    </>
  );
}

export default App;
