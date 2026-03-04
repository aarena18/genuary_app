import styles from "./Toolbox.module.css";
import aboutIcon from "../../../assets/case.png";
import techIcon from "../../../assets/studies.png";
import socialIcon from "../../../assets/mail.png";

export const Tools = () => {
  return (
    <div className={styles.toolboxWrapper}>
      <div className={styles.aboutWrapper}>
        <a href="">
          <img src={aboutIcon} alt="suitcase_icon" />
        </a>
      </div>
      <div className={styles.techWrapper}>
        <a href="">
          <img src={techIcon} alt="suitcase_icon" />
        </a>
      </div>
      <div className={styles.socialsWrapper}>
        <a href="">
          <img src={socialIcon} alt="suitcase_icon" />
        </a>
      </div>
    </div>
  );
};
