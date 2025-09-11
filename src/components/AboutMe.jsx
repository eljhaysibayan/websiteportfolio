import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMe = () => (
  <Box sx={{ mb: 10 }}>
    <Typography
      variant="h4"
      gutterBottom
      sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
    >
      About Me
    </Typography>
    <Typography variant="body1" sx={{ color: "#aaa", lineHeight: 1.7, textAlign: "justify" }}>

      I'm a fourth-year Information Technology student at Mapúa Malayan Colleges Laguna with a strong interest in both cybersecurity and software development. I'm especially drawn to areas like security architecture and threat analysis, but I also enjoy building practical solutions through code. My goal is to bridge the gap between development and security—understanding how systems work so I can help make them safer and more efficient.
    </Typography>
  </Box>
);

export default AboutMe;
