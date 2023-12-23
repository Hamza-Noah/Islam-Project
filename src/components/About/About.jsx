import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="info-breadcrumb">
              <hgroup>
                <p className={`${styles["special-color"]} fw-bolder`}>
                  ABOUT ME
                </p>
                <h2 className={styles.title}>
                  Designing with <br />
                  passion for Problem <br />
                  Solving
                </h2>
              </hgroup>
              <a href="#" className={styles.link}>Follow Me On Instagram</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-details text-white fw-bolder">
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