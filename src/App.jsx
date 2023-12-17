import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="all-template">
        <div className="container">
          <Header></Header>
        </div>
      </section>
    </>
  );
}

export default App;
