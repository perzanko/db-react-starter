import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import ExampleComponent from './../components/ExampleComponent';

/**
 * Main container of app.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {


  constructor(props) {
    super(props);
    this.example = '';
  }


  componentDidMount() {
    window.scrollTo(0, 0);
  }


  render() {
    console.log('chuj');
    return (
      <Router>
        <Route exact path="/" component={ExampleComponent} />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    Dumeo: state,
  };
}

export default connect(mapStateToProps)(App);
