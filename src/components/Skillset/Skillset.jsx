import styles from "./skilleset.module.css";
import { useState, useEffect } from "react";
import applyThemeClass from "../../Services/applyThemeClass.js";
import LinkTo from "../LinkTo/LinkTo.jsx";

export default function Skillset({ mode }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(mode);
  }, [mode]);

  return (
    <>
      <section id="skillset" className={`${styles.skillset}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <hgroup>
                <p
                  className={`${styles["special-color"]}  ${applyThemeClass(
                    theme,
                    styles
                  )} fw-bolder text-uppercase`}
                >
                  my skillset
                </p>
                <h2
                  className={`${styles["title-color"]}  ${
                    theme == "white" ? styles.white : ""
                  } fw-bolder`}
                >
                  <span className="d-block">Graphic Design,</span>
                  <span className="d-block">Interface Design &</span>
                  <span className="d-block">User Experince</span>
                </h2>
              </hgroup>
              <LinkTo linkTo="#process" text="my process"  mode={mode}/>
            </div>
            <div className="col-lg-6">
              <div
                className={`${styles.info} ${applyThemeClass(theme, styles)}`}
              >
                <p className="pe-lg-5 text-center text-lg-start">
                  I specialize in building complex web applications, leading
                  front-end teams, digital product design and developing visual
                  design systems. I enjoy creating effortless user experience
                  and designing delightful digital products. The entire process
                  of going from a concept to release and gathering user’s
                  feedback on either client’s or my own products is what makes
                  me wake up everyday. I worked with numerous clients from all
                  around the world from early startups to well- established
                  companies. I always seek new opportunities for cooperation on
                  projects around interesting dashboards, design systems or
                  landing pages. Let’s create something awesome together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
