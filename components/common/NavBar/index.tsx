import Link from "next/link";
import React from "react";
import styles from "styles/layout/NavBar.module.css";
import fbIcon from "assets/icons/fb.svg";
import { messengerIcon, zaloIcon } from "materials/icons";
import Image from "next/image";
import navBarItemConfigs from "./config";
import NavItem from "./NavItem";
import Button, { ButtonVariant } from "../Button";
import globalThemeConfig from "themes";
import { useDispatch } from "react-redux";
import { toggleShowLoginModal } from "redux/slices/global";

function NavBar() {
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(toggleShowLoginModal(true));
  };

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
          <NavItem
            key={config.type}
            menuItems={config.menuItems}
            title={config.title}
            url={config.url}
          />
        ))}

        <div className="w-24"></div>
        <a target="_blank" href="https://www.facebook.com/niemtinvang.vn/">
          <Image width={34} src={fbIcon} />
        </a>
        <a target="_blank" href="https://www.messenger.com/t/308993706943625">
          <Image width={34} src={messengerIcon} />
        </a>
        <a target="_blank" href="https://zalo.me/0989642652">
          <Image width={34} src={zaloIcon} />
        </a>

        <Button
          title="Đăng nhập"
          variant={ButtonVariant.solid}
          color={globalThemeConfig.colors.primary}
          textColor="white"
          borderRadius={5}
          height={40}
          width={120}
          onClick={onLogin}
        />

        <Button
          title="Đăng ký ngay!"
          variant={ButtonVariant.outlined}
          color={globalThemeConfig.colors.primary}
          textColor="white"
          borderRadius={5}
          height={40}
          width={130}
        />
      </div>
    </div>
  );
}

export default NavBar;
