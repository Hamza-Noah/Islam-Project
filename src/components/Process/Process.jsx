import styles from "./process.module.css";
import plusIcon from "../../assets/images/svg/plus-icon.svg";

export default function Process() {
  return (
    <>
      <section className="mt-5 pt-5">
        <div className="container">
          <h2 className={`${styles.title}`}>
            Process{" "}
            <i>
              <img src={plusIcon} alt="" />
            </i>
          </h2>
          <div className={`${styles["processes"]} row pt-5 mt-5`}>
            <div className="col-lg-6">
              <div className={`${styles.process}`}>
                <h3 data-process="01"><span>Make it</span></h3>
                <p>
                  I sketch wireframes and make prototypes. Talking through
                  tactile designs existing in the browser is worth its weight.
                  Design tools only carry you so far; the rest should be
                  realized with a link my team can rally around.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className={`${styles.process}`}>
                <h3 data-process="02"><span>Accessible FTW</span></h3>
                <p>
                  I sketch wireframes and make prototypes. Talking through
                  tactile designs existing in the browser is worth its weight.
                  Design tools only carry you so far; the rest should be
                  realized with a link my team can rally around.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className={`${styles.process}`}>
                <h3 data-process="03"><span>Collaborate</span></h3>
                <p>
                  I sketch wireframes and make prototypes. Talking through
                  tactile designs existing in the browser is worth its weight.
                  Design tools only carry you so far; the rest should be
                  realized with a link my team can rally around.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className={`${styles.process}`}>
                <h3 data-process="04"><span>Keep Expirementing</span></h3>
                <p>
                  I sketch wireframes and make prototypes. Talking through
                  tactile designs existing in the browser is worth its weight.
                  Design tools only carry you so far; the rest should be
                  realized with a link my team can rally around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
