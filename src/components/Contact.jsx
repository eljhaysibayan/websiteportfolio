import React, { useState } from "react";
import { Box, Typography, IconButton, Tooltip, Zoom } from "@mui/material";
import { Email, GitHub, LinkedIn, ContentCopy } from "@mui/icons-material";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("Ljhaysibayanbusiness@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    {
      icon: <Email sx={{ fontSize: 30, color: "#EA4335" }} />,
      label: "Email",
      value: "Ljhaysibayanbusiness@gmail.com",
      action: copyEmail,
      link: "mailto:Ljhaysibayanbusiness@gmail.com",
      isEmail: true,
    },
    {
      icon: <GitHub sx={{ fontSize: 30, color: "#f5f5f5" }} />,
      label: "GitHub",
      value: "github.com/eljhaysibayan",
      action: null,
      link: "https://github.com/eljhaysibayan",
      isEmail: false,
    },
    {
      icon: <LinkedIn sx={{ fontSize: 30, color: "#0A66C2" }} />,
      label: "LinkedIn",
      value: "linkedin.com/in/eljhaysibayan",
      action: null,
      link: "https://www.linkedin.com/in/eljhaysibayan/",
      isEmail: false,
    },
  ];

  const handleBoxClick = (item) => {
    if (!item.isEmail) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Box sx={{ mb: 10, px: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
          background: "linear-gradient(45deg, #ff8a00, #e52e71)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        Let's Connect!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Box
              onClick={() => handleBoxClick(item)}
              sx={{
                bgcolor: "rgba(17, 17, 17, 0.7)",
                p: 3,
                borderRadius: 3,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.36)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  backgroundColor: "rgba(30, 30, 30, 0.7)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 2,
                  wordBreak: "break-word",
                }}
              >
                {item.icon}

                {item.isEmail ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexGrow: 1,
                      width: "100%",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", mb: 0.5 }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#aaa",
                          fontSize: { xs: "0.85rem", sm: "0.95rem" },
                          wordBreak: "break-word",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                    <Tooltip
                      title={copied ? "Copied!" : "Copy email"}
                      placement="top"
                      TransitionComponent={Zoom}
                    >
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          item.action();
                        }}
                        sx={{
                          color: "#aaa",
                          "&:hover": { color: "#fff" },
                        }}
                      >
                        <ContentCopy sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", mb: 0.5 }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#aaa",
                        fontSize: { xs: "0.85rem", sm: "0.95rem" },
                        wordBreak: "break-word",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Typography
        variant="body2"
        sx={{
          mt: 4,
          textAlign: "center",
          color: "#666",
          fontStyle: "italic",
        }}
      >
        Feel free to reach out — I'm always open to new opportunities and
        collaborations!
      </Typography>
    </Box>
  );
};

export default ContactMe;
