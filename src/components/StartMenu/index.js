// src/components/StartMenu/index.js
import React from "react";
import styles from "./StartMenu.module.css";

const StartMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.startMenu}>
      <div className={styles.menuItem}>Programs</div>
      <div className={styles.menuItem}>Favorites</div>
      <div className={styles.menuItem}>Documents</div>
      <div className={styles.menuItem}>Settings</div>
      <div className={styles.menuItem}>Find</div>
      <div className={styles.menuItem}>Help</div>
      <div className={styles.menuItem}>Run...</div>
      <div className={styles.menuItem}>Log Off...</div>
      <div className={styles.menuItem}>Shut Down...</div>
    </div>
  );
};

export default StartMenu;
