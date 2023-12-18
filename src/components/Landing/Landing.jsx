import style from "./landing.module.css";

export default function Landing() {
  return (
    <section className={style.landing}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="info text-white">
              <p className="d-flex flex-column">
                <span>Product</span>
                <span className="align-self-end">Desiner</span>
              </p>
              <p className={`${style.bow}`}>Hello it's me</p>
              <h1 className={`${style.title}`}>Essam Abass</h1>
              <p>
                An enthusiastic product designer currently shaping the future of
                software development by designing smooth user-interfaces that
                promote user interaction with information and data. While
                traveling around the world.
              </p>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </section>
  );
}
