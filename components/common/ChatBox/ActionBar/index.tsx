import React from "react";
import styles from "./style.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";

function ActionBar() {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Nhập tin nhắn..."
      />
      <button className={styles.actionButton}>
        <MdAttachFile />
      </button>
      <button className={styles.actionButton}>
        <RiSendPlane2Fill />
      </button>
    </div>
  );
}

export default ActionBar;
