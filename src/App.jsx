import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skillset from "./components/Skillset";

import { changeThemeToDark, darkMode } from "./components/RTK/slice";
import { useDispatch, useSelector } from "react-redux";

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
      </section>
      <button
        className="change-theme"
        onClick={() => dispatch(changeThemeToDark())}
      >
        <h1>dark mode</h1>
      </button>
    </>
  );
}

export default App;
