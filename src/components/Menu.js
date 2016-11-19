import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: 'A',
          display: 'none',
          backgroundColor: 'transparent',
          children: [
            {
              name: 'a1',
              backgroundColor: 'transparent',
            },
            {
              name: 'a2',
              backgroundColor: 'transparent',
            },
            {
              name: 'a3',
              backgroundColor: 'transparent',
            },
          ],
        },
        {
          name: 'B',
          display: 'none',
          backgroundColor: 'transparent',
          children: [
            {
              name: 'b1',
              backgroundColor: 'transparent',
            },
            {
              name: 'b2',
              backgroundColor: 'transparent',
            },
            {
              name: 'b3',
              backgroundColor: 'transparent',
            },
          ],
        },
        {
          name: 'C',
          display: 'none',
          backgroundColor: 'transparent',
          children: [
            {
              name: 'c1',
              backgroundColor: 'transparent',
            },
            {
              name: 'c2',
              backgroundColor: 'transparent',
            },
            {
              name: 'c3',
              backgroundColor: 'transparent',
            },
          ],
        },
      ],
    };
  }

  showList(index) {
    const tempLinks = this.state.links;
    tempLinks[index].display = 'block';
    tempLinks[index].backgroundColor = 'grey';
    this.setState({ links: tempLinks });
  }

  hideList(index) {
    const tempLinks = this.state.links;
    tempLinks[index].display = 'none';
    tempLinks[index].backgroundColor = 'transparent';
    this.setState({ links: tempLinks });
  }

  highlight(index, pIndex) {
    const tempLinks = this.state.links;
    tempLinks[pIndex].children[index].backgroundColor = 'pink';
    this.setState({ links: tempLinks });
  }

  unhighlight(index, pIndex) {
    const tempLinks = this.state.links;
    tempLinks[pIndex].children[index].backgroundColor = 'transparent';
    this.setState({ links: tempLinks });
  }

  render() {
    const context = this;

    const boxStyle = {
      backgroundColor: 'coral',
      width: '100%',
      height: '50px',
      borderRadius: 2,
      boxShadow: this.props.selected === this.props.id ? 'inset 0 0 0 2px #93FE3F' : 'inset 0 0 0 2px coral',
    };

    const childNode = this.state.links.map((child, index) => {
      return (
        <li
          key={child.name + 'list'}
          style={{ display: 'inline-block', backgroundColor: child.backgroundColor, width: '100px', height: '50px' }}
          onMouseEnter={context.showList.bind(context, index)}
          onMouseLeave={context.hideList.bind(context, index)}
        >
          <div style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{child.name}</div>
          <ul
            key={child.name}
            style={{ padding: '0', width: '100px', backgroundColor: child.backgroundColor, listStyle: 'none', display:child.display, position: 'absolute' }}
          >
            {
              child.children.map((c, i) => {
                return (
                  <li
                    key={c.name}
                    style={{backgroundColor: c.backgroundColor, padding: '10px 0 10px 0'}}
                    onMouseEnter={context.highlight.bind(context, i, index)}
                    onMouseLeave={context.unhighlight.bind(context, i, index)}>{c.name}</li>
                );
              })
            }
          </ul>
        </li>
      );
    });
    return (
      <div
        style={boxStyle}
        onClick={e => this.props.setSelected(e, this.props.id)}
      >
        <ul style={{ textAlign: 'center', padding: '0', margin: '0' }}>
          {childNode}
        </ul>
      </div>
    );
  }
}

export default Menu;
