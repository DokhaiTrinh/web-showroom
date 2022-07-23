import React from 'react';
import styles from 'styles/layout/Footer.module.css';
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.logo}
          src="https://niemtinvang.vn/wp-content/uploads/2019/02/FILE_20220108_160017_GOLDEN-TRUST-01-Copy.png"
          alt="niemtinvang"
          width={100}
        /></div>
      <div>
        <h2 className={styles.name}>CÔNG TY TNHH XÂY DỰNG NIỀM TIN VÀNG</h2>
        <div className={styles.info}>
          <p className={styles.title}>Địa chỉ:</p>
          <p>Số 92 đường 46, P.Bình Trưng Đông, Tp. Thủ Đức, Tp. HCM</p>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>MST:</p>
          <p>0316 642 652</p>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>Hotline 0:</p>
          <p>0989 642 652 (Nhân viên chăm sóc khách hàng)</p>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>Hotline 1:</p>
          <p>0909 805 931 (Mr. Sơn - Tư vấn kỹ thuật và chi phí)</p>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>Hotline 2:</p>
          <p>0903 922 848 (Mr. Anh Tuấn - Tư vấn kiến thức)</p>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>Hotline 3:</p>
          <p>0768 176 450 (Mr. Thanh Tuấn - Tư vấn nội thất)</p>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>Email:</p>
          <p>goldentrustcons@gmail.com</p>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>Profile:</p>
          <Link href="http://niemtinvang.vn/profile">
          <a className={styles.link}>http://niemtinvang.vn/profile</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer