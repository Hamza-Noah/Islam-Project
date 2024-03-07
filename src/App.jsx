import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Skillset from "./components/Skillset";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Careers from "./components/Careers";
import About from "./components/About";
import WhatNext from "./components/WhatIsNext/WhatIsNext";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.changeTheme.darkMode);




  return (
    <>
      <section className={`${mode === "purple" ? "purple-template" : "dark-template"}`}
      >
        <Header mode={mode}/>
        <Landing mode={mode}/>
        <Skillset mode={mode}/>
        <Process mode={mode}/>
        <Projects mode={mode}/>
        <Careers mode={mode}/>
        <About mode={mode}/>
        <WhatNext mode={mode}/>
        <ThemeChanger mode={mode}/>
      </section>
    </>
  );
}

export default App;
