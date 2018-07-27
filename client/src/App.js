import React, { Component } from 'react';

import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import Error from './views/Error';
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/Register" component={Register}/>
            <Route path="/" component={Error}/>
        </Switch>
        </div>
    );
  }
}

export default App;
