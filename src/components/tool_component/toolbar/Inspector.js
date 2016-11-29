import React, { PropTypes } from 'react';
import '../../../scss/inspector.scss';

class Inspector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      changed: {},
    };
  }

  componentWillMount() {
    this.convertProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.convertProps(newProps);
  }

  convertProps(prop) {
    console.log(prop);
    const props = prop.info.props;
    const w = props.width ? (props.width[0] + props.width[1]) : '100%';
    const h = props.height ? (props.height[0] + props.height[1]) : '20px';
    let info = {};

    if (prop.info.componentType === 'Image') {
      info = {
        flex: props.flex || 1,
        backgroundColor: props.backgroundColor || 'black',
        display: props.display || 'flex',
        alignItems: props.alignItems || 'center',
        justifyContent: props.justifyContent || 'center',
        flexDirection: props.flexDirection || 'row',
        height: h,
        width: w,
        padding: props.padding || '20px',
        margin: props.margin !== undefined ? props.margin : '20px',
        position: props.position || 'relative',
        flexWrap: props.flexWrap || 'wrap',
        boxSizing: props.boxSizing || 'border-box',
        url: props.url,
      };
    } else if (prop.info.componentType === 'Text') {
      info = {
        fontSize: props.fontSize ? `${props.fontSize}px` : '100px',
        color: props.color || 'rgb(2, 255, 22)',
        width: 'calc(100% - 0px)',
        padding: props.padding || '10px',
        flexWrap: props.flexWrap || 'wrap',
        whiteSpace: props.whiteSpace || 'initial',
        textAlign: props.textAlign || 'left',
        content: props.content || '',
      };
    } else {
      info = {
        flex: props.flex || 1,
        backgroundColor: props.backgroundColor || 'black',
        display: props.display || 'flex',
        alignItems: props.alignItems || 'center',
        justifyContent: props.justifyContent || 'center',
        flexDirection: props.flexDirection || 'row',
        height: h,
        width: w,
        padding: props.padding || '20px',
        margin: props.margin !== undefined ? props.margin : '20px',
        position: props.position || 'relative',
        flexWrap: props.flexWrap || 'wrap',
        boxSizing: props.boxSizing || 'border-box',
      };
    }

    if (prop.info.aUrl) {
      info.link = prop.info.aUrl;
    }

    if (prop.info.props.backgroundImage) {
      info.backgroundImage = prop.info.props.backgroundImage;
    }

    this.setState({ info:info });
  }

  onChange(key, event) {
    const tempInfo = this.state.info;
    const changeInfo = this.state.changed;
    if (key === 'height' || key === 'width') {
      if (event.target.value.slice(-2) === 'px') {
        changeInfo[key] = [event.target.value.substring(0, event.target.value.length - 2), event.target.value.slice(-2)];
      } else if (event.target.value.slice(-1) === '%') {
        changeInfo[key] = [event.target.value.substring(0, event.target.value.length - 1), event.target.value.slice(-1)];
      }
    } else {
      changeInfo[key] = event.target.value;
    }

    tempInfo[key] = event.target.value;
    this.setState({
      info: tempInfo,
      changed: changeInfo,
    });

  }

  savePropChanges() {
    Object.keys(this.state.changed).map((key) => {
      this.props.updateProps(
        `${key}`,
        this.state.changed[key],
        this.props.selected,
      );
    });
  }

  clearInput(key) {
    const tempInfo = this.state.info;
    tempInfo[key] = '';
    this.setState({ info: tempInfo });
  }

  render() {
    const context = this;
    const propList = Object.keys(this.state.info).map((key, index) => {
      let standard = true;
      if (key === 'backgroundImage' ||
          key === 'content' ||
          key === 'link' ||
          key === 'color' ||
          key === 'backgroundColor' ||
          key === 'url') {
        standard = false;
      }
      return (
        <div key={`${index}-container`} className="inspector-container">
        <label key={`${index}-label`} className="inspector-label">{key}</label>
        {
          key === 'backgroundColor' ?
            <input key={index} className="inspector-input" type="color" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
            : null
        }
        {
          key === 'color' ?
            <input key={index} className="inspector-input" type="color" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
            : null
        }
        {
          key === 'link' ?
            <div key={index}>
              <input className="inspector-link-input" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
              <button className="inspector-clear-button" onClick={this.clearInput.bind(this, key)}>Clear</button>
            </div>
            : null
        }
        {
          key === 'content' ?
            <textarea key={index} className="inspector-text-input" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
            : null
        }
        {
          key === 'url' ?
            <div key={index}>
              <input className="inspector-image-input" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
              <button className="inspector-clear-button" onClick={this.clearInput.bind(this, key)}>Clear</button>
              <img className="inspection-image" src={context.state.info[key]} />
            </div>
            : null
        }
        {
          key === "backgroundImage" ?
            <div key={index}>
              <input className="inspector-image-input" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
              <button className="inspector-clear-button" onClick={this.clearInput.bind(this, key)}>Clear</button>
              <img className="inspection-image" src={context.state.info[key]} />
            </div>
            : null
        }
        {
          standard ?
            <input key={index} className="inspector-input" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
            : null
        }
        </div>
      );
    });

    return (
      <div className="inspector">
        <div className="top-bar">
          Inspector
        </div>
        {propList}
        <button className="save-button" onClick={this.savePropChanges.bind(this)}>Save</button>
      </div>
    );
  }

}


export default Inspector;