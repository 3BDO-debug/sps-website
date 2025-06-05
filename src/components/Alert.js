"use client";

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import useAlertStore from "@/stores/useAlertStore";

const MUIAlert = React.forwardRef(function MUIAlert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Alert() {
  const { triggered, type, message, triggerAlert } = useAlertStore();

  const handleClose = () => {
    triggerAlert({ triggered: false, type: "", message: "" });
  };

  return (
    <Snackbar open={triggered} autoHideDuration={6000} onClose={handleClose}>
      <MUIAlert
        onClose={handleClose}
        severity={type}
        sx={{ width: "100%", color: "white" }}
      >
        {message}
      </MUIAlert>
    </Snackbar>
  );
}

export default Alert;
