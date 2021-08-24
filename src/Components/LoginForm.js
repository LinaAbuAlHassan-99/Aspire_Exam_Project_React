import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, Box, TextField } from "@material-ui/core";
import useStyles from "./LoginFormStyle";

const LoginForm = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.Div}>
      <Box component="div" display="block" className={classes.textDiv}>
        <Typography variant="h6" className={classes.welcome}>
          Welcome!
        </Typography>
        <Typography variant="h1" className={classes.Liya}>
          Login into your account
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

        <Typography
          display="block"
          variant="body1"
          className={classes.form_password_label}
        >
          Password
        </Typography>
        <TextField
          className={classes.form_password_input}
          variant="outlined"
          name="password"
          // label="Password"
          placeholder="Password"
          type="password"
          id="password"
          required
          InputProps={{
            className: classes.Placeholder, // && classes.border,
          }}
        />

        <Link to="/resetpassword" className={classes.form_forgptPass}>
          Forgot password?
        </Link>

        <Button className={classes.buttonStyle} variant="outlined">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
