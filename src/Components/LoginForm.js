import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, Box, TextField } from "@material-ui/core";
import useStyles from "./LoginFormStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginData } from "../Store/Actions";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state) => {
    return state.getLoginDataReducer;
  });
  const onSubmitHandlers = async (e) => {
    e.preventDefault();
    try {
      dispatch(fetchLoginData(email, password));
    } catch (error) {
      console.log(error);
    }
  };
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

      <form className={classes.form} onSubmit={onSubmitHandlers}>
        <Typography
          display="block"
          variant="body1"
          className={classes.form_email_label}
        >
          Email
        </Typography>

        <input
          type="text"
          className={classes.form_email_input}
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Typography
          display="block"
          variant="body1"
          className={classes.form_password_label}
        >
          Password
        </Typography>

        <input
          type="password"
          className={classes.form_password_input}
          id="pass"
          name="pass"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/forgotpassword" className={classes.form_forgptPass}>
          Forgot password?
        </Link>

        <Button
          className={classes.buttonStyle}
          variant="outlined"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
