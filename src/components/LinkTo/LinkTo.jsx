import React from "react";
import styles from "./LinkTo.module.css";
import applyThemeClass from "../../Services/applyThemeClass.js";
import { useEffect } from "react";

export default function LinkTo({ linkTo, text, mode, blank = false }) {
  return (
    <>
      <a
        href={linkTo}
        target={blank ? "_blank" : ""}
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
