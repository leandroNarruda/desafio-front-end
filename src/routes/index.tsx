import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FormPage from "../pages/FormPage";


const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/entrar">
        <LoginPage />
      </Route>
      <Route exact path="/formulario-de-cadastro">
        <FormPage />
      </Route>
    </Switch>
  );
};
export default Router;