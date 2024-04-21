import React from "react";
import styles from "./LinkTo.module.css";
import applyThemeClass from "../../Services/applyThemeClass.js";

export default function LinkTo({linkTo, text, mode, blank = false }) {
  console.log(text);
  return (
    <>
      <a
        href={linkTo}
        target={blank && "_blank"}
        className={`text-uppercase ${styles["link-to"]} ${applyThemeClass(
          mode,
          styles
        )}`}
      >
        {text}
      </a>
    </>
  );
}
