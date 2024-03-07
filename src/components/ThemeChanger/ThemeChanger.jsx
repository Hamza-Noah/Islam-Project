import React from "react";
import style from "./themeChanger.module.css";
import iconPurple from "../../assets/images/svg/purple-theme-icon.svg";
import purpleLine from "../../assets/images/svg/purple-line.svg";
import blueLine from "../../assets/images/svg/blue-line.svg";
import yellowLine from "../../assets/images/svg/yellow-line.svg";


import { changeThemeToDark, darkMode } from "../../components/RTK/slice";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeChanger() {

  const mode = useSelector((state) => state.changeTheme.darkMode);
  console.log(mode);

  const dispatch = useDispatch();

  return (
    <>
      <section className={style["theme-container"]}>
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
                    key={index}
                    className={`${`${style.hour} ${style["purple-hour"]}`} ${index % 6 === 0 ? style.fill : ""}`}
                  ><img src={purpleLine} alt="" /> </div>
                ))}
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className={`${style.hour} ${index % 6 === 0 ? style.fill : ""}`}
                  ><img src={blueLine} alt="" /></div>
                ))}
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className={`${style.hour} ${index % 6 === 0 ? style.fill : ""}`}
                  ><img src={yellowLine} alt="" /></div>
                ))}
              </div>
           
            </div>
          </div>
        </div>
        <button
        className="change-theme"
        onClick={() => dispatch(changeThemeToDark())}
      >
        <h1>dark mode</h1>
      </button>
      </section>
    </>
  );
}
