import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import NotFound from "./NotFound";
import UserHome from "./UserHome";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Users} />
    {/* <Route path="/user/:id" component={UserHome} /> */}
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Routes;
