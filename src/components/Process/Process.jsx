import { useState, useEffect } from "react";

import styles from "./process.module.css";
import plusIconPurple from "../../assets/images/svg/plus-icon.svg";
import plusIconDark from "../../assets/images/svg/plus-icon-dark.svg";
import plusIconWhite from "../../assets/images/svg/plus-icon-white.svg";

export default function Process({mode}) {
  const [theme, setTheme] = useState();
  const [plusIcon, setPlusIcon] = useState();

  useEffect(() => {
    const plusIcons = {
      dark: plusIconDark,
      purple: plusIconPurple,
      white: plusIconWhite,
    };
    setPlusIcon(plusIcons[mode]);
    setTheme(mode);
  }, [mode]);

  function applyThemeClass(theme = "purple", styles) {
    return theme === "purple"
      ? styles.purple
      : theme === "dark"
      ? styles.dark
      : styles.white;
  }

  return (
    <>
      <section id="process" className="mt-5 pt-5">
        <div className="container">
          <h2 className={`${styles.title} ${applyThemeClass(theme, styles)}`}>
            Process{" "}
            <i>
              <img src={plusIcon} alt="" />
            </i>
          </h2>
          <div
            className={`${applyThemeClass(theme, styles)}           
              ${styles["processes"]}  row pt-5 mt-5`}
          >
            <div className="col-lg-6">
              <div className={`${styles.process}`}>
                <h3 data-process="01">
                  <span>Make it</span>
                </h3>
                <p>
                  I sketch wireframes and make prototypes. Talking through
                  tactile designs existing in the browser is worth its weight.
                  Design tools only carry you so far; the rest should be
                  realized with a link my team can rally around.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.process}`}>
                <h3 data-process="02">
                  <span>Accessible FTW</span>
                </h3>
                <p>
                  I aim to make everything I design accessible to all for one
                  main reason - it's the right thing to do. Accessible products
                  benefit the many, not the few.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.process}`}>
                <h3 data-process="03">
                  <span>Collaborate</span>
                </h3>
                <p>
                  Good design is not created in a vacuum but rather in a shared
                  space. It must be facilitated and iterated upon as a team. I
                  aim to include stakeholders in my design process and create a
                  collaborative environment that welcomes and encourages
                  feedback.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.process}`}>
                <h3 data-process="04">
                  <span>Keep Expirementing</span>
                </h3>
                <p>
                  Everything I create is subject to change and experimentation.
                  Not everything will work, but it's worth trying - and learning
                  from what doesn't.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
