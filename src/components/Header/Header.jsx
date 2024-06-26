import logoPruple from "../../assets/images/svg/logo-purple.svg";
import logoBlack from "../../assets/images/svg/logo-black.svg";
import logoWhite from "../../assets/images/svg/logo-white.svg";
import styles from "./Header.module.css";
import applyThemeClass from "../../Services/applyThemeClass.js";

import { useState, useEffect } from "react";

export default function Header({ mode }) {
  const [logo, setLogo] = useState();
  const [theme, setTheme] = useState();

  useEffect(() => {
    const logos = {
      dark: logoBlack,
      white: logoWhite,
      purple: logoPruple,
    };
    setLogo(logos[mode]);
    setTheme(mode);
  }, [mode]);

  return (
    <section className={`${styles.header}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="#">
              <img className={styles.logo} src={logo} alt="" />
            </a>
          </div>
          <div className={`hire-me`}>
            <a
              href="#hire-me"
              className={`${styles["hire-me-btn"]} ${applyThemeClass(
                theme,
                styles
              )}`}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles["overlay-on-scroll"]} ${applyThemeClass(
          theme,
          styles
        )}`}
      ></div>
    </section>
  );
}
