import { makeStyles } from "@material-ui/core/styles";
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
    marginTop: 10,
  },
  form: {
    width: "100%",
    height: "76%",
    marginTop: 27,
  },
  form_email_label: {
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
  form_email_input: {
    position: "absolute",

    width: "100%",
    height: "17%",
    marginTop: 0,
    background: "#ffffff",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderRadius: "5px",
    paddingLeft: "10px",
  },
  form_password_label: {
    width: "17.7%",
    height: "6.7%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#333333",
    marginTop: 100,
    marginBottom: 7,
  },
  form_password_input: {
    position: "absolute",
    width: "100%",
    height: "17%",
    background: "#ffffff",
    marginBottom: 21,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderRadius: "5px",
    paddingLeft: "10px",
  },

  form_forgptPass: {
    position: "absolute",
    width: "32%",
    height: "6.7%",
    marginTop: 21,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "150%",
    color: "#0d4ba7",
    marginLeft: 335,
    marginRight: 0,
    textDecoration: "none",
  },
  //   border: {
  //     borderWidth: "1px",
  //     borderRadius: "5px",
  //     borderColor: "red",
  //   },
  buttonStyle: {
    position: "absolute",
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
    textTransform: "none",
  },
}));

export default useStyles;
