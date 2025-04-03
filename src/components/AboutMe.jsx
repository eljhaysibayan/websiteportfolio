import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMe = () => (
    <Box sx={{ mb: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
        About me
      </Typography>
      <Typography variant="body1" sx={{ color: "#aaa", lineHeight: 1.7 }}>
      I'm a fourth-year Information Technology student at Mapúa Malayan Colleges Laguna, building expertise in both cybersecurity and software development. While my primary passion lies in security architecture and threat analysis, I've cultivated strong programming skills that enable me to understand systems from both defensive and developmental perspectives.
      </Typography>
    </Box>
  );

  export default AboutMe;