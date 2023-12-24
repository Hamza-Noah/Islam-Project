import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import plusIcon from "../../assets/images/svg/plus-icon.svg";
import activeDot from "../../assets/images/active-item.png";
import unactiveDot from "../../assets/images/unactive-item.png";

import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.jpg";
import project6 from "../../assets/images/project-6.jpg";

import styles from "./projects.module.css";

export default function Projects() {
  useEffect(() => {
    // Load jQuery
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.6.0.min.js"; // Use the version compatible with Owl Carousel
    script1.async = false;
    document.body.appendChild(script1);

    // Load Owl Carousel
    const script2 = document.createElement("script");
    script2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"; // Use the version you installed
    script2.async = false;
    document.body.appendChild(script2);

    // Initialize Owl Carousel once scripts are loaded
    script2.onload = () => {
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000, // Set the autoplay timeout to 3000 milliseconds (3 seconds)
        onDragged: handleDragged,
        dots: false,
        nav: false
      });
    };
  }, []);

  const [active, setActive] = useState(0);

  const handleDragged = (event) => {
    const currentItemIndex = event.item.index;
    console.log("Current Item Index:", currentItemIndex);
    if (currentItemIndex == 1) {
      setActive(1);
    } else {
      setActive(0);
    }
  };

  return (
    <section className={`${styles.projects} mt-5 pt-5`}>
      <div className="container">
        <h2 className={`${styles.title}`}>
          Recent <br /> Projects
          <i className="">
            <img src={plusIcon} alt="" />
          </i>
        </h2>
        <div className="owl-carousel">
          <div className="item">
            <div className="porjects">
              <div className="d-flex">
                <div className="d-flex align-items-center p-2">
                  <img src={project1} alt="" />
                </div>
                <div>
                  <div className="p-2">
                    <img src={project2} alt="" />
                  </div>
                  <div className="p-2">
                    <img src={project6} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="d-flex">
              <div className="d-flex align-items-center p-2">
                <img src={project4} alt="" />
              </div>
              <div>
                <div className="p-2">
                  <img src={project5} alt="" />
                </div>
                <div className="p-2">
                  <img src={project3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.dots} dots d-flex justify-content-center mx-auto`}
        >
          <button className="btn p-0 pe-1">
            {active ? (
              <img className={styles["btn-dot"]} src={unactiveDot} alt="" />
            ) : (
              <img className={styles["btn-dot"]} src={activeDot} alt="" />
            )}
          </button>
          <button className="btn p-0 ps-1">
            {active ? (
              <img className={styles["btn-dot"]} src={activeDot} alt="" />
            ) : (
              <img className={styles["btn-dot"]} src={unactiveDot} alt="" />
            )}
          </button>
        </div>
        <a href="#skillset" className={`text-uppercase ${styles["link-to"]}`}>
          my behance
        </a>
      </div>
    </section>
  );
}
