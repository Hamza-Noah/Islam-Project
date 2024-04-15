import { useEffect, useState } from "react";

import logoPruple from "../../assets/images/svg/logo-purple.svg";
import logoBlack from "../../assets/images/svg/logo-black.svg";
import logoWhite from "../../assets/images/svg/logo-white.svg";

import iconPurple from "../../assets/images/svg/purple-theme-icon.svg";
import iconWhite from "../../assets/images/svg/white-theme-icon.svg";
import iconDark from "../../assets/images/svg/dark-theme-icon.svg";

import purpleLine from "../../assets/images/svg/purple-line.svg";
import blueLine from "../../assets/images/svg/blue-line.svg";
import yellowLine from "../../assets/images/svg/yellow-line.svg";
import style from "./themeChanger.module.css";

export default function ThemeChanger(props) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [theme, setTheme] = useState("");
  const [themeIcon, setThemeIcon] = useState();
  const [logo, setLogo] = useState();

  function applyThemeClass(theme, style) {
    return theme === "purple"
      ? style.purple
      : theme === "dark"
      ? style.dark
      : style.white;
  }

  // Define the icons object here
  const icons = {
    dark: iconDark,
    white: iconWhite,
    purple: iconPurple,
  };

  const handleThemeChange = (themeName, index) => {
    setActiveIndex(index);
    setTheme(themeName);
    props.onThemeChange(themeName);
    setThemeIcon(icons[theme]); // Now icons is defined before using it
  };

  const renderHour = (index, imageSrc, imageAlt, themeName) => {
    const isActive = index === activeIndex && theme === themeName;
    const isPrevActive = index === activeIndex - 1 && theme === themeName;
    const isNextActive = index === activeIndex + 1 && theme === themeName;

    return (
      <div
        key={index}
        className={style.hour}
        onClick={() => handleThemeChange(themeName, index)}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`${isActive ? style.active : ""} ${
            isPrevActive || isNextActive ? style.taller : ""
          }`}
        />
        {isActive && (
          <button
            className={`d-block mx-auto  ${style.hourButton} ${style["theme-btn-purple"]} ${applyThemeClass(props.mode, style)}`}
          >
            <i>
              <img src={themeIcon} alt="" />
            </i>
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    const logos = {
      dark: logoBlack,
      white: logoWhite,
      purple: logoPruple,
    };
    setThemeIcon(icons[theme]);
    setLogo(logos[props["mode"]]);
  }, [theme]);

  useEffect(() => {
    handleThemeChange("white", 4);
  }, []);

  return (
    <section className={`${style["theme-container"]} ${style[theme]}`}>
      <div className="container">
        <div className="theme-settings">
          <div className={style.circadian}>
            <div className={style.hours}>
              {/* {[...Array(8)].map((_, index) =>
                renderHour(index, blueLine, "", "dark")
              )} */}
              {[...Array(12)].map((_, index) =>
                renderHour(index, purpleLine, "", "purple")
              )}
              {[...Array(12)].map((_, index) =>
                renderHour(index, yellowLine, "", "white")
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <p className={`${style.rights} m-0`}>Copyright &copy;2024 All rights reserved</p>
          <a href="#">
            <img height="50px" className={style.logo} src={logo} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
