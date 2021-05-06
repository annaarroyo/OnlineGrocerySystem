import './components/css/Main.css';
import React, { Component } from 'react';
import NavBar from "./components/Pages/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Shop from "./components/Pages/Shop";
import Profile from "./components/Pages/Profile";
import Cart from "./components/Pages/Cart";


class App extends Component {
  state = {
    data: null
  };

  constructor(props) {
    super(props)
        this.state = {
            cart: []
        }
  }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <>

            <Router>
              <NavBar />

              <div className="pages">
                <Switch>
                  <Route exact path="/"> <Home /> </Route>
                  <Route exact path="/login"> <Login /> </Route>
                  <Route exact path="/search"> <Shop /> </Route>
                  <Route exact path="/profile"> <Profile /> </Route>
                  <Route exact path="/cart"> <Cart /> </Route>
                </Switch>
              </div>
            </Router>
      </>
    );
  }
}

export default App;
