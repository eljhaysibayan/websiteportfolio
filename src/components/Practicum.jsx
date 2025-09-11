import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

const Practicum = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Resume</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Download the documents below:
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/Resume.pdf"  // ✅ Make sure this file is in your public folder
          download
          sx={{ my: 1 }}
          fullWidth
        >
          Download Resume
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Practicum;
