import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="all-template">
          <Header />
          <Landing />
      </section>
    </>
  );
}

export default App;
