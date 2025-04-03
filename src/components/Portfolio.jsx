import React from "react";
import { Container, Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Technologies from "./Technologies";
import ContactMe from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <Box sx={{ bgcolor: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: "#0a0a0a", 
          boxShadow: "none", 
          borderBottom: "1px solid #222",
          zIndex: (theme) => theme.zIndex.drawer + 1 
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Eljhay Sibayan
          </Typography>
          <Button color="inherit" sx={{ textTransform: "none" }}>Home</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>Projects</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>About</Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>Contact</Button>
        </Toolbar>
      </AppBar>
      
      <Container 
        maxWidth="md" 
        sx={{ 
          py: 8,
          pt: '96px',
          minHeight: 'calc(100vh - 64px)'
        }}
      >
        <Header />
        <AboutMe />
        <Projects /> 
        <Technologies /> 
        <ContactMe />
      </Container>
      
      <Footer />
    </Box>
  );
};

export default Portfolio;