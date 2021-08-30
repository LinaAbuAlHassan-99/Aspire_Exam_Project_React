import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, Box, TextField } from "@material-ui/core";
import useStyles from "./ResetPasswordFormStyle";
import arrowIcon from "../Assets/arrowIcon.png";

const ResetPasswordSecondForm = () => {
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

      <form className={classes.form}>
        <Typography
          display="block"
          variant="body1"
          className={classes.form_pass_label}
        >
          New password
        </Typography>

        <input
          type="password"
          className={classes.form_pass_input}
          id="newpass"
          name="newpass"
          placeholder="New password"
          required
        />

        <Typography
          display="block"
          variant="body1"
          className={classes.form_passRetype_label}
        >
          Retype new password
        </Typography>

        <input
          type="password"
          className={classes.form_passRetype_input}
          id="newpassconf"
          name="newpassconf"
          placeholder="Retype new password"
          required
        />
        <Button className={classes.buttonStyle} variant="outlined">
          Reset your password
        </Button>
      </form>
    </Box>
  );
};

export default ResetPasswordSecondForm;
