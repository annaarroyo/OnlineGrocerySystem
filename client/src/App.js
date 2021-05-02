import './App.css';
import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/login/Login";
import Products from "./components/Pages/Products";
class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
            <Router>
              <NavBar />

              <div className="pages">
                <Switch>
                  <Route exact path="/"> <Home /> </Route>
                  <Route exact path="/login"> <Login /> </Route>
                  <Route exact path="/search"> <Products /> </Route>
                </Switch>
              </div>
            </Router>
          </>
    );
  }
}

export default App;
