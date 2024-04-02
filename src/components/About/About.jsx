import styles from "./about.module.css";
import { useState, useEffect } from "react";

export default function About({ mode }) {
  const [theme, setTheme] = useState();

  function applyThemeClass(theme, styles) {
    return theme === "purple"
      ? styles.purple
      : theme === "dark"
      ? styles.dark
      : styles.white;
  }

  useEffect(() => {
    setTheme(mode);
  }, [mode]);

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="info-breadcrumb">
              <hgroup>
                <p
                  className={`${styles["special-color"]} ${applyThemeClass(
                    theme,
                    styles
                  )} fw-bolder`}
                >
                  ABOUT ME
                </p>
                <h2
                  className={`${styles.title} ${applyThemeClass(
                    theme,
                    styles
                  )}`}
                >
                  Designing with <br />
                  passion for Problem <br />
                  Solving
                </h2>
              </hgroup>
              <a
                href="https://instagram.com/samo.abbes98?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                className={`text-uppercase ${
                  styles["link-to"]
                } ${applyThemeClass(theme, styles)}`}
              >
                Follow Me On Instagram
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`${styles["info-details"]} ${applyThemeClass(
                theme,
                styles
              )} text-white pe-lg-5`}
            >
              <p>
                I’ve always been passionate about pixels and design projects and
                haven’t stopped working and learning about new technologies .
                With years of experience in graphic and web design I have
                mastered the skills of understanding client requirements
                according to the latest trends
              </p>
              <p>
                I believe we should leave this Earth as good as or better than
                we found it for future generations; my goal is to contribute to
                those ideals in whatever way I can. If you feel the same, I'd
                love to talk.
              </p>
              <p>I also like sharing my experiences on instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
