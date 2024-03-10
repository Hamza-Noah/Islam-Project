import React from "react";
import logoPruple from "../../assets/images/svg/logo-purple.svg";
import logoBlack from "../../assets/images/svg/logo-black.svg";
import logoWhite from "../../assets/images/svg/logo-white.svg";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export default function Header(props) {
  const [logo, setLogo] = useState();
  const [theme, setTheme] = useState();

  function applyThemeClass(theme, styles) {
    return theme === "purple"
      ? styles.purple
      : theme === "dark"
      ? styles.dark
      : styles.white;
  }

  useEffect(() => {
    const logos = {
      dark: logoBlack,
      white: logoWhite,
      purple: logoPruple,
    };
    setLogo(logos[props.mode]);
    setTheme(props.mode);
  }, [props.mode]);


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
        className={`${theme == "purple" && styles["overlay-on-scroll"]}`}
      ></div>
    </section>
  );
}
