import { useState, useEffect } from "react";

import styles from "./what-is-next.module.css";
import socialIcon1Purple from "../../assets/images/svg/social-icon-1.svg";
import socialIcon2Purple from "../../assets/images/svg/social-icon-2.svg";
import socialIcon3Purple from "../../assets/images/svg/social-icon-3.svg";
import socialIcon4Purple from "../../assets/images/svg/social-icon-4.svg";
import socialIcon5Purple from "../../assets/images/svg/social-icon-5.svg";
import socialIcon6Purple from "../../assets/images/svg/social-icon-6.svg";

import socialIcon1Dark from "../../assets/images/svg/social-icon-dark-1.svg";
import socialIcon2Dark from "../../assets/images/svg/social-icon-dark-2.svg";
import socialIcon3Dark from "../../assets/images/svg/social-icon-dark-3.svg";
import socialIcon4Dark from "../../assets/images/svg/social-icon-dark-4.svg";
import socialIcon5Dark from "../../assets/images/svg/social-icon-dark-5.svg";
import socialIcon6Dark from "../../assets/images/svg/social-icon-dark-6.svg";

import socialIcon1White from "../../assets/images/svg/social-icon-white-1.svg";
import socialIcon2White from "../../assets/images/svg/social-icon-white-2.svg";
import socialIcon3White from "../../assets/images/svg/social-icon-white-3.svg";
import socialIcon4White from "../../assets/images/svg/social-icon-white-4.svg";
import socialIcon5White from "../../assets/images/svg/social-icon-white-5.svg";
import socialIcon6White from "../../assets/images/svg/social-icon-white-6.svg";

import arrowRight from "../../assets/images/svg/arrow-right.svg";
import arrowWhite from "../../assets/images/svg/arrow-right-white.svg";
import SendMail from "../SendMail";
import applyThemeClass from "../../Services/applyThemeClass.js";
import LinkTo from "../LinkTo/LinkTo.jsx";

export default function WhatNext({ mode }) {
  const [theme, setTheme] = useState();
  const [socialIcons, setSocialIcons] = useState([]);
  const [arrow, setArrow] = useState();

  const socialIconsPurple = [
    socialIcon1Purple,
    socialIcon2Purple,
    socialIcon3Purple,
    socialIcon4Purple,
    socialIcon5Purple,
    socialIcon6Purple,
  ];

  const socialIconsDark = [
    socialIcon1Dark,
    socialIcon2Dark,
    socialIcon3Dark,
    socialIcon4Dark,
    socialIcon5Dark,
    socialIcon6Dark,
  ];

  const socialIconsWhite = [
    socialIcon1White,
    socialIcon2White,
    socialIcon3White,
    socialIcon4White,
    socialIcon5White,
    socialIcon6White,
  ];

  useEffect(() => {
    const socialIconsItems = {
      purple: socialIconsPurple,
      dark: socialIconsDark,
      white: socialIconsWhite,
    };

    const arrows = {
      white: arrowWhite,
      dark: arrowRight,
      purple: arrowRight,
    };

    setTheme(mode);
    setSocialIcons(socialIconsItems[mode]);
    setArrow(arrows[mode]);
  }, [mode]);

  const socialLinks = [
    "https://www.linkedin.com/in/eslam-abbes-24727817a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "https://www.facebook.com/profile.php?id=100079890813476&mibextid=ZbWKwL",
    "https://www.upwork.com/freelancers/~01a5f70344f446aa1d",
    "https://twitter.com/Sam_ui0ux",
    "https://instagram.com/samo_ui.ux?igshid=NGVhN2U2NjQ0Yg==",
    "https://www.tiktok.com/@samo.ui_ux",
  ];

  return (
    <section
      id="hire-me"
      className={`${styles["what-next"]}  ${applyThemeClass(
        theme,
        styles
      )} text-center position-relative`}
    >
      <div className="container">
        <hgroup>
          <p
            className={`${styles["special-color"]} ${applyThemeClass(
              theme,
              styles
            )} text-uppercase fw-bolder`}
          >
            Whats Next
          </p>
          <h2 className={styles.title}>Let's Work Together.</h2>
        </hgroup>
        <p className={theme == "white" ? styles.white : ""}>
          I'm currently Available for any design systems projects, dashboard
          designs or landing pages gigs
        </p>
        <p className={theme == "white" ? styles.white : ""}>
          If you'd like to talk about a project you want help with or need an
          advice about product design, just drop me{" "}
        </p>
        <div className={`${styles["social-links"]}`}>
          <ul className="d-flex justify-content-center list-unstyled">
            {socialIcons.map((socialIcon, i) => {
              return (
                <li
                  className={`${styles.icon} ${applyThemeClass(theme, styles)}`}
                  key={i}
                >
                  <a href={socialLinks[i]} target="_blank">
                    <img src={socialIcon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`${styles["mail-link"]}`}>
          <button
            className={`${styles["link-to"]} ${applyThemeClass(
              theme,
              styles
            )} text-uppercase mx-auto mt-5"`}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            write me an email
            <img src={arrow} alt={arrow} />
          </button>
          <div className="d-flex justify-content-center mt-3">
           <a className="text-decoration-underline text-secondary" href="#" target="_blank">Pay From Here</a>
          </div>
          <SendMail theme={mode}/>
        </div>
      </div>
    </section>
  );
}
