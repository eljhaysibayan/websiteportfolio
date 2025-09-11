import React, { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Technologies from "./Technologies";
import ContactMe from "./Contact";
import Footer from "./Footer";
import Practicum from './Practicum';

const Portfolio = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [practicumOpen, setPracticumOpen] = useState(false);
  const openPracticumModal = () => setPracticumOpen(true);
  const closePracticumModal = () => setPracticumOpen(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  const navItems = [
    { label: "Home", ref: headerRef },
    { label: "Practicum", action: openPracticumModal },
    { label: "Projects", ref: projectsRef },
    { label: "Technologies", ref: technologiesRef },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <Box sx={{ bgcolor: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#0a0a0a",
          boxShadow: "none",
          borderBottom: "1px solid #222",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Eljhay Sibayan
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 200, bgcolor: "#0a0a0a", height: "100%" }}>
                  <List>
                    {navItems.map((item, index) => (
                      <ListItem
                        button
                        key={index}
                        onClick={() => {
                          item.ref ? scrollToSection(item.ref) : item.action?.();
                          setDrawerOpen(false);
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{ sx: { color: "#fff" } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => {
                  item.ref ? scrollToSection(item.ref) : item.action?.();
                }}
                sx={{ textTransform: "none" }}
              >
                {item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 8, pt: "96px" }}>
        <Box ref={headerRef} sx={{ scrollMarginTop: "100px", my: 10 }}>
          <Header />
        </Box>
        <Box ref={aboutRef} sx={{ scrollMarginTop: "100px", my: 10 }}>
          <AboutMe />
        </Box>
        <Box ref={projectsRef} sx={{ scrollMarginTop: "100px", my: 10 }}>
          <Projects />
        </Box>
        <Box ref={technologiesRef} sx={{ scrollMarginTop: "100px", my: 10 }}>
          <Technologies />
        </Box>
        <Box ref={contactRef} sx={{ scrollMarginTop: "100px", my: 10 }}>
          <ContactMe />
        </Box>
      </Container>

      <Footer />

      {/* Practicum Modal */}
      <Practicum open={practicumOpen} handleClose={closePracticumModal} />
    </Box>
  );
};

export default Portfolio;
