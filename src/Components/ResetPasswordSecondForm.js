import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, Box, CardMedia } from "@material-ui/core";
import useStyles from "./ResetPasswordSecondFormstyle";
import arrowIcon from "../Assets/arrowIcon.png";
import DoneThirdForm from "../Assets/DoneThirdForm.png";

const ResetPasswordThirdForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Div}>
      <Box component="div" display="block" className={classes.textDiv}>
        <Box component="div" display="block" className={classes.linkDiv}>
          <Link to="/login" className={classes.form_Back_to_login}>
            <img src={arrowIcon} alt="E" className={classes.arrowIcon} />
            Back to login
          </Link>
        </Box>
        <Typography variant="h1" className={classes.RyP}>
          Reset your Password
        </Typography>
      </Box>
      <Box component="div" display="block" className={classes.doneBox}>
        <Box component="div" display="block" className={classes.doneDiv}>
          <CardMedia
            image={DoneThirdForm}
            title="donethirdform"
            className={classes.doneThirdForm}
          />
          <Typography variant="body1" className={classes.yphbrs}>
            Your password has been reset successfully!
          </Typography>
        </Box>
        <Button className={classes.buttonStyle} variant="outlined">
          Back to login
        </Button>
      </Box>
    </Box>
  );
};
export default ResetPasswordThirdForm;
