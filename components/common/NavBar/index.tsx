import Link from "next/link";
import React from "react";
import styles from "styles/layout/NavBar.module.css";
import fbIcon from "assets/icons/fb.svg";
import messengerIcon from "assets/icons/messenger.svg";
import zaloIcon from "assets/icons/zalo.svg";
import Image from "next/image";
import navBarItemConfigs from "./config";
import Dropdown from "./Dropdown";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href={"/"}>
          <a>
            <img
              src="https://niemtinvang.vn/wp-content/uploads/2019/02/FILE_20220108_160017_GOLDEN-TRUST-01-Copy.png"
              alt="niemtinvang"
              width={100}
            />
          </a>
        </Link>

        {navBarItemConfigs.map((config) => (
          <Dropdown
            key={config.title}
            menuItems={config.menuItems}
            title={config.title}
          />
        ))}

        <div className="w-24"></div>
        <a href="/">
          <Image width={34} src={fbIcon} />
        </a>
        <a href="/">
          <Image width={34} src={messengerIcon} />
        </a>
        <a href="/">
          <Image width={34} src={zaloIcon} />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
