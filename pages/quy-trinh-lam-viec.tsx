import React from "react";
import Header from "components/common/Header";
import styles from '../styles/WorkingProgress.module.css';

function WorkingProgress() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
      <Header></Header>
      <div className={styles.divider}></div>
      <h1 className={styles.h}>QUY TRÌNH LÀM VIỆC CỦA NIỀM TIN VÀNG VỚI CHỦ NHÀ</h1>
      <div className={styles.line}>
        <p className={styles.title}>BƯỚC 1:</p>
        <p>Thu thập thông tin.</p>
      </div>
      {/* <div className={styles.space}></div> */}
      <p>Tổng hợp yêu cầu của khách hàng về yêu cầu thiết kế, tiến hành khảo sát hiện trạng mặt bằng.</p>
      {/* <div className={styles.space}></div> */}
      <div className={styles.line}>
        <p className={styles.title}>BƯỚC 2:</p>
        <p>Thiết kế ý tưởng, phác thảo phương án sơ bộ.</p>
      </div>
      {/* <div className={styles.space}></div> */}
      <p>Dựa trên thông tin thu thập từ khách hàng kết hợp với khảo sát hiện trạng, NIỀM TIN VÀNG sẽ lên ý tưởng và giải pháp không gian, mặt bằng, bám sát theo yêu cầu và mục tiêu đề ra, đồng thời tư vấn thêm để sản phẩm đúng ý chủ nhà. Sau đó NIỀM TIN VÀNG lên dự toán sơ bộ chi phí đầu tư cho khách hàng dựa theo phương án thiết kế đã thống nhất.</p>
      {/* <div className={styles.space}></div> */}
      <div className={styles.line}>
        <p className={styles.title}>BƯỚC 3:</p>
        <p>Ký hợp đồng thiết kế (chỉ thực hiện khi chưa có ý định giao thầu thi công).</p>
      </div>
      <div className={styles.space}></div>
      <div className={styles.line}>
        <p className={styles.title}>BƯỚC 4:</p>
        <p>Ký hợp đồng thi công (đã bao gồm nhiệm vụ và chi phí thiết kế).</p>
      </div>
      <div className={styles.space}></div>
      <div className={styles.line}>
        <p className={styles.title}>BƯỚC 5:</p>
        <p>Triển khai thi công.</p>
      </div>
      {/* <div className={styles.space}></div> */}
      <p>Đội ngũ kỹ thuật của NIỀM TIN VÀNG sẽ triển khai thi công công trình theo thiết kế đã duyệt, đảm bảo chất lượng và tiến độ công trình.</p>
      {/* <div className={styles.space}></div> */}
      <div className={styles.line}>
        <p className={styles.title}>BƯỚC 6:</p>
        <p>Nghiệm thu, bàn giao công trình.</p>
      </div>
      {/* <div className={styles.space}></div> */}
      <p>Sau khi hoàn thành các hạng mục thi công, NIỀM TIN VÀNG sẽ vệ sinh toàn bộ công trình, hướng dẫn chủ nhà kiểm tra và sử dụng sản phẩm, ký biên bản nghiệm thu và bàn giao công trình.</p>
      {/* <div className={styles.space}></div> */}
      <p>Công trình vào giai đoạn bảo hành, NIỀM TIN VÀNG sẽ theo sát dự án để khắc phục các lỗi còn xót, thi công thêm các việc phát sinh nếu chủ đầu tư mong muốn, đảm bảo chất lượng công trình đúng ý chủ đầu tư.</p>
      <div className={styles.space}></div>
      </div>
    </div>
  );
}

export default WorkingProgress;
