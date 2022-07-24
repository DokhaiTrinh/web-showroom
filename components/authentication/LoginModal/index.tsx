import Button, { ButtonVariant } from "components/common/Button";
import Logo from "components/common/Logo";
import Modal from "components/common/Modal";
import TextField from "components/forms/TextField";
import { useGlobal } from "hooks/useGlobal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowLoginModal } from "redux/slices/global";
import globalThemeConfig from "themes";
import styles from "./style.module.css";

function LoginModal() {
  const dispatch = useDispatch();
  const { showLoginModal } = useGlobal();

  const onClose = () => {
    dispatch(toggleShowLoginModal(false));
  };

  return (
    <Modal open={showLoginModal} onClose={onClose}>
      <div className={styles.container}>
        <Logo width={150} height={90} />
        <div className={styles.title}>Xin chào!</div>
        <div className={styles.secondaryTitle}>
          Đăng nhập vào{" "}
          <span
            style={{ color: globalThemeConfig.colors.primary, fontWeight: 500 }}
          >
            Niềm Tin Vàng
          </span>
        </div>
        <div className="h-16px"></div>
        <TextField type="number" placeholder="Số điện thoại" />
        <div className="h-16px"></div>
        <TextField type="password" placeholder="Mật khẩu" />
        <div className={styles.notHaveAccount}>Chưa có tài khoản?</div>
        <div className="h-16px"></div>
        <Button
          textColor="white"
          width="100%"
          height={48}
          borderRadius={5}
          color={globalThemeConfig.colors.primary}
          title="Tiếp tục"
          variant={ButtonVariant.solid}
        />
      </div>
    </Modal>
  );
}

export default LoginModal;
