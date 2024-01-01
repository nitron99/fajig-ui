import React from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
  Button
} from "@mui/material";

const Modal = ({open, setOpen}) => {
  const descriptionElementRef = React.useRef(null);
  const scroll = "paper";

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      PaperProps={{
        style: { borderRadius: 20 }}}
    >
      <DialogTitle 
        id="scroll-dialog-title" 
        className='flexCenterCenterRow'
        sx={{ marginBottom: "50px" }}>
        <Typography 
          variant='h5'
          >Test Modal</Typography>
      </DialogTitle>

      <DialogContent>
        <DialogContentText 
          sx={{ whiteSpace: "pre-wrap" }} 
          id="scroll-dialog-description" 
          ref={descriptionElementRef} 
          tabIndex={-1}
          className='flexCenterCenterRow'
          >
          <Button 
            variant='outlined'
            onClick={handleClose}>
            Close Modal
          </Button>
        </DialogContentText>
      </DialogContent>
    </Dialog>

  )
}

export default Modal