import React, { ReactNode } from "react";
import styles from "./style.module.css";
import navStyles from "styles/layout/NavBar.module.css";

import { NavItemConfig } from "../config";

function Dropdown(config: NavItemConfig) {
  return (
    <div className={styles.dropdown}>
      <div className={navStyles.navItem}>{config.title}</div>
      <div className={styles.dropdownContent}>
        {config.menuItems.map((item) => (
          <a href={item.url}>{item.title}</a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
