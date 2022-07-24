import React, { MouseEventHandler } from "react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import styles from "./style.module.css";

type Props = {
  onClose: MouseEventHandler;
};

function ChatBoxHeader({ onClose }: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.headerIcon}>
          <RiCustomerServiceFill />
        </div>
        <div className={styles.headerContent}>
          <p className={styles.title}>Nhân viên tư vấn</p>
          <div className="d-flex align-items-center">
            <div className={styles.dotStatus}></div>
            <p className={styles.textStatus}>Online</p>
          </div>
        </div>
      </div>
      <button onClick={onClose}>
        <VscClose />
      </button>
    </div>
  );
}

export default ChatBoxHeader;
