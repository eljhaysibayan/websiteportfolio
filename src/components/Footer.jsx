import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box sx={{ bgcolor: "#0a0a0a", p: 3, borderTop: "1px solid #222", textAlign: "center" }}>
    <Typography variant="body2" sx={{ color: "#666" }}>
      © 2021 - 2025 Eljhay Sibayan. All rights reserved.
    </Typography>
    <Typography variant="body2" sx={{ color: "#666", mt: 1, fontSize: "0.75rem" }}>
      Created with ❤️ and ☕ in the Philippines
    </Typography>
  </Box>
);

export default Footer;