import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

// icons for nav buttons
import closeIcon from "../../../assets/close.png";
import reduceIcon from "../../../assets/reduce.png";
import expandIcon from "../../../assets/expand.png";

export const Navbar = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    // compute last modified date when component mounts
    const modified = document.lastModified;
    if (modified) {
      // format as day/month/year
      const date = new Date(modified);
      const formatted = date.toLocaleDateString("en-GB");
      setLastUpdated(formatted);
    }
  }, []);

  return (
    <div className={styles.navWrapper}>
      <div className={styles.buttonNavWrapper}>
        <button className={styles.navCloseButton}>
          <img src={closeIcon} alt="close" />
        </button>
        <button className={styles.navReduceButton}>
          <img src={reduceIcon} alt="reduce" />
        </button>
        <button className={styles.navExpandButton}>
          <img src={expandIcon} alt="expand" />
        </button>
      </div>
      <h1>Ambre's Genuary</h1>
      <div className={styles.rightNavWrapper}>
        <h3>
          Updated on <span id="update">{lastUpdated}</span>
        </h3>
      </div>
    </div>
  );
};
