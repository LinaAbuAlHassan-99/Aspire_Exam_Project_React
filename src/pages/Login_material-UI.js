import { Link } from "react-router-dom";
//import { useState } from "react";
import {
  Button,
  Typography,
  Box,
  CardMedia,
  TextField,
  Grid,
} from "@material-ui/core";
//import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./Themes";
import { makeStyles } from "@material-ui/core/styles";

import Login_BG from "../Assets/Login_BG.png";
import Epic_Academy from "../Assets/Epic_Academy.png";
import copyright from "../Assets/copyright.png";
const useStyles = makeStyles((theme) => ({
  logoContainer: {
    position: "relative",
    width: "100%", //have the 5 grid col
    height: "100vh",
    backgroundImage: `url(${Login_BG})`,
  },
  loginLogo: {
    position: "absolute",
    top: "0%",
    left: "0%",
    background: "#2582F0",
    opacity: 0.6,
    width: "100%",
    height: "100vh",
    mixBlendMode: "multiply",
  },

  EpicAcademy: {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "26%",
    height: "26%",
    transition: theme.transitions.create("transform"),
  },

  //Whight layout

  loginLayout: {
    position: "relative",
    width: "100%", //have the 7 grid col
    height: "90vh",
  },

  loginDiv: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto",
    // textAlign: "center",
  },
  textDiv: {
    width: "100%",
    height: "17%%",
    padding: "0%",
  },

  welcome: {
    width: "20%", //71
    height: "5.8%", //24,
    marginTop: "0%",
    marginBottom: "0%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "150%",
    color: "#696969",
  },
  Liya: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "150%",
    color: "#333333",
  },
  login_form: {
    width: "100%",
    height: "76%",
    marginTop: 27,
  },
  login_form_email_label: {
    width: "10%",
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
  login_form_email_input: {
    width: "100%",
    height: "17%",
    marginTop: 0,
    background: "#ffffff",
  },
  login_form_password_label: {
    width: "17.7%",
    height: "6.7%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#333333",
    marginTop: 21,
    marginBottom: 7,
  },
  login_form_password_input: {
    width: "100%",
    height: "17%",
    background: "#ffffff",
    marginBottom: 21,
  },
  Placeholder: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#acabab",
  },
  login_form_forgptPass: {
    width: "32%",
    height: "6.7%",
    marginTop: 21,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#0d4ba7",
    marginLeft: 238,
    marginRight: 0,
    textDecoration: "none",
  },
  //   border: {
  //     borderWidth: "1px",
  //     borderRadius: "5px",
  //     borderColor: "red",
  //   },
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
    paddingRight: "157px",
    paddingBottom: "14.5px",
    paddingLeft: "157px",
  },

  login_copyright: {
    display: "flex",
    flexWrap: "nowrap",
    alignContent: "stretch",
    justifyContent: "center",
    alignItems: "center",

    // width: "21%",
    // height: "5.7%",
    // border: "solid",
  },
  copyrightLogo: {
    width: 33, //"17.5%",
    height: 42, //"100%",
  },
  login_copyright_text: {
    // width: "15%",
    // height: "4.9%",
    marginLeft: 16.07,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: "150%",
    color: "#696969",
    // margin: 3px 0px 3px 49,
  },
}));

const Loginn = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={5}>
        <Box component="div" display="block" className={classes.logoContainer}>
          <Box
            component="div"
            display="block"
            className={classes.loginLogo}
          ></Box>
          <CardMedia
            image={Epic_Academy}
            title="logo_top"
            className={classes.EpicAcademy}
          />
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box component="div" display="block" className={classes.loginLayout}>
          <Box className={classes.loginDiv}>
            <Box component="div" display="block" className={classes.textDiv}>
              <Typography variant="h6" className={classes.welcome}>
                Welcome!
              </Typography>
              <Typography variant="h1" className={classes.Liya}>
                Login into your account
              </Typography>
            </Box>

            <form className={classes.login_form}>
              <Typography
                display="block"
                variant="body1"
                className={classes.login_form_email_label}
              >
                Email
              </Typography>

              <TextField
                className={classes.login_form_email_input}
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
                className={classes.login_form_password_label}
              >
                Password
              </Typography>
              <TextField
                className={classes.login_form_password_input}
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

              <Link to="/resetpass" className={classes.login_form_forgptPass}>
                Forgot password?
              </Link>

              <Button className={classes.buttonStyle} variant="outlined">
                Login
              </Button>
            </form>
          </Box>
        </Box>

        <Box className={classes.login_copyright}>
          <CardMedia
            image={copyright}
            title="copyright"
            className={classes.copyrightLogo}
          />
          <Typography
            display="block"
            variant="body1"
            className={classes.login_copyright_text}
          >
            Powered by ASPIRE <br />
            ©2021 All rights reserved.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Loginn;
