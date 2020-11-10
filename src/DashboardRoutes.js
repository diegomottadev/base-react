import React from "react";
import {Route, Switch} from "react-router-dom";
import UserListContainer from "./views/User/UserListContainer";
import Content from "./components/content"
import UserAct from "./views/User/act/UserAct";
import UserActContainer from "./views/User/act/UserActContainer";
function DashboardRoutes() {
    return (
        <Switch>
            <Route exact path="/"  component={Content}/>

            <Route exact path="/users"  component={UserListContainer}/>
            <Route exact path="/users/new"  component={UserActContainer}/>

        </Switch>
    )
}

export default DashboardRoutes;
