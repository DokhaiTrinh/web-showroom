import React from "react";
import styles from '../styles/Pricing.module.css';
import Link from "next/link";

function Pricing() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
          <h2 className={styles.title}>BẢNG TÍNH DỰ TRÙ CHI PHÍ XÂY DỰNG</h2>
          <p>Nếu cần cập nhật thêm, xin liên hệ Hoàng Sơn qua zalo <Link href="/"><a className={styles.phone}>0909 805 931</a></Link> để có thông tin chi tiết.</p>
          <iframe width="100%" height="600" scrolling="no" src="https://onedrive.live.com/embed?resid=F0833C89E6A7849C%21180379&authkey=%21APVtplLclbO_3YE&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&ejss=false"></iframe>
      </div>
    </div>
  );
}

export default Pricing;
