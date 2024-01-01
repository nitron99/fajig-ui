import { Box, Container, Typography } from '@mui/material'
import React from 'react';

import "../../global.scss";

const Footer = () => {
  return (
    <Box
      maxWidth
      sx={{ 
        height: "500px",
        backgroundColor: "#ffc324",
        paddingTop: "50px",
      }}>
      <Container maxWidth="lg">
        <Box 
          className="flex_FSColumn"
          sx={{ height: "430px" }}>
          <Typography sx={{ 
            typography: { xs: "h5", sm: "h4", md: "h3", lg: "h3" }
          }}>
            Footer
          </Typography>

          <Typography 
            variant='subtitle1' 
            className='flexCenterCenterRow'>
            FAJIG UI
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer