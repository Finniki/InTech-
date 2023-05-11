import styles from "./HeroComponent.module.css";
import codeImage from "../../assets/images/code.jpg";
import aiImage from "../../assets/images/ai.jpg";
import gadgetImage from "../../assets/images/gadget.jpg";
import workspaceImage from "../../assets/images/workspace.jpg";

const HeroComponent = () => {
  return (
    <div className={styles.heroArea}>
      <div>
        <h1 className={styles.textArea}>INTECH</h1>
        <p className={styles.subTitle}>a scrapbook of all of my interests</p>
      </div>
      <div className={styles.imageArea}>
        <div className={styles.gridItem}>
          <img src={codeImage} className={styles.codeImg} />
        </div>
        <div className={styles.gridItem}>
          <img src={gadgetImage} className={styles.gadgetImg} />
        </div>
        <div className={styles.gridItem}>
          <img src={aiImage} className={styles.aiImg} />
        </div>
        <div className={styles.gridItem}>
          <img src={workspaceImage} className={styles.workspaceImg} />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
