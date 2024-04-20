import { useState, useEffect } from "react";
import styles from "./landing.module.css";
import applyThemeClass from "../../Services/applyThemeClass.js";

export default function Landing({ mode }) {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(mode);
  }, [mode]);

  return (
    <div className="position-relative">
      <div className="container">
        <section
          className={`${styles.landing} ${applyThemeClass(theme, styles)}`}
        >
          <div className="row">
            <div className="col-md-6 pt-5">
              <div className={`${styles.info} position-relative text-white`}>
                <p
                  className={`${styles["job-title"]} ${applyThemeClass(
                    theme,
                    styles
                  )}  position-absolute d-flex  flex-column`}
                >
                  <span>Product</span>
                  <span className="ps-lg-5">Designer</span>
                </p>
                <div className="position-relative">
                  <p
                    className={`${styles.bow} ${
                      theme == "white" ? styles.white : ""
                    } fw-bolder`}
                  >
                    Hello it's me
                  </p>
                  <h1
                    className={`${
                      (styles.title, styles["designer-name"])
                    } ${applyThemeClass(theme, styles)}`}
                  >
                    Eslam Abbas
                  </h1>
                  <p
                    className={`${styles.details} ${applyThemeClass(
                      theme,
                      styles
                    )}`}
                  >
                    An enthusiastic product designer currently shaping the
                    future of software development by designing smooth
                    user-interfaces that promote user interaction with
                    information and data. While traveling around the world.
                  </p>
                </div>
                <a
                  href="#skillset"
                  className={`text-uppercase ${
                    styles["link-to"]
                  } ${applyThemeClass(theme, styles)}`}
                >
                  scroll for more
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              {theme === "dark" && (
                <div className={`h-100 ${styles["bg-landing"]}`}></div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
