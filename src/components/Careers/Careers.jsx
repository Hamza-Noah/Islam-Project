import styles from "./careers.module.css";
import plusIcon from "../../assets/images/svg/plus-icon.svg";

export default function Careers() {
  return (
    <section>
      <div className="container">
        <h2 className={`${styles.title} mb-5`}>
          Careers
          <i>
            <img src={plusIcon} alt="" />
          </i>
        </h2>
        <div className={`${styles.roles} row m-0`}>
          <div className="col-sm-6 col-lg-3 ">
            <div className={styles.role}>
              <h3 className="">Google GDG</h3>
              <p className={`${styles["role-name"]}`}>M.L Developer</p>
              <p>March 2018 - Feb 2019</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 ">
            <div className={styles.role}>
              <h3 className="">Microsoft Eg</h3>
              <p className={`${styles["role-name"]}`}>M.L Developer</p>
              <p>Apr 2019 - Oct 2019</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className={styles.role}>
              <h3 className="">AlatabyWema</h3>
              <p className={`${styles["role-name"]}`}>UX/UI Desiner</p>
              <p>Jan 2020 - Nov 2020</p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className={styles.role}>
              <h3 className="">Mckinesy</h3>
              <p className={`${styles["role-name"]}`}>UX/UI Desiner</p>
              <p>Dec 2020 - tell now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
