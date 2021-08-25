import { Typography, Box, CardMedia, Grid } from "@material-ui/core";
//import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./Themes";
import useStyles from "./CardStyle";

import LoginForm from "../Components/LoginForm";
import ResetPasswordForm from "../Components/ResetPasswordForm";
import ResetPasswordSecondForm from "../Components/ResetPasswordSecondForm";
import ResetPasswordThirdForm from "../Components/ResetPasswordThirdForm";

import Epic_Academy from "../Assets/Epic_Academy.png";
import copyright from "../Assets/copyright.png";

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
