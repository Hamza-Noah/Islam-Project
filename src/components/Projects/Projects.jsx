import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";

import plusIconPurple from "../../assets/images/svg/plus-icon.svg";
import plusIconDark from "../../assets/images/svg/plus-icon-dark.svg";
import plusIconWhite from "../../assets/images/svg/plus-icon-white.svg";

import arrowWhite from "../../assets/images/svg/arrow-white.svg";
import arrowDark from "../../assets/images/svg/arrow-dark.svg";

import activeDot from "../../assets/images/active-item.png";
import unactiveDot from "../../assets/images/unactive-item.png";

import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.jpg";
import project6 from "../../assets/images/project-6.jpg";

import styles from "./projects.module.css";
import applyThemeClass from "../../Services/applyThemeClass.js";
import LinkTo from "../LinkTo/LinkTo.jsx";

export default function Projects({ mode }) {
  const [theme, setTheme] = useState();
  const [plusIcon, setPlusIcon] = useState();
  const [arrow, setArrow] = useState();

  useEffect(() => {
    const plusIcons = {
      dark: plusIconDark,
      purple: plusIconPurple,
      white: plusIconWhite,
    };

    const arrowIcons = {
      dark: arrowDark,
      purple: arrowDark,
      white: arrowWhite,
    };

    setArrow(arrowIcons[mode]);
    setPlusIcon(plusIcons[mode]);
    setTheme(mode);
  }, [mode]);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.6.0.min.js"; // Use the version compatible with Owl Carousel
    script1.async = false;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"; // Use the version you installed
    script2.async = false;
    document.body.appendChild(script2);

    script2.onload = () => {
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 10000,
        onDragged: handleDragged,
        dots: false,
        nav: false,
      });
    };
  }, []);

  const goToSlide = (index) => {
    $(".owl-carousel").trigger("to.owl.carousel", [index, 300]); // Change 300 to the desired animation speed in milliseconds
    setActive(index);
  };

  const [active, setActive] = useState(0);

  const handleDragged = (event) => {
    const currentItemIndex = event.item.index;
    if (currentItemIndex == 1) {
      setActive(1);
    } else {
      setActive(0);
    }
  };

  return (
    <section className={`${styles.projects} mt-5 pt-5`}>
      <div className="container position-relative">
        <h2 className={`${styles.title} ${applyThemeClass(mode, styles)}`}>
          Recent <br /> Projects
          <i className="">
            <img src={plusIcon} alt="" />
          </i>
        </h2>
        <div className="owl-carousel">
          <div className="item">
            <div className="porjects">
              <div className="d-flex flex-column flex-md-row">
                <div className="position-relative d-flex align-items-center p-2">
                  <div className=" position-relative">
                    <img src={project1} alt="" />
                    <div className={`${styles.overlay} position-absolute`}>
                      <h3
                        className={`${
                          styles["project-title"]
                        } ${applyThemeClass(theme, styles)}`}
                      >
                        Steocell
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-2">
                    <div className=" position-relative">
                      <img src={project2} alt="" />
                      <div className={`${styles.overlay} position-absolute`}>
                        <h3
                          className={`${
                            styles["project-title"]
                          } ${applyThemeClass(theme, styles)}`}
                        >
                          Werlton
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className=" position-relative">
                      <img src={project6} alt="" />
                      <div className={`${styles.overlay} position-absolute`}>
                        <h3
                          className={`${
                            styles["project-title"]
                          } ${applyThemeClass(theme, styles)}`}
                        >
                          Xchangewise
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex align-items-center p-2">
                <div className=" position-relative">
                  <img src={project4} alt="" />
                  <div className={`${styles.overlay} position-absolute`}>
                    <h3
                      className={`${styles["project-title"]} ${applyThemeClass(
                        theme,
                        styles
                      )}`}
                    >
                      Ai Group
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-2">
                  <div className=" position-relative">
                    <img src={project5} alt="" />
                    <div className={`${styles.overlay} position-absolute`}>
                      <h3
                        className={`${
                          styles["project-title"]
                        } ${applyThemeClass(theme, styles)}`}
                      >
                        UAE
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className=" position-relative">
                    <img src={project3} alt="" />
                    <div className={`${styles.overlay} position-absolute`}>
                      <h3
                        className={`${
                          styles["project-title"]
                        } ${applyThemeClass(theme, styles)}`}
                      >
                        Neomed
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.dots} dots d-flex justify-content-center mx-auto`}
        >
          <button className="btn p-0 pe-1" onClick={() => goToSlide(0)}>
            {theme === "purple" && (
              <>
                {active ? (
                  <img className={styles["btn-dot"]} src={unactiveDot} alt="" />
                ) : (
                  <img className={styles["btn-dot"]} src={activeDot} alt="" />
                )}
              </>
            )}
            {theme === "dark" && (
              <>
                {active ? (
                  <span className={`${styles["dark-unactive-dot"]}`}></span>
                ) : (
                  <span className={`${styles["dark-active-dot"]}`}></span>
                )}
              </>
            )}
            {theme === "white" && (
              <>
                {active ? (
                  <span className={`${styles["white-unactive-dot"]}`}></span>
                ) : (
                  <span className={`${styles["white-active-dot"]}`}></span>
                )}
              </>
            )}
          </button>
          <button className="btn p-0 ps-1" onClick={() => goToSlide(1)}>
            {theme == "purple" && (
              <>
                {active ? (
                  <img className={styles["btn-dot"]} src={activeDot} alt="" />
                ) : (
                  <img className={styles["btn-dot"]} src={unactiveDot} alt="" />
                )}
              </>
            )}
            {theme === "dark" && (
              <>
                {active ? (
                  <span className={`${styles["dark-active-dot"]}`}></span>
                ) : (
                  <span className={`${styles["dark-unactive-dot"]}`}></span>
                )}
              </>
            )}
            {theme === "white" && (
              <>
                {active ? (
                  <span className={`${styles["white-active-dot"]}`}></span>
                ) : (
                  <span className={`${styles["white-unactive-dot"]}`}></span>
                )}
              </>
            )}
          </button>
        </div>
        <div className={styles["link-to"]}>

        <LinkTo
          linkTo="https://www.behance.net/samo_abbas19"
          text="my behance"
          blank={true}
          />
          </div>
        <button
          className={`${styles.arrow} ${applyThemeClass(theme, styles)}  ${
            active == 0 ? styles.right : styles.left
          }`}
          onClick={() => {
            goToSlide(!active);
          }}
        >
          <img src={arrow} alt="" />
        </button>
      </div>
    </section>
  );
}
