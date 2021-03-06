import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import CustomerList from './components/CustomerList';
import CustomerEdit from './components/CustomerEdit.js';

class App extends Component {
  render() {
    return (
      < Router >
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/customers' exact={true} component={CustomerList} />
        <Route path='/customers/:id' component={CustomerEdit}/>
      </Switch>
      </Router >
    )

  }

}

export default App;
