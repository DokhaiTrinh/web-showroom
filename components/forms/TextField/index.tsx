import React from "react";
import styles from "./style.module.css";

type Props = {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};

function TextField(props: Props) {
  return (
    <input
      placeholder={props.placeholder}
      className={styles.container}
      type={props.type}
    />
  );
}

export default TextField;
