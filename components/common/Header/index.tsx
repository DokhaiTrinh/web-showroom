import React from 'react';
import styles from './style.module.css';

function Header() {
    return (
        <div className={styles.intro}>
          <div className={styles.box}>NIỀM TIN VÀNG</div>
          <div>
            <h2>6+ kinh nghiệm thiết kế &</h2>
            <h2>xây dựng công trình</h2>
          </div>
          <div className={styles.box}>THIẾT KẾ NHÀ ĐẸP</div>
        </div>
    );
}

export default Header;