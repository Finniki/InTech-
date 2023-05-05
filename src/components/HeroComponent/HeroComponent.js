import styles from "./HeroComponent.module.css";
import codeImage from "../../assets/images/code.jpg";
import aiImage from "../../assets/images/ai.jpg";
import gadgetImage from "../../assets/images/gadget.jpg";
import workspaceImage from "../../assets/images/workspace.jpg";

const HeroComponent = () => {
  return (
    <div className={styles.heroArea}>
      <div className={styles.textArea}>INTECH</div>
      <div className={styles.imageArea}>
        <div className={styles.gridItem}>
          <img src={codeImage} className={styles.codeImg} />
        </div>
        <div className={styles.gridItem}>
          <img src={gadgetImage} className={styles.codeImg} />
        </div>
        <div className={styles.gridItem}>
          <img src={aiImage} className={styles.aiImg} />
        </div>
        <div className={styles.gridItem}>
          <img src={workspaceImage} className={styles.codeImg} />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
