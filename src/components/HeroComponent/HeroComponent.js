import styles from "./HeroComponent.module.css";
import codeImage from "../../assets/images/code.jpg";

const HeroComponent = () => {
  return (
    <div className={styles.heroArea}>
      <div className={styles.textArea}>INTECH</div>
      <div className={styles.imageArea}>
        <img src={codeImage} />
      </div>
    </div>
  );
};

export default HeroComponent;
