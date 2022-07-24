import React, { CSSProperties, MouseEventHandler } from "react";
import styles from "./style.module.css";

type Props = {
  title: string;
  color?: string;
  textColor?: string;
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
  borderRadius?: number;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler;
  padding?: string;
};

export enum ButtonVariant {
  outlined,
  solid,
}

function Button({
  title,
  color,
  textColor,
  borderRadius,
  width,
  height,
  variant,
  fontSize,
  padding,
  onClick,
}: Props) {
  const style: CSSProperties = {
    color: variant === ButtonVariant.outlined ? color : textColor,
    background: variant === ButtonVariant.solid ? color : "none",
    borderRadius,
    width,
    height,
    fontSize,
    border: variant === ButtonVariant.outlined ? `1px solid ${color}` : "none",
    padding: padding,
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <button style={style} className={styles.container} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
