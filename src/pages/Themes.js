import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
// const styles = theme => ({
//   textField: {
//       width: '90%',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       paddingBottom: 0,
//       marginTop: 0,
//       fontWeight: 500
//   },
//   input: {
//       color: 'white'
//   }
// });

export default theme;
