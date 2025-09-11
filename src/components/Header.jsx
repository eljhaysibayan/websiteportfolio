import React from "react";
import { Box, Typography } from "@mui/material";


const Header = () => (
  <Box sx={{ 
    mb: 10, 
    textAlign: "center",
    px: 2 // Added padding for mobile responsiveness
  }}>
    <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2
      }}
    >
      
      Hi, I'm Eljhay Sibayan
      
    </Typography>
    
    <Typography 
      variant="h5" 
      sx={{ 
        color: "#aaa", 
        fontWeight: "normal",
        maxWidth: "800px",
        mx: "auto",
        lineHeight: 1.6
      }}
    >
      Information Technology Student
    </Typography>
  </Box>
);

export default Header;