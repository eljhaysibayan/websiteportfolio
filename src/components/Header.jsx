import React from "react";
import { Box, Typography } from "@mui/material";
import { Security, Code } from "@mui/icons-material";

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
      <Security fontSize="large" /> 
      Hi, I'm Eljhay Sibayan
      <Code fontSize="large" />
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
      IT Security Student | Secure Code Enthusiast | Future Cybersecurity Specialist
    </Typography>
  </Box>
);

export default Header;