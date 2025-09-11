import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Modal, 
  IconButton,
  Backdrop
} from "@mui/material";
import { Close, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Importing images
import applogo from "../static/sccare/applogo.jpg";
import welcome from "../static/sccare/Welcome.png";
import appLogin from "../static/sccare/login.png";
import appRequest from "../static/sccare/request.png";
import appRequest2 from "../static/sccare/request2.png";
import bhwDashboard from "../static/sccare/BHWDashboard.png";
import walkin from "../static/sccare/walkin.png";
import walkin2 from "../static/sccare/walkin2.png";
import recorddetails from "../static/sccare/recorddetails.png";
import recorddetails2 from "../static/sccare/requestdetails2.png";
import patientrecords from "../static/sccare/patientrecords.png";
import patientrecords2 from "../static/sccare/patientrecords2.png";
import patientrecords3 from "../static/sccare/patientrecords3.png";
import patientappointmentlist from "../static/sccare/patientappointmentlist.png";
import confirmedappointments from "../static/sccare/confirmedappointments.png";
import monthlyanal from "../static/sccare/monthlyanal.png";
import healthhistory from "../static/sccare/healthhistory.png";
import patientDashboard from "../static/sccare/PatientDashboard.png";
import patientChat from "../static/sccare/Chat.png";
import requestappointments from "../static/sccare/requestappointments.png";
import historyappointments from "../static/sccare/patientappointmenthistory.png";
import appointment from "../static/sccare/yourappointments.png";
import medication from "../static/sccare/medication.png";
import newmedication from "../static/sccare/newmedication.png";
import medecinereminder from "../static/sccare/medecinereminder.png";
import medecinereminder2 from "../static/sccare/medecinereminder2.png";
import symptom1 from "../static/sccare/addsymptom.png";
import symptom2 from "../static/sccare/symptomhistory.png";
import progress from "../static/sccare/progress.png";
import analytics from "../static/sccare/yourmonthlyanal.png";


import studentlogo from "../static/projects/studentlogo.png";
import student1 from "../static/projects/student1.png";
import student2 from "../static/projects/student2.png";
import student3 from "../static/projects/student3.png";
import student4 from "../static/projects/student4.png";
import gradingsystem from "../static/projects/gradingsystem.png";
import studentrecords2 from "../static/projects/studentrecords2.png";
import studentrecords3 from "../static/projects/studentrecords3.png";

// import retailDashboard from "../static/retaildashboard/retaildashboard.png";
// import customerPage from "../static/retaildashboard/customerpage.png";

import rpsDashboard from "../static/RPS/RPSdashboard.png";
import rpsHistory from "../static/RPS/RPSHISTORY.png";
import rpsHowTo from "../static/RPS/RPShowto.png";
import rpsRound from "../static/RPS/RPSRound.png";
import rpsside from "../static/RPS/RPSside.png";
import rpsDashboard2 from "../static/RPS/RPSdashboard2.png";
import rpsOverview from "../static/RPS/RPSOver.png";

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);

  const projects = [
    { 
      title: "SCCare+", 
      description: "A mobile health app designed to modernize and enhance the services of the Barangay San Cristobal Health Center. It streamlines appointment scheduling, facilitates online consultations, and improves communication between patients and healthcare providers.",
      description2: "Software used to develop the project: Flutter, Firebase Authentication, Firebase Firestore, Supabase.",
      images: [
        applogo,
        welcome,
        appLogin,
        appRequest,
        appRequest2,
        bhwDashboard,
        walkin,
        walkin2,
        recorddetails,
        recorddetails2,
        patientrecords,
        patientrecords2,
        patientrecords3,
        patientappointmentlist,
        confirmedappointments,
        monthlyanal,
        healthhistory,  
        patientDashboard,
        patientChat,
        requestappointments,
        historyappointments,
        appointment,
        medication,
        newmedication,
        medecinereminder,
        medecinereminder2,
        symptom1,
        symptom2,
        progress,
        analytics   
      ]
    },
    { 
      title: "Rock Paper Scissors", 
      description: "An interactive game for children that uses an Arduino-based controller and a Visual Studio powered screen to display the game interface. It enhances motor skills and provides a fun learning experience.",
      description2: "Software used to develop the project: Arduino IDE, C#, Visual Studio Community.",
      images: [
        rpsDashboard,
        rpsDashboard2,
        rpsHowTo,
        rpsside,
        rpsRound,
        rpsHistory,
        rpsOverview
      ]
    },
    { 
      title: "Student Survivor", 
       description: "An Interactive desktop game designed to enhance children's motor skills and cognitive abilities. It features a character that navigates through various challenges, promoting learning through play.",
      description2: "Software used to develop the project: C#, Windows Forms, Microsoft Access.",
      images: [
        studentlogo,
        student1,
        student2,
        student3,
        student4
      ]
    },

    { 
      title: "Student Grading System", 
      description: "A desktop web application for calculating and managing student grades per subject and term. It simplifies the grading process with automated computation.",
      description2: "Software used to develop the project: C#, Windows Forms, Microsoft Access.",
      images: [
        gradingsystem,
        studentrecords2,
        studentrecords3,
      ]
    },
  ];

  const openLightbox = (image, projectImages, imageIndex) => {
    setCurrentImage(image);
    setCurrentProjectImages(projectImages);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    setCurrentProjectImages([]);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % currentProjectImages.length;
    } else {
      newIndex = currentImageIndex === 0 ? currentProjectImages.length - 1 : currentImageIndex - 1;
    }
    setCurrentImageIndex(newIndex);
    setCurrentImage(currentProjectImages[newIndex]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      navigateImage('next');
    } else if (event.key === 'ArrowLeft') {
      navigateImage('prev');
    }
  };

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
                sx={{ 
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.02)" }
                }}
                onClick={() => openLightbox(project.images[0], project.images, 0)}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>

                <Typography variant="body2" sx={{ color: "#aaa", mb: 1, textAlign: "justify" }}>
                  {project.description}
                </Typography>

                <Typography 
                  variant="body2" 
                  sx={{ color: "#ddd", mb: 2, textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: project.description2 }}
                />
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
                      onClick={() => openLightbox(image, project.images, imgIndex + 1)}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Modal */}
      <Modal
        open={lightboxOpen}
        onClose={closeLightbox}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.9)' }
        }}
        onKeyDown={handleKeyDown}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '90vw',
          maxHeight: '90vh'
        }}>
          {/* Close Button */}
          <IconButton
            onClick={closeLightbox}
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
              zIndex: 1
            }}
          >
            <Close />
          </IconButton>

          {/* Navigation Buttons */}
          {currentProjectImages.length > 1 && (
            <>
              <IconButton
                onClick={() => navigateImage('prev')}
                sx={{
                  position: 'absolute',
                  left: -60,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                  zIndex: 1
                }}
              >
                <ArrowBackIos />
              </IconButton>
              <IconButton
                onClick={() => navigateImage('next')}
                sx={{
                  position: 'absolute',
                  right: -60,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                  zIndex: 1
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </>
          )}

          {/* Main Image */}
          <img
            src={currentImage}
            alt="Enlarged view"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
            }}
          />

          {/* Image Counter */}
          {currentProjectImages.length > 1 && (
            <Typography
              variant="body2"
              sx={{
                position: 'absolute',
                bottom: -40,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '4px 12px',
                borderRadius: '16px'
              }}
            >
              {currentImageIndex + 1} / {currentProjectImages.length}
            </Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;