import styles from "./what-is-next.module.css";
import socialIcon1 from "../../assets/images/svg/social-icon-1.svg";
import socialIcon2 from "../../assets/images/svg/social-icon-2.svg";
import socialIcon3 from "../../assets/images/svg/social-icon-3.svg";
import socialIcon4 from "../../assets/images/svg/social-icon-4.svg";
import socialIcon5 from "../../assets/images/svg/social-icon-5.svg";
import socialIcon6 from "../../assets/images/svg/social-icon-6.svg";
import arrowRight from "../../assets/images/svg/arrow-right.svg";

export default function WhatNext() {
  const socialIcons = [
    socialIcon1,
    socialIcon2,
    socialIcon3,
    socialIcon4,
    socialIcon5,
    socialIcon6,
  ];

  const socialLinks = [
    "https://www.linkedin.com/in/eslam-abbes-24727817a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "https://www.facebook.com/profile.php?id=100079890813476&mibextid=ZbWKwL",
    "https://www.upwork.com/freelancers/~01a5f70344f446aa1d",
    "https://twitter.com/Sam_ui0ux",
    "https://instagram.com/samo_ui.ux?igshid=NGVhN2U2NjQ0Yg==",
    "https://www.tiktok.com/@samo.ui_ux",
  ];

  return (
    <section id="hire-me" className={`${styles["what-next"]} text-center`}>
      <div className="container">
        <hgroup>
          <p className={`${styles["special-color"]} text-uppercase fw-bolder`}>
            What's Next
          </p>
          <h2 className={styles.title}>Let's Work Together.</h2>
        </hgroup>
        <p>
          I'm currently Available for any design systems projects, dashboard
          designs or landing pages gigs
        </p>
        <p>
          If you'd like to talk about a project you want help with or need an
          advice about product design, just drop me{" "}
        </p>
        <div className={`${styles["social-links"]}`}>
          <ul className="d-flex justify-content-center list-unstyled">
            {socialIcons.map((socialIcon, i) => {
              return (
                <li className={styles.icon} key={i}>
                  <a href={socialLinks[i]} target="_blank">
                    <img src={socialIcon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`${styles["mail-link"]}`}>
          <a href="https://forms.gle/Gow1qUDppr7H42h69" target="_blank" className={`${styles["link-to"]} text-uppercase mx-auto mt-5`}>
            write me an email <img src={arrowRight} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
