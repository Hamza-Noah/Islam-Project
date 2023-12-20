import styles from "./landing.module.css";

export default function Landing() {
  return (
    <div className="container">
      <section className={styles.landing}>
        <div className="row">
          <div className="col-lg-6">
            <div className="info position-relative pt-5 text-white">
              <p
                className={`${styles["job-title"]}  position-absolute d-none d-lg-flex  flex-column`}
              >
                <span>Product</span>
                <span className="ps-lg-5">Desiner</span>
              </p>
              <div className="position-relative">
                <p className={`${styles.bow} fw-bolder`}>Hello it's me</p>
                <h1 className={`${(styles.title, styles["designer-name"])} `}>
                  Essam Abass
                </h1>
                <p className={styles.details}>
                  An enthusiastic product designer currently shaping the future
                  of software development by designing smooth user-interfaces
                  that promote user interaction with information and data. While
                  traveling around the world.
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </section>
    </div>
  );
}
