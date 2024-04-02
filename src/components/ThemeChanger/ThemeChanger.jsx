import { useEffect, useState } from "react";
import style from "./themeChanger.module.css";

import iconPurple from "../../assets/images/svg/purple-theme-icon.svg";
import iconWhite from "../../assets/images/svg/white-theme-icon.svg";
import iconDark from "../../assets/images/svg/dark-theme-icon.svg";

import purpleLine from "../../assets/images/svg/purple-line.svg";
import blueLine from "../../assets/images/svg/blue-line.svg";
import yellowLine from "../../assets/images/svg/yellow-line.svg";

export default function ThemeChanger(props) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [theme, setTheme] = useState("");
  const [themeIcon, setThemeIcon] = useState();

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
            className={`d-block mx-auto  ${style.hourButton} ${style["theme-btn-purple"]}`}
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
    // Remove the const keyword from here
    setThemeIcon(icons[theme]);

    // renderHour(3, yellowLine, "", "white");
    handleThemeChange("white", 4);
  }, [theme]);

  return (
    <section className={`${style["theme-container"]} ${style[theme]}`}>
      <div className="container">
        <div className="theme-settings">
          <div className={style.circadian}>
            <div className={style.hours}>
              {[...Array(8)].map((_, index) =>
                renderHour(index, blueLine, "", "dark")
              )}
              {[...Array(8)].map((_, index) =>
                renderHour(index, purpleLine, "", "purple")
              )}
              {[...Array(8)].map((_, index) =>
                renderHour(index, yellowLine, "", "white")
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
