import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
const App = () => {
  //localhost:3000/path domain/path
  // path='/' this is the root witch is //localhost:3000/
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/new1" exact>
          //comp to render
        </Route>
        <Route path="/new2" exact>
          //comp to render
        </Route>
      </Switch>
    </div>
  );
};

export default App;
