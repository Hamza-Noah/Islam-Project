import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import plusIcon from "../../assets/images/svg/plus-icon.svg";
import styles from "./projects.module.css";
import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.jpg";
import project6 from "../../assets/images/project-6.jpg";

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
        nav: true,
        dots: true,
        navText: [
          "<button class='owl-prev'><i class='fas fa-chevron-left'></i></button>",
          "<button class='owl-next'><i class='fas fa-chevron-right'></i></button>",
        ],
        autoplay: true,
        autoplayTimeout: 5000, // Set the autoplay timeout to 3000 milliseconds (3 seconds)
      });
    };
  }, []);

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
      </div>
    </section>
  );
}
