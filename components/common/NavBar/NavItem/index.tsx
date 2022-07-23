import React from "react";
import styles from "./style.module.css";
import navStyles from "styles/layout/NavBar.module.css";

import { NavItemConfig } from "../config";
import Link from "next/link";
import { VscChevronDown } from "react-icons/vsc";

function NavItem(config: NavItemConfig) {
  const hasMenuItems = config.menuItems.length > 0;

  return hasMenuItems ? (
    <div className={styles.dropdown}>
      <div className={`${navStyles.navItem} ${styles.dropdownTitle}`}>
        <div>{config.title}</div>
        <div style={{ paddingLeft: 5 }}>
          <VscChevronDown size={20} />
        </div>
      </div>
      <div className={styles.dropdownContent}>
        {config.menuItems.map((item) => (
          <a key={item.title} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  ) : (
    <div className={navStyles.navItem}>
      <Link href={config.url ?? ""}>{config.title}</Link>
    </div>
  );
}

export default NavItem;
