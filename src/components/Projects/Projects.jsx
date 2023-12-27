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
        autoplay: false,
        autoplaySpeed: 10000, // Set the autoplay speed to 10000 milliseconds (10 seconds)
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
              <div className="d-flex flex-column flex-md-row">
                <div className="position-relative d-flex align-items-center p-2">
                  <div className=" position-relative">
                    <img src={project1} alt="" />
                    <div className={`${styles.overlay} position-absolute`}>
                      <h3 className={`${styles["project-title"]}`}>Steocell</h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-2">
                    <div className=" position-relative">
                      <img src={project2} alt="" />
                      <div className={`${styles.overlay} position-absolute`}>
                        <h3 className={`${styles["project-title"]}`}>
                          Werlton
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className=" position-relative">
                      <img src={project6} alt="" />
                      <div className={`${styles.overlay} position-absolute`}>
                        <h3 className={`${styles["project-title"]}`}>
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
                    <h3 className={`${styles["project-title"]}`}>Ai Group</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-2">
                  <div className=" position-relative">
                    <img src={project5} alt="" />
                    <div className={`${styles.overlay} position-absolute`}>
                      <h3 className={`${styles["project-title"]}`}>UAE</h3>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className=" position-relative">
                    <img src={project3} alt="" />
                    <div className={`${styles.overlay} position-absolute`}>
                      <h3 className={`${styles["project-title"]}`}>Neomed</h3>
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
            {active ? (
              <img className={styles["btn-dot"]} src={unactiveDot} alt="" />
            ) : (
              <img className={styles["btn-dot"]} src={activeDot} alt="" />
            )}
          </button>
          <button className="btn p-0 ps-1" onClick={() => goToSlide(1)}>
            {active ? (
              <img className={styles["btn-dot"]} src={activeDot} alt="" />
            ) : (
              <img className={styles["btn-dot"]} src={unactiveDot} alt="" />
            )}
          </button>
        </div>
        <a
          href="https://www.behance.net/samo_abbas19"
          target="_blank"
          className={`text-uppercase ${styles["link-to"]}`}
        >
          my behance
        </a>
      </div>
    </section>
  );
}
