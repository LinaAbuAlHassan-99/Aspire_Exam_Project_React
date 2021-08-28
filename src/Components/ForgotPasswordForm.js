import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, Box, TextField } from "@material-ui/core";
import useStyles from "./ResetPasswordFormStyle";

import arrowIcon from "../Assets/arrowIcon.png";

const ResetPasswordForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Div}>
      <Box component="div" display="block" className={classes.textDiv}>
        <Box component="div" display="block" className={classes.linkDiv}>
          <Link to="/" className={classes.form_Back_to_login}>
            <img src={arrowIcon} alt="arrow" className={classes.arrowIcon} />
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
          className={classes.form_email_label}
        >
          Email
        </Typography>

        <TextField
          className={classes.form_email_input}
          variant="outlined"
          name="email"
          id="email"
          // label="Email"
          placeholder="Email"
          required
          InputProps={{
            className: classes.Placeholder,
          }}
        />

        <Button className={classes.buttonStyle} variant="outlined">
          Send reset link
        </Button>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
