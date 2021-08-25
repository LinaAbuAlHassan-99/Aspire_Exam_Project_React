import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Div: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto",
    // textAlign: "center",
    width: "44.5%", // from 786
    height: "55.4%", // from 665.2
  },
  textDiv: {
    position: "relative",
    width: "65%", //from 350
    height: "21.4%", //from 369
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
    width: "100%", //from 228
    height: "45.5%", //from 79
  },

  linkDiv: {
    position: "relative",
    width: "44.2%", //from 228,
    height: "26.5%", //from 79 ,
    marginTop: "0%",
    marginBottom: "0%",
  },
  form_Back_to_login: {
    position: "relative",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#0d4ba7",
    textDecoration: "none",
    width: "80%", // from 101
    height: "100%", //from 21
  },
  arrowIcon: {
    width: "9%", //from 101
    height: "63.8%", //from21
    marginRight: "12.81px",
  },
  doneBox: {
    width: "100%", //from350
    height: "71%", //from 369
    marginTop: "27px",
  },
  doneDiv: {
    width: "100%", //from 350
    height: "68.8%", //from 263
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: "5px",
    marginBottom: "32px",
  },
  doneThirdForm: {
    width: "11.4%", //from 350
    height: "22%", //from 181
    marginTop: "46.59px",
    marginRight: "154.95px",
    marginBottom: "45.76px",
    marginLeft: "155.05px",
  },
  yphbrs: {
    width: "78%", //from 350
    heigt: "11.6%", //from 181
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#333333",
    // marginTop: "120px",
    marginRight: "38.5px",
    // marginBottom: "40px",
    marginLeft: "38.5px",
  },
  buttonStyle: {
    width: "100%", //from 350
    height: "19%", //from
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
    paddingRight: "134px",
    paddingBottom: "14.5px",
    paddingLeft: "134px",
    textTransform: "none",
  },
}));

export default useStyles;
