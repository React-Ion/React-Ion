import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

require('../scss/index.scss');

export default class Index extends Component {
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.context.router.push('/');
    // }, 3000);
  }

  render() {
    return (
      <div className="test">
        <Header />
        <h1>404.. This page is not found!</h1>
      </div>
    );
  }
}
