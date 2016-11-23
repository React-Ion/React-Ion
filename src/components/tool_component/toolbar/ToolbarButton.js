import React, { PropTypes } from 'react';

class ToolbarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  toggleClick() {
    this.setState({ clicked: !this.state.clicked });
    setTimeout(() => this.setState({ clicked: !this.state.clicked }), 400);
  }

  render() {
    return (
      <button
        onClick={() => {
          this.props.click();
          this.toggleClick();
        }}
        className={this.state.clicked
          ? 'toolbar-button clicked'
          : 'toolbar-button'
        }
      >
        {this.props.children}
      </button>
    );
  }
}

ToolbarButton.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ToolbarButton;
