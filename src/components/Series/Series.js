import styles from "./Series.module.css";

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
