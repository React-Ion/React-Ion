const React = require('react');
const ReactDOM = require('react-dom');

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  render() {
    return (
      <div>Index</div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('App'));
