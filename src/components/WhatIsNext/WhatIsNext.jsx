import styles from "./what-is-next.module.css";

export default function WhatNext() {
  return (
    <section className={`${styles["what-next"]} text-center`}>
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
      </div>
    </section>
  );
}
