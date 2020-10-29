import React, { Component } from 'react'
import DashboardRoutes from './DashboardRoutes';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
  // check if user is authenticated and storing authentication data as states if true
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
  }
  // 4.1
  render() {
    return (
      <div>
        
        <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
        <Sidebar/>
        <DashboardRoutes/>
        <Footer />
      </div>
    )
  }
}
export default App;