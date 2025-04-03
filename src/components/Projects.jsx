import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

// Importing images
import applogo from "../static/sccare/applogo.jpg";
import appLogin from "../static/sccare/applogin.jpg";
import doctorDashboard from "../static/sccare/doctordashboard.jpg";
import doctorChat from "../static/sccare/doctorchat.jpg";
import patientDashboard from "../static/sccare/patientdashboard.jpg";
import patientChat from "../static/sccare/patientchat.jpg";

import retailDashboard from "../static/retaildashboard/retaildashboard.png";
import customerPage from "../static/retaildashboard/customerpage.png";

import rpsDashboard from "../static/RPS/RPSdashboard.png";
import rpsHistory from "../static/RPS/RPSHISTORY.png";
import rpsHowTo from "../static/RPS/RPShowto.png";
import rpsRound from "../static/RPS/RPSRound.png";
import rpsside from "../static/RPS/RPSside.png";
import rpsDashboard2 from "../static/RPS/RPSdashboard2.png";

const Projects = () => {
  const projects = [
    { 
      title: "SCCare+", 
      description: "A mobile health app designed to modernize and enhance the services of the Barangay San Cristobal Health Center. It streamlines appointment scheduling, facilitates online consultations, and improves communication between patients and healthcare providers.",
      images: [
        applogo,
        appLogin,
        doctorDashboard,
        doctorChat,
        patientDashboard,
        patientChat
      ]
    },
    { 
      title: "Retail Analytics Dashboard",
      description: "Comprehensive management console featuring employee tracking, sales analytics, inventory overview, and business performance metrics. Monitor active staff, customer statistics, revenue growth, and product inventory in real-time.",
      images: [
        retailDashboard,
        customerPage
      ]
    },
    { 
      title: "Rock Paper Scissors", 
      description: "An interactive game for children that uses an Arduino-based controller and a Visual Studio Community powered screen to display the game interface",
      images: [
        rpsDashboard,
        rpsDashboard2,
        rpsHowTo,
        rpsside,
        rpsRound,
        rpsHistory
        
      ]
    },
  ];

  return (
    <Box sx={{ mb: 10 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              bgcolor: "#111", 
              color: "#fff", 
              height: "100%", 
              borderRadius: 2, 
              transition: "transform 0.2s", 
              "&:hover": { transform: "translateY(-5px)" } 
            }}>
              <CardMedia
                component="img"
                height="200"
                image={project.images[0]}
                alt={project.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa", mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, overflowX: "auto", py: 1 }}>
                  {project.images.slice(1).map((image, imgIndex) => (
                    <CardMedia
                      key={imgIndex}
                      component="img"
                      height="80"
                      image={image}
                      alt={`${project.title} preview ${imgIndex + 1}`}
                      sx={{ 
                        width: 80, 
                        borderRadius: 1,
                        cursor: "pointer",
                        transition: "transform 0.2s",
                        "&:hover": { transform: "scale(1.05)" }
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;