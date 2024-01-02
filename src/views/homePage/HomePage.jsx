import React, { useState } from 'react';

import { 
  Box, 
  Button, 
  Grid, 
  Link, 
  Typography 
} from '@mui/material';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import TheatersIcon from '@mui/icons-material/Theaters';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import BoltIcon from '@mui/icons-material/Bolt';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

import Modal from '../../components/modals/Modal';

import "./styles.scss";
import "../../global.scss";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box>

      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
        />

      <Box
        maxWidth
        sx={{ height: "100vh", marginBottom: "100px", gap: "40px", paddingTop: "140px" }}
        className="flexCenterCenterColumn">
        <Typography 
          sx={{ 
            typography: { xs: "h3", sm: "h2", md: "h2", lg: "h1" },
            textShadow: "1px 1px 80px #eb4034",
          }}
          >
          FAJIG <span style={{ color: "#ffc324", textShadow: "1px 1px 100px #e1e1e1",  }}>UI</span>
        </Typography>
        <Typography 
          variant='subtitle1'>
          Made with&nbsp;
          <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer">
            MUI
          </Link>
        </Typography>

        <Typography 
          variant='subtitle2'>
          Demonstration of individual UI components&nbsp;
          <Link href="https://fajig-demo.netlify.app/" target="_blank" rel="noopener noreferrer">
            Site Demo
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{ marginBottom: "300px", }}>
        <Typography  sx={{ 
            typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" },
            marginBottom: "100px"
          }}>
          Color Palette
        </Typography>
        <Grid container className='flexCenterSBRow' rowGap={2}>
          <Grid item xs={12} sm={5.8} md={2.8} lg={2.8} className="color__card" sx={{ backgroundColor: "#0f1922", color: "white" }}>
            <Typography sx={{ typography: { xs: "h4", sm: "h4", md: "h4", lg: "h4" } }}>#0f1922</Typography>
          </Grid>
          <Grid item xs={12} sm={5.8} md={2.8} lg={2.8} className="color__card" sx={{ backgroundColor: "#eb4034", color: "white" }}>
            <Typography sx={{ typography: { xs: "h4", sm: "h4", md: "h4", lg: "h4" } }}>#eb4034</Typography>
          </Grid>
          <Grid item xs={12} sm={5.8} md={2.8} lg={2.8} className="color__card" sx={{ backgroundColor: "#ffc324", color: "white" }}>
            <Typography sx={{ typography: { xs: "h4", sm: "h4", md: "h4", lg: "h4" } }}>#ffc324</Typography>
          </Grid>
          <Grid item xs={12} sm={5.8} md={2.8} lg={2.8} className="color__card" sx={{ backgroundColor: "#e1e1e1", color: "white" }}>
            <Typography sx={{ typography: { xs: "h4", sm: "h4", md: "h4", lg: "h4" } }}>#e1e1e1</Typography>
          </Grid>
        </Grid>
      </Box>


      <Box
        sx={{ marginBottom: "300px" }}>
        <Typography  sx={{ 
            typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" },
            marginBottom: "100px"
          }}>
          Typography
        </Typography>

        <Box className="flexCenterCenterColumn" sx={{ gap: "20px" }}>
          <Typography sx={{ 
            typography: { xs: "h3", sm: "h2", md: "h2", lg: "h2" },
            marginBottom: "80px"
          }}>Urbanist Font</Typography>
          <i><Typography variant='h5'>Default Samples</Typography></i>
          <Typography sx={{ 
            typography: { xs: "h3", sm: "h2", md: "h1", lg: "h1" },
          }}>h1. Heading</Typography>
          <Typography sx={{ 
            typography: { xs: "h4", sm: "h3", md: "h2", lg: "h2" },
          }}>h2. Heading</Typography>
          <Typography sx={{ 
            typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" },
          }}>h3. Heading</Typography>
          <Typography sx={{ 
            typography: { xs: "h6", sm: "h5", md: "h4", lg: "h4" },
          }}>h4. Heading</Typography>
          <Typography sx={{ 
            typography: { xs: "h6", sm: "h6", md: "h5", lg: "h5" },
          }}>h5. Heading</Typography>
          <Typography sx={{ 
            typography: { xs: "h6", sm: "h6", md: "h6", lg: "h6" },
          }}>h6. Heading</Typography>
          <Typography variant='subtitle1'>subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Typography variant='subtitle2'>subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Typography variant='body1'>body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Typography variant='body2'>body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Typography variant='button'>button text</Typography>
          <Typography variant='caption'>caption text</Typography>
        </Box>       
      </Box>

      <Box
        sx={{ marginBottom: "300px" }}>
        <Typography  sx={{ 
            typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" },
            marginBottom: "60px"
          }}>
          Buttons
        </Typography>
        <Grid container className='flexCenterCenterRow' gap={2} rowGap={4}>
          <Grid item xs={12} sm={2.8} md={2.8} lg={2.8} className='flexCenterCenterRow'>
            <Button variant="text">Text</Button>
          </Grid>
          <Grid item xs={12} sm={2.8} md={2.8} lg={2.8} className='flexCenterCenterRow'>
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid item xs={12} sm={2.8} md={2.8} lg={2.8} className='flexCenterCenterRow'>
            <Button variant="outlined">Outlined</Button>
          </Grid>
        </Grid>
      </Box>


      <Box
        sx={{ marginBottom: "300px" }}>
        <Typography  sx={{ 
            typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" },
            marginBottom: "60px"
          }}>
          Links
        </Typography>
        <Box className="flexCenterCenterRow">
          <Link href="#">Link</Link>
        </Box>
      </Box>

      <Box
        sx={{ marginBottom: "300px" }}>
        <Typography  sx={{ 
            typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" },
            marginBottom: "60px"
          }}>
          Icons
        </Typography>
        
        <Box className="flexCenterCenterColumn" sx={{ gap: "20px" }}>
          <Typography variant='h5'>Material Icons</Typography>
          <Box className="flexCenterCenterRow" sx={{ gap: "20px" }}>
            <AcUnitIcon fontSize='large' sx={{ color: "#ffc324" }} />
            <AgricultureIcon fontSize='large' sx={{ color: "#0f1922" }} />
            <FavoriteBorderIcon fontSize='large' sx={{ color: "#eb4034" }} />
            <FilterHdrIcon fontSize='large' sx={{ color: "#0f1922" }} />
          </Box>
          <Box className="flexCenterCenterRow" sx={{ gap: "20px" }}>
            <TheatersIcon fontSize='large' sx={{ color: "#0f1922" }}  />
            <BlurOnIcon fontSize='large'sx={{ color: "#eb4034" }} />
            <BoltIcon fontSize='large' sx={{ color: "#ffc324" }} />
            <DirectionsBikeIcon fontSize='large' sx={{ color: "#eb4034" }} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{ marginBottom: "300px" }}>
        <Typography  sx={{ 
            typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" },
            marginBottom: "60px"
          }}>
          Modal
        </Typography>
        
        <Box className="flexCenterCenterRow">
          <Button variant='contained'
            onClick={() => {
              setModalOpen(!modalOpen);
            }}>Open Modal</Button>

        </Box>
      </Box>
    </Box>
  )
}

export default HomePage;
