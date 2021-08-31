import { makeStyles } from "@material-ui/core/styles";
import Login_BG from "../Assets/Login_BG.png";
const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Login_BG})`,
    position: "relative",
  },

  loginLogo: {
    position: "absolute",
    background: "#2582F0",
    opacity: 0.6,
    width: "100%",
    height: "100%",
    mixBlendMode: "multiply",
  },

  EpicAcademy: {
    position: "absolute",
    top: "40.5%",
    left: "36.8%",
    width: "26%",
    height: "26%",
  },
  Layout: {
    position: "relative",
    width: "100%",
    height: "100vh",
  },

  login_copyright: {
    position: "relative",
    width: "23.6%",
    hight: "40.1%",
    top: "89.9%",
    left: "38%",
  },
  copyrightLogo: {
    position: "absolute",
    width: "17.5%",
    hight: "100%",
  },
  login_copyright_text: {
    position: "absolute",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.86vw",
    lineHeight: "150%",
    color: "#696969",
    width: "73.9%",
    hight: "85.7%",
    marginTop: "0.1953125vw",
    marginLeft: "3.1901041666666665vw",
  },
}));

export default useStyles;
