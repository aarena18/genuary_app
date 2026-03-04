import styles from "./Hero.module.css";
import folderIcon from "../../../assets/folder.png";

export const Hero = () => {
  return (
    <div className={styles.HeroWrapper}>
      <div className={styles.rightHeroWrapper}>
        <a href="">
          <img src={folderIcon} alt="folder_image" />
        </a>
        <h3>Days 1-31</h3>
      </div>
    </div>
  );
};
