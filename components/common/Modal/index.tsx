import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  open?: boolean;
  onClose?: MouseEventHandler;
  children: ReactNode;
};

function Modal({ open, onClose, children }: Props) {
  const onClickCapture = (e: any) => {
    if (e.target.id !== "modalParent") {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <div
      id="modalParent"
      onClickCapture={onClickCapture}
      onClick={onClose}
      className={`${styles.container} ${open ? styles.fadeIn : styles.fadeOut}`}
    >
      {children}
    </div>
  );
}

export default Modal;
