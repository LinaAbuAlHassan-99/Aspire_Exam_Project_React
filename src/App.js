import { Route, Switch } from "react-router-dom";
import Card from "./pages/Card";
const App = () => {
  //localhost:3000/path domain/path
  // path='/' this is the root witch is //localhost:3000/
  return (
    <div>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/login" exact>
          <Card kind="Login" />
        </Route>
        <Route path="/forgotpassword">
          <Card kind="ForgotPassword" />
        </Route>
        <Route path="/resetpassword">
          <Card kind="ResetPassword" />
        </Route>
        <Route path="/resetpasswordsecond">
          <Card kind="ResetPasswordSecond" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
