import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const technologyCategories = [
  {
    name: "Programming Languages",
    technologies: [
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "REST API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ]
  },
  {
    name: "Software & Tools",
    technologies: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "VS Community", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
      { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "MAUI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnet/dotnet-original.svg" },
    ]
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  }
];

const Technologies = () => {
  return (
    <Box sx={{ mb: 10, px: 2 }}>
      <Typography variant="h2" gutterBottom sx={{ 
        fontWeight: "bold", 
        mb: 4, 
        textAlign: "center", 
        fontSize: "2rem",
        color: "#fff"
      }}>
        Technologies I use
      </Typography>
      
      {technologyCategories.map((category, catIndex) => (
        <Box key={catIndex} sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ 
            color: "#fff", 
            fontWeight: "bold", 
            mb: 2,
            fontSize: "1.5rem",
            "&:before": {
           
            }
          }}>
            {category.name}
          </Typography>
          
          <Grid container spacing={2} sx={{ 
            maxWidth: "900px", 
            mx: "auto",
            justifyContent: "center" 
          }}>
            {category.technologies.map((tech, index) => (
              <Grid item key={index} sx={{ 
                width: "160px",
                flexBasis: "calc(20% - 16px)",
                minWidth: "160px",
                "@media (max-width: 900px)": {
                  flexBasis: "calc(25% - 16px)",
                  minWidth: "140px"
                },
                "@media (max-width: 600px)": {
                  flexBasis: "calc(33.333% - 16px)",
                  minWidth: "120px"
                }
              }}>
                <Paper sx={{ 
                  bgcolor: "#0f0f1a", 
                  p: 1,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #1a1a2e",
                  height: "30px",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "#2d2d42",
                    "& .tech-name": {
                      fontWeight: "bold"
                    }
                  }
                }}>
                  <Box 
                    component="img" 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    sx={{ 
                      width: 24, 
                      height: 24,
                      objectFit: "contain",
                      ml: 1
                    }}
                  />
                  <Typography className="tech-name" sx={{ 
                    color: "#fff", 
                    fontWeight: "500",
                    flexGrow: 1,
                    textAlign: "center",
                    fontSize: "0.85rem",
                    pr: 1,
                    transition: "font-weight 0.2s ease"
                  }}>
                    {tech.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Technologies;