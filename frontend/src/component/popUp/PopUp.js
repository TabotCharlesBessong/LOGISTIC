
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Slide, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from './Styles.js'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const PopUp = ({title,children,open,setOpen}) => {
  const classes = useStyles()


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper>
     <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Typography variant='h4' >
          {title}
            
          </Typography>
        </DialogTitle>
        <DialogContent dividers >
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close Form 
          </Button>
          
        </DialogActions>
      </Dialog>
    </Paper>
  )
}

export default PopUp