import React from "react";
import {Route, Switch} from "react-router-dom";
import UserListContainer from "./views/User/UserListContainer";
import Content from "./components/content"
function DashboardRoutes() {
    return (
        <Switch>
            <Route exact path="/"  component={Content}/>

            <Route exact path="/users"  component={UserListContainer}/>
        </Switch>
    )
}

export default DashboardRoutes;
