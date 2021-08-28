import { Typography, Box, CardMedia, Grid } from "@material-ui/core";
//import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./Themes";
import useStyles from "./CardStyle";

import LoginForm from "../Components/LoginForm";
import ForgotPasswordForm from "../Components/ForgotPasswordForm";
import ResetPasswordSecondForm from "../Components/ResetPasswordSecondForm";
import ResetPasswordThirdForm from "../Components/ResetPasswordThirdForm";

import Epic_Academy from "../Assets/Epic_Academy.png";
import copyright from "../Assets/copyright.png";

const Card = (props) => {
  const classes = useStyles();
  const isLogin = props.kind === "Login";
  const isFogot = props.kind === "ForgotPassword";
  const isResetSeconde = props.kind === "ResetPasswordSecond";
  const isResetThird = props.kind === "ResetPasswordThird";

  return (
    <Grid container>
      <Grid item lg={5} xs={5}>
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

      <Grid item lg={7} xs={7}>
        <Box component="div" display="block" className={classes.Layout}>
          {isLogin && <LoginForm />}
          {isFogot && <ForgotPasswordForm />}
          {isResetSeconde && <ResetPasswordSecondForm />}
          {isResetThird && <ResetPasswordThirdForm />}

          <Box className={classes.login_copyright}>
            <img
              src={copyright}
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default Card;
