import React from "react";
import logo from "../../assets/images/svg/logo-blue.svg";
import style from "./Header.module.css";

export default function Header() {
  return (
    <section className={`${style.header}`}>
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="#">
              <img className={style.logo} src={logo} alt="" />
            </a>
          </div>
          <div className="hire-me">
            <button className={style["hire-me-btn"]}>Hire Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
