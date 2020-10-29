import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from './views/Login/Login';

// User is LoggedIn
import PrivateRoute from './PrivateRoute'
import App from './App';
import Error from './views/Error/Error';


const Main = props => (
  <Switch>
    <Route path="/login" component={Login}/>
    <PrivateRoute path='/' component={App} /> 
    <Route path="*" component={Error}/>

  </Switch>
);
export default Main;