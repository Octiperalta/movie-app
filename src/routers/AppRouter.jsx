import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppMain from "../components/AppMain";
import ContentNav from "../components/ContentNav";
import UserNav from "../components/UserNav";

function AppRouter() {
  return (
    <Router>
      <UserNav />
      <Switch>
        <Route path='/settings'>
          <div>Settings</div>
        </Route>
        <Switch>
          <Route path='/home/movies'>
            <AppMain />
            <ContentNav />
          </Route>
        </Switch>
      </Switch>
    </Router>
  );
}

export default AppRouter;
