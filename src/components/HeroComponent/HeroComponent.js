import styles from "./HeroComponent.module.css";

const HeroComponent = () => {
  return (
    <div className={styles.heroArea}>
      <div className={styles.imageArea}></div>
      <div className={styles.textArea}>INTECH</div>
    </div>
  );
};

export default HeroComponent;
