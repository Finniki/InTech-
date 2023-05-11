import styles from "./Series.module.css";
import SeriesItem from "../SeriesItem/SeriesItem";

const Series = () => {
  return (
    <main>
      <section
        className={`${styles.section} ${styles.cloneProjectsSection}`}
      ></section>
      <section
        className={`${styles.section} ${styles.newToTechSection}`}
      ></section>
      <section
        className={`${styles.section} ${styles.jsProjectsSection}`}
      ></section>
    </main>
  );
};

export default Series;
