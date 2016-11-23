import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../scss/HomePage.scss';
import '../scss/index.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeForm: false,
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
            <div>
              <input
                type="text"
                placeholder="username"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
              />
            </div>
            <button className="submit-login">
              LOGIN
            </button>
            <button className="submit-signup">
              SIGNUP & LOGIN
            </button>
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
