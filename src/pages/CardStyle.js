import { makeStyles } from "@material-ui/core/styles";
import Login_BG from "../Assets/Login_BG.png";
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

export default useStyles;
