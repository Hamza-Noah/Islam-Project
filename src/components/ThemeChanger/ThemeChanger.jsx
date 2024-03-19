// Your ThemeChanger component

import { useState } from "react";
import style from "./themeChanger.module.css";

import iconPurple from "../../assets/images/svg/purple-theme-icon.svg";
import purpleLine from "../../assets/images/svg/purple-line.svg";
import blueLine from "../../assets/images/svg/blue-line.svg";
import yellowLine from "../../assets/images/svg/yellow-line.svg";

export default function ThemeChanger(props) {
  const [activePurpleIndex, setActivePurpleIndex] = useState(-1); // State to store the index of the active purple image
  const [activeWhiteIndex, setActiveWhiteIndex] = useState(-1); // State to store the index of the active white image
  const [activeDarkIndex, setActiveDarkIndex] = useState(-1); // State to store the index of the active dark image

  // Function to handle theme change for purple images
  const handlePurpleThemeChange = (index) => {
    setActivePurpleIndex(index === activePurpleIndex ? -1 : index); // Toggle active index for purple images
    setActiveWhiteIndex(-1); // Deactivate white images
    setActiveDarkIndex(-1); // Deactivate dark images
    props.onThemeChange("purple"); // Trigger theme change callback
  };

  // Function to handle theme change for white images
  const handleWhiteThemeChange = (index) => {
    setActiveWhiteIndex(index === activeWhiteIndex ? -1 : index); // Toggle active index for white images
    setActivePurpleIndex(-1); // Deactivate purple images
    setActiveDarkIndex(-1); // Deactivate dark images
    props.onThemeChange("white"); // Trigger theme change callback
  };

  // Function to handle theme change for dark images
  const handleDarkThemeChange = (index) => {
    setActiveDarkIndex(index === activeDarkIndex ? -1 : index); // Toggle active index for dark images
    setActivePurpleIndex(-1); // Deactivate purple images
    setActiveWhiteIndex(-1); // Deactivate white images
    props.onThemeChange("dark"); // Trigger theme change callback
  };

  return (
    <section className={`${style["theme-container"]}`}>
      <div className="container">
        <div className="theme-settings">
          <button className={`d-block mx-auto ${style["theme-btn-purple"]}`}>
            <i>
              <img src={iconPurple} alt="" />
            </i>
          </button>
          <div className={style.circadian}>
            <div className={style.hours}>
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className={style.hour}
                  onClick={() => handleDarkThemeChange(index)}
                >
                  <img
                    src={blueLine}
                    alt=""
                    className={index === activeDarkIndex ? style.active : ""}
                  />
                </div>
              ))}
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className={style.hour}
                  onClick={() => handlePurpleThemeChange(index)}
                >
                  <img
                    src={purpleLine}
                    alt=""
                    className={index === activePurpleIndex ? style.active : ""}
                  />
                </div>
              ))}
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className={style.hour}
                  onClick={() => handleWhiteThemeChange(index)}
                >
                  <img
                    src={yellowLine}
                    alt=""
                    className={index === activeWhiteIndex ? style.active : ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
