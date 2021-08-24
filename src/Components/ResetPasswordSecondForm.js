import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Typography, Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import arrowIcon from "../Assets/arrowIcon.png";
const useStyles = makeStyles((theme) => ({
  Div: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto",
    // textAlign: "center",
  },
  textDiv: {
    width: "100%",
    height: "17%",
    padding: "0%",
  },

  RyP: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "150%",
    color: "#333333",
    marginTop: 22,
  },
  form: {
    width: "100%",
    height: "76%",
    marginTop: 27,
  },
  form_pass_label: {
    width: "39%",
    height: "6.7%",
    fontFamily: "Roboto",
    fontFtyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    margin: 0,
    marginBottom: 7,
    color: "#333333",
  },
  form_pass_input: {
    width: "100%",
    height: "17%",
    marginTop: 0,
    background: "#ffffff",
  },
  form_passRetype_label: {
    width: "39%",
    height: "6.7%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#333333",
    marginTop: "32px",
    marginBottom: "7px",
  },
  form_passRetype_input: {
    width: "100%",
    height: "17%",
    background: "#ffffff",
  },
  Placeholder: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#acabab",
  },
  buttonStyle: {
    width: "100%",
    height: "16%",
    marginTop: "32px",
    background: "#00b761",
    borderRadius: "10px",
    fontFamily: " Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "150%",
    border: "none",
    color: "#ffffff",
    paddingTop: "14.5px",
    paddingRight: "109px",
    paddingBottom: "14.5px",
    paddingLeft: "109px",
    textTransform: "none",
  },
  linkDiv: {
    position: "relative",
    width: "28.8%", //101,
    height: "6.7%", //21,
    marginTop: "0%",
    marginBottom: "0%",
  },
  arrowIcon: {
    width: "7.2%",
    height: "63.8%",
    marginRight: "12.81px",
  },
  form_Back_to_login: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#0d4ba7",
    textDecoration: "none",
    top: "2%",
    width: "80%",
    height: "100%",
  },
}));
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
