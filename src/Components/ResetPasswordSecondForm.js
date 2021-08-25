import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, Box, TextField } from "@material-ui/core";
import useStyles from "./ResetPasswordSecondFormStyle";
import arrowIcon from "../Assets/arrowIcon.png";

const ResetPasswordSecondForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Div}>
      <Box component="div" display="block" className={classes.textDiv}>
        <Box component="div" display="block" className={classes.linkDiv}>
          <Link to="/" className={classes.form_Back_to_login}>
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

        <TextField
          className={classes.form_pass_input}
          variant="outlined"
          name="newpass"
          id="newpass"
          // label="Email"
          placeholder="New password"
          required
          InputProps={{
            className: classes.Placeholder,
          }}
        />

        <Typography
          display="block"
          variant="body1"
          className={classes.form_passRetype_label}
        >
          Retype new password
        </Typography>

        <TextField
          className={classes.form_passRetype_input}
          variant="outlined"
          name="newpass"
          id="newpass"
          // label="Email"
          placeholder="Retype new password"
          required
          InputProps={{
            className: classes.Placeholder,
          }}
        />

        <Button className={classes.buttonStyle} variant="outlined">
          Reset your password
        </Button>
      </form>
    </Box>
  );
};

export default ResetPasswordSecondForm;
