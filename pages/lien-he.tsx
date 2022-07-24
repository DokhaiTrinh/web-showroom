import React from "react";
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.17400480834!2d106.77681600000001!3d10.788818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa634f781b5d3a02f!2zQ1RZIFROSEggWMOCWSBE4buwTkcgTknhu4BNIFRJTiBWw4BORw!5e0!3m2!1sen!2sus!4v1658679393804!5m2!1sen!2sus"
          width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <hr className={styles.divider} />
        <div className={styles.contact}>
          <h3 className={styles.name}>CTY TNHH XÂY DỰNG NIỀM TIN VÀNG</h3>
          <ul>
            <li>
              <div className={styles.line}>
                <p className={styles.title}>Địa chỉ:</p>
                <p>Số 92 đường 46, P. Bình Trưng Đông, Tp. Thủ Đức, Tp. HCM</p>
              </div>
            </li>
            <li>
              <div className={styles.line}>
                <p className={styles.title}>MST:</p>
                <p>0316 642 652</p>
              </div>
            </li>
            <li>
              <div className={styles.line}>
                <p className={styles.title}>Hotline 0:</p>
                <p>0989 642 652 (Nhân viên chăm sóc khách hàng)</p>
              </div>
            </li>
            <li>
              <div className={styles.line}>
                <p className={styles.title}>Hotline 1:</p>
                <p>0909 805 931 (Mr. Sơn – Tư vấn kỹ thuật và chi phí)</p>
              </div>
            </li>
            <li>
              <div className={styles.line}>
                <p className={styles.title}>Hotline 2:</p>
                <p>0903 922 848 (Mr. Anh Tuấn – Tư vấn kiến trúc)</p>
              </div>
            </li>
            <li>
              <div className={styles.line}>
                <p className={styles.title}>Hotline 3:</p>
                <p>0768 176 450 (Mr. Thanh Tuấn – Tư vấn nội thất)</p>
              </div>
            </li>
            <li>
              <div className={styles.line}>
                <p className={styles.title}>Email:</p>
                <p>goldentrustcons@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
