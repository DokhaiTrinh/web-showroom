import type { NextPage } from "next";
import PageContainer from "../components/containers/PageContainer";
import { Box, Grid, Typography, Divider, Button } from '@mui/material';
import styles from '../styles/Home.module.css';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ApprovalIcon from '@mui/icons-material/Approval';
import HandymanIcon from '@mui/icons-material/Handyman';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
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
      <div>
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
      </div>
    </PageContainer>
  );
};

export default Home;
