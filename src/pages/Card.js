import { Typography, Box, CardMedia, Grid } from "@material-ui/core";
//import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./Themes";
import { makeStyles } from "@material-ui/core/styles";

import LoginForm from "../Components/LoginForm";
import ResetPasswordForm from "../Components/ResetPasswordForm";
import ResetPasswordSecondForm from "../Components/ResetPasswordSecondForm";
import ResetPasswordThirdForm from "../Components/ResetPasswordThirdForm";
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
  Layout: {
    position: "relative",
    width: "100%", //have the 7 grid col
    height: "90vh",
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

const Card = (props) => {
  const classes = useStyles();
  const isLogin = props.kind === "Login";
  const isReset = props.kind === "ResetPassword";
  const isResetSeconde = props.kind === "ResetPasswordSecond";
  const isResetThird = props.kind === "ResetPasswordThird";

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
        <Box component="div" display="block" className={classes.Layout}>
          {isLogin && <LoginForm />}
          {isReset && <ResetPasswordForm />}
          {isResetSeconde && <ResetPasswordSecondForm />}
          {isResetThird && <ResetPasswordThirdForm />}
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

export default Card;
