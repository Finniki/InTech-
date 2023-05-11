import styles from "./SeriesItem.module.css";

const SeriesItem = () => {
  return (
    <section>
      <div className={styles.titleDiv}>
        <h2>Title</h2>
      </div>
      <div className={styles.categoryDiv}>
        <p>Category</p>
      </div>
      <div className={styles.descriptionDiv}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor
          velit ut nibh sollicitudin, in rutrum justo tempor. Nulla sagittis
          libero sed ante pharetra, id finibus diam laoreet.{" "}
        </p>
      </div>
    </section>
  );
};
