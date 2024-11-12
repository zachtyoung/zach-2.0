import React from "react";
import styles from "./Launcher.module.css";
const Launcher = () => {
  return (
    <div className={styles.launcher}>
      <div class="window">
        <div class="title-bar">
          <div class="title-bar-text">Internet Center</div>
        </div>
        <div class="window-body">
          <ul>
            <li>Shopping</li>
            <li>Entertainment</li>
            <li>Finance</li>
            <li>Connect</li>
            <li>Search</li>
            <li>People</li>
            <li>E-Mail</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Launcher;
