import React from "react";
import styles from '../styles/AboutUs.module.css';
import Link from "next/link";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.intro}>
          <div className={styles.box}>NIỀM TIN VÀNG</div>
          <div>
            <h2>6+ kinh nghiệm thiết kế &</h2>
            <h2>xây dựng công trình</h2>
          </div>
          <div className={styles.box}>THIẾT KẾ NHÀ ĐẸP</div>
        </div>
        <hr className={styles.divider} />
        <h2 className={styles.h}>CÔNG TY TNHH XÂY DỰNG NIỀM TIN VÀNG</h2>
        <div className={styles.line}>
          <p className={styles.title}>Tên quốc tế:</p>
          <p>GOLDEN TRUST CONSTRUCTION COMPANY LIMITED</p>
        </div>
        <div className={styles.line}>
          <p className={styles.title}>Mã số thuế:</p>
          <p>0316 642 652</p>
        </div>
        <div className={styles.line}>
          <p className={styles.title}>Địa chỉ:</p>
          <p>92 đường số 46, P.Bình Trưng Đông, Tp. Thủ Đức, Tp. Hồ Chí Minh, Việt Nam</p>
        </div>
        <div className={styles.line}>
          <p className={styles.title}>Điện thoại:</p>
          <p>0989 642 652</p>
        </div>
        <div className={styles.space}></div>
        <div className={styles.line}>
          <p className={styles.title}>STK:</p>
          <p>642 652 888</p>
        </div>
        <div className={styles.line}>
          <p className={styles.title}>Ngân hàng ACB,</p>
          <p>PGD Nguyễn Trãi, tên chủ stk: CTY TNNH XÂY DỰNG NIỀM TIN VÀNG</p>
        </div>
        <div className={styles.space}></div>
        <div className={styles.space}></div>
        <div className={styles.line}>
          <p className={styles.title}>Nguồn:</p>
          <Link href="https://masocongty.vn/0316642652/cong-ty-tnhh-xay-dung-niem-tin-vang">
          <a className={styles.link}>https://masocongty.vn/0316642652/cong-ty-tnhh-xay-dung-niem-tin-vang</a>
          </Link>
        </div>
        <div className={styles.space}></div>
        <p>CÔNG TY TNHH XÂY DỰNG NIỀM TIN VÀNG được thành lập năm 2021. Trong quá trình hoàn thiện và phát triển, chúng tôi luôn lấy uy tín và chất lượng thi công làm yếu tố quyết định hàng đầu, là giá trị thương hiệu để khách hàng luôn yên tâm với NIỀM TIN VÀNG.</p>
        <div className={styles.space}></div>
        <p>NIỀM TIN VÀNG kiến tạo nên không gian sống tiện nghi và sang trọng cho khách hàng. Chúng tôi tập trung phát triển 2 mảng chính là thiết kế và thi công nhà phố, với kinh nghiệm và sự nghiêm túc trong công việc đội ngũ kỹ thuật, kết hợp với các xưởng sản xuất trực tiếp, đến nay chúng tôi đã thi công hoàn thiện nhiều dự án, mang đến sự tin tưởng và hài lòng của quý khách hàng.</p>
        <div className={styles.space}></div>
        <hr className={styles.divider} />
        <div className={styles.space}></div>
        <div className={styles.space}></div>
        <iframe src="https://onedrive.live.com/embed?resid=F0833C89E6A7849C%21197585&amp;authkey=%21AJ-SoJNGajPIn0I&amp;em=2" width="100%" height="600px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> PDF, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
        <div className={styles.space}></div>
      </div>
    </div>
  );
}

export default About;
