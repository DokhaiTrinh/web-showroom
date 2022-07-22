import type { NextPage } from "next";
import PageContainer from "../components/containers/PageContainer";
// import { Box, Grid, Typography, Divider, Button } from '@mui/material';
import styles from '../styles/Home.module.css';
// import PersonIcon from '@mui/icons-material/Person';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import ApprovalIcon from '@mui/icons-material/Approval';
// import HandymanIcon from '@mui/icons-material/Handyman';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
// import { style } from "@mui/system";
const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  const [isFlipped1, setIsFlipped1] = useState(false);

  const handleHover1 = () => {
    setIsFlipped1(!isFlipped1);
  };
  const handleOut1 = () => {
    setIsFlipped1(isFlipped1);
  };
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleHover2 = () => {
    setIsFlipped2(!isFlipped2);
  };
  const handleOut2 = () => {
    setIsFlipped2(isFlipped2);
  };
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleHover3 = () => {
    setIsFlipped3(!isFlipped3);
  };
  const handleOut3 = () => {
    setIsFlipped3(isFlipped3);
  };
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleHover4 = () => {
    setIsFlipped4(!isFlipped4);
  };
  const handleOut4 = () => {
    setIsFlipped4(isFlipped4);
  };
  return (

    <PageContainer title="Home">
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.intro}>
            <div className={styles.box}>
              NIỀM TIN VÀNG
            </div>
            <div>
              <h2>6+ kinh nghiệm thiết kế &</h2>
              <h2>xây dựng công trình</h2>
            </div>
            <div className={styles.box}>
              THIẾT KẾ NHÀ ĐẸP
            </div>
          </div>
          <div className={styles.service}>
            <h1 className={styles.category}>THIẾT KẾ NHÀ ĐẸP</h1>
            <hr className={styles.divider} />
            <div className={styles.stall}>
              <div className={styles.item}>
                <img className={styles.img} src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg" />
                <div className={styles.name}>
                  <h3>Thiết kế nhà tân cổ điển</h3>
                </div>
                <div className={styles.info}>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <p className={styles.param}>Chủ đầu tư:</p>
                    <p>Mr. Hưởng</p>
                  </div>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-geo-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                    </svg>
                    <p className={styles.param}>Vị trí:</p>
                    <p>Tp. Tây Ninh</p>
                  </div>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-building" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    <p className={styles.param}>Quy mô:</p>
                    <p>Trệt + 1 lầu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <h1 className={styles.category}>NỘI THẤT LUNG LINH</h1>
            <hr className={styles.divider} />
            <div className={styles.stall}>
              <div className={styles.item}>
                <img className={styles.img} src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg" />
                <div className={styles.name}>
                  <h3>Thiết kế nhà tân cổ điển</h3>
                </div>
                <div className={styles.info}>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <p className={styles.param}>Chủ đầu tư:</p>
                    <p>Mr. Hưởng</p>
                  </div>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-geo-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                    </svg>
                    <p className={styles.param}>Vị trí:</p>
                    <p>Tp. Tây Ninh</p>
                  </div>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-building" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    <p className={styles.param}>Quy mô:</p>
                    <p>Trệt + 1 lầu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <h1 className={styles.category}>THI CÔNG XÂY DỰNG</h1>
            <hr className={styles.divider} />
            <div className={styles.stall}>
              <div className={styles.item}>
                <img className={styles.img} src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg" />
                <div className={styles.name}>
                  <h3>Thiết kế nhà tân cổ điển</h3>
                </div>
                <div className={styles.info}>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-person-fill" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <p className={styles.param}>Chủ đầu tư:</p>
                    <p>Mr. Hưởng</p>
                  </div>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-geo-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                    </svg>
                    <p className={styles.param}>Vị trí:</p>
                    <p>Tp. Tây Ninh</p>
                  </div>
                  <div className={styles.line}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--color-primary)" className="bi bi-building" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    <p className={styles.param}>Quy mô:</p>
                    <p>Trệt + 1 lầu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <Box sx={{ width: '70%', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid container rowSpacing={10}>

              <Grid item container spacing={5}>
                <Grid item container xs={4}>
                  <Box sx={{ bgcolor: 'orange', width: '300px', height: '50px', borderRadius: '10px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>Niềm Tin Vàng</Typography>
                  </Box>
                </Grid>
                <Grid item container xs={4}
                  className={styles.grid}>
                  <Typography variant='h5' fontWeight='bold'>6+ kinh nghiệm thiết kế &</Typography>
                  <Typography variant='h5' fontWeight='bold'>xây dựng công trình</Typography>
                </Grid>
                <Grid item container xs={4}>
                  <Box sx={{ bgcolor: 'orange', width: '300px', height: '50px', borderRadius: '10px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant='h5' color='white' fontWeight='bold'>Thiết kế nhà đẹp</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item container rowSpacing={2} className={styles.grid}>
                <Grid item>
                  <Typography variant='h4' >THIẾT KẾ NHÀ ĐẸP</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider sx={{ bgcolor: 'orange' }} />
                </Grid>
                <Grid item container>
                  <Grid item container xs={4} rowSpacing={2}>
                    <Grid item>
                      <Box
                        component="img"
                        sx={{ width: '100%' }}
                        alt="The house from the offer."
                        src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg"
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant='h6' color='orange' fontWeight='bold'>Thiết kế nhà tân cổ điển</Typography>
                    </Grid>
                    <Grid item container>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <PersonIcon style={{ color: 'orange' }}></PersonIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Chủ đầu tư: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Mr.Hưởng </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <LocationOnIcon style={{ color: 'orange' }}></LocationOnIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Vị trí: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Tp. Tây Ninh </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <ApartmentIcon style={{ color: 'orange' }}></ApartmentIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Quy mô: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Trệt + 1 lầu </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container rowSpacing={2} className={styles.grid}>
                <Grid item>
                  <Typography variant='h4' >NỘI THẤT LUNG LINH</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider sx={{ bgcolor: 'orange' }} />
                </Grid>
                <Grid item container>
                  <Grid item container xs={4} rowSpacing={2}>
                    <Grid item>
                      <Box
                        component="img"
                        sx={{ width: '100%' }}
                        alt="The house from the offer."
                        src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg"
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant='h6' color='orange' fontWeight='bold'>Thiết kế nhà tân cổ điển</Typography>
                    </Grid>
                    <Grid item container>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <PersonIcon style={{ color: 'orange' }}></PersonIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Chủ đầu tư: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Mr.Hưởng </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <LocationOnIcon style={{ color: 'orange' }}></LocationOnIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Vị trí: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Tp. Tây Ninh </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <ApartmentIcon style={{ color: 'orange' }}></ApartmentIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Quy mô: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Trệt + 1 lầu </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container rowSpacing={2} className={styles.grid}>
                <Grid item>
                  <Typography variant='h4' >THI CÔNG XÂY DỰNG</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider sx={{ bgcolor: 'orange' }} />
                </Grid>
                <Grid item container>
                  <Grid item container xs={4} rowSpacing={2}>
                    <Grid item>
                      <Box
                        component="img"
                        sx={{ width: '100%' }}
                        alt="The house from the offer."
                        src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg"
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant='h6' color='orange' fontWeight='bold'>Thiết kế nhà tân cổ điển</Typography>
                    </Grid>
                    <Grid item container>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <PersonIcon style={{ color: 'orange' }}></PersonIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Chủ đầu tư: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Mr.Hưởng </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <LocationOnIcon style={{ color: 'orange' }}></LocationOnIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Vị trí: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Tp. Tây Ninh </Typography>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={1}>
                        <Grid item>
                          <ApartmentIcon style={{ color: 'orange' }}></ApartmentIcon>
                        </Grid>
                        <Grid item>
                          <Typography>Quy mô: </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>Trệt + 1 lầu </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container rowSpacing={2} className={styles.grid}>
                <Grid item>
                  <Typography variant='h4' >DỊCH VỤ</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider sx={{ bgcolor: 'orange' }} />
                </Grid>
                <Grid item container xs={3}>
                  <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                    <Box sx={{ height: '250px', width: '100%' }} onMouseOver={handleHover1} paddingTop='50px'>
                      <Box sx={{ height: '150px' }} display='flex' justifyContent='center' >
                        <Grid container className={styles.grid}>
                          <Grid item className={styles.grid} xs={12}>
                            <ApprovalIcon />
                          </Grid>
                          <Grid item className={styles.grid} xs={12}>
                            <Typography variant='h6' align='center'>XIN PHÉP XÂY DỰNG</Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ bgcolor: 'orange', height: '250px', width: '100%', padding: '20px' }} display="flex"
                      alignItems="center"
                      justifyContent="center"
                      onMouseOut={handleHover1}>
                      <Typography color='white' variant='h6' align='center'>
                        Thủ tục pháp lý, xin phép xây dựng, thủ tục hoàn công
                      </Typography>
                    </Box>
                  </ReactCardFlip>
                </Grid>
                <Grid item container xs={3}>
                  <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                    <Box sx={{ height: '250px', width: '100%' }} onMouseOver={handleHover2} paddingTop='50px'>
                      <Box sx={{ height: '150px' }} display='flex' justifyContent='center' >
                        <Grid container className={styles.grid}>
                          <Grid item className={styles.grid} xs={12}>
                            <DesignServicesIcon />
                          </Grid>
                          <Grid item className={styles.grid} xs={12}>
                            <Typography variant='h6' align='center'>THIẾT KẾ NHÀ ĐẸP</Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ bgcolor: 'orange', height: '250px', width: '100%', padding: '20px' }} display="flex"
                      alignItems="center"
                      justifyContent="center"
                      onMouseOut={handleHover2}>
                      <Typography color='white' variant='h6' align='center'>
                        Thiết kế hồ sơ kỹ thuật, bản vẽ thi công, kiến trúc, kết cấu, điện & nước
                      </Typography>
                    </Box>
                  </ReactCardFlip>
                </Grid>
                <Grid item container xs={3}>
                  <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
                    <Box sx={{ height: '250px', width: '100%' }} onMouseOver={handleHover3} paddingTop='50px'>
                      <Box sx={{ height: '150px' }} display='flex' justifyContent='center' >
                        <Grid container className={styles.grid}>
                          <Grid item className={styles.grid} xs={12}>
                            <HandymanIcon />
                          </Grid>
                          <Grid item className={styles.grid} xs={12}>
                            <Typography variant='h6' align='center'>THI CÔNG XÂY DỰNG</Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ bgcolor: 'orange', height: '250px', width: '100%', padding: '20px' }} display="flex"
                      alignItems="center"
                      justifyContent="center"
                      onMouseOut={handleHover3}>
                      <Typography color='white' variant='h6' align='center'>
                        Tổ chức và quản lý thi công xây dựng nhà
                      </Typography>
                    </Box>
                  </ReactCardFlip>
                </Grid>
                <Grid item container xs={3}>
                  <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
                    <Box sx={{ height: '250px', width: '100%' }} onMouseOver={handleHover4} paddingTop='50px'>
                      <Box sx={{ height: '150px' }} display='flex' justifyContent='center' >
                        <Grid container className={styles.grid}>
                          <Grid item className={styles.grid} xs={12}>
                            <SupervisorAccountIcon />
                          </Grid>
                          <Grid item className={styles.grid} xs={12}>
                            <Typography variant='h6' align='center'>GIÁM SÁT CÔNG TRÌNH</Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box sx={{ bgcolor: 'orange', height: '250px', width: '100%', padding: '20px' }} display="flex"
                      alignItems="center"
                      justifyContent="center"
                      onMouseOut={handleHover4}>
                      <Typography color='white' variant='h6' align='center'>
                        Thay mặt chủ nhà quản lý và giám sát công trình, đảm bảo thi công chất lượng và đúng bản vẽ
                      </Typography>
                    </Box>
                  </ReactCardFlip>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div> */}
    </PageContainer>
  );
};

export default Home;
