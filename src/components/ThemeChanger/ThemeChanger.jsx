import { useState, useEffect } from "react";
import style from "./themeChanger.module.css";

import iconPurple from "../../assets/images/svg/purple-theme-icon.svg";
import purpleLine from "../../assets/images/svg/purple-line.svg";
import blueLine from "../../assets/images/svg/blue-line.svg";
import yellowLine from "../../assets/images/svg/yellow-line.svg";

export default function ThemeChanger(props) {
  // const mode = useSelector((state) => state.changeTheme.darkMode);
  const [theme, setTheme] = useState();

  function applyThemeClass(theme, styles) {
    return theme === "purple"
      ? styles.purple
      : theme === "dark"
      ? styles.dark
      : styles.white;
  }

  useEffect(() => {
    setTheme(props.mode);
  }, [props.mode]);

  return (
    <>
      <section
        className={`${style["theme-container"]} ${applyThemeClass(
          theme,
          style
        )}`}
      >
        <div className="container">
          <div className="theme-settings">
            <button className={`d-block mx-auto ${style["theme-btn-purple"]}`}>
              <i>
                <img src={iconPurple} alt="" />
              </i>
            </button>
            <div className={`${style.circadian}`}>
              <div className={`${style.hours}`}>
                {[...Array(8)].map((_, index) => (
                  <div
                    onClick={() => props.onThemeChange("purple")}
                    key={index}
                    className={`${`${style.hour} ${style["purple-hour"]}`} ${
                      index % 6 === 0 ? style.fill : ""
                    }`}
                  >
                    <img src={purpleLine} alt="" />{" "}
                  </div>
                ))}
                {[...Array(8)].map((_, index) => (
                  <div
                    onClick={() => props.onThemeChange("dark")}
                    key={index}
                    className={`${style.hour} ${
                      index % 6 === 0 ? style.fill : ""
                    }`}
                  >
                    <img src={blueLine} alt="" />
                  </div>
                ))}
                {[...Array(8)].map((_, index) => (
                  <div
                    onClick={() => props.onThemeChange("white")}
                    key={index}
                    className={`${style.hour} ${
                      index % 6 === 0 ? style.fill : ""
                    }`}
                  >
                    <img src={yellowLine} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
