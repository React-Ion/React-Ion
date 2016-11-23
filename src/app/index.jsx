import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import { login, signup } from '../lib/api-methods';
import '../scss/HomePage.scss';
import '../scss/index.scss';

const loginHandler = (e) => {
  e.preventDefault();
  const form = document.getElementById('login-form');
  const username = form.elements[0].value;
  const password = form.elements[1].value;
  // login(username, password);
    // .then((user) => {
    //   if (user) { this.setState({ loggedIn: true }); }
    // });
};

const signupHandler = (e) => {
  e.preventDefault();
  const form = document.getElementById('login-form');
  const username = form.elements[0].value;
  const password = form.elements[1].value;
  // signup(username, password);
    // .then((user) => {
    //   if (user) { this.setState({ loggedIn: true }); }
    // });
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeForm: false,
      loggedIn: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({ activeForm: !this.state.activeForm });
  }


  render() {
    return (
      <div className="home-page">
        <div className="top-bar">
          <button
            className="login-signup"
            onClick={this.toggleForm}
          > LOGIN | SIGNUP
          </button>
        </div>
        <div className="banner">
          <div>
            <span> REACT-ION </span>
          </div>
        </div>
        <div
          className={this.state.activeForm
            ? 'form-visible'
            : 'form-hidden'
          }
        >
          <div className="login-signup-form">
            <form id="login-form">
              <input
                type="text"
                placeholder="username"
              />
              <input
                type="password"
                placeholder="password"
              />
              <button type="submit" className="submit-login" onClick={loginHandler}>
                LOGIN
              </button>
              <button type="submit" className="submit-signup" onClick={signupHandler}>
                SIGNUP & LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('App'));

export default store;
