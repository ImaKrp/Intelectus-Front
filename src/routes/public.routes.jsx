import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { SignIn } from "../pages/Sign/SignIn";
import { SignUp } from "../pages/Sign/SignUp";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Redirect from="*" to="/" />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};
