import React from "react";
import logo from "../../assets/images/svg/logo-blue.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <section className={`${styles.header}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="#">
              <img className={styles.logo} src={logo} alt="" />
            </a>
          </div>
          <div className="hire-me">
            <a href="#hire-me" className={styles["hire-me-btn"]}>Hire Me</a>
          </div>
        </div>
      </div>
      <div className={`${styles["overlay-on-scroll"]}`}></div>
    </section>
  );
}
