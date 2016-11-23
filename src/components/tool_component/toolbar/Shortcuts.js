import React from 'react';

class Shortcuts extends React.Component {
  componentWillMount() {
    document.addEventListener('keypress', (e) => {
      if (e.ctrlKey) {
        switch (e.charCode) {
          case 26:
            // Z undo
            if (this.props.canUndo) {
              this.props.onUndo();
            }
            break;
          case 25:
            // Y redo
            if (this.props.canRedo) {
              this.props.onRedo();
            }
            break;
          case 2:
            // B Create Block
            this.props.addChild('Block', {
              backgroundColor: 'rgba(255,255,255,.1)',
              flex: 1,
              height: [50, '%'],
              width: [20, '%'],
              margin: '20px',
              flexDirection: 'row' },
              `Block${this.props.nextId}`,
              this.props.selected,
              this.props.nextId,
            );
            break;
          case 20:
            // T Create Text
            const createText = (value) => {
              this.props.addChild(
                'Text',
                { content: value, fontSize: 12, color: 'white' },
                `text${this.props.nextId}`,
                this.props.selected,
                this.props.nextId,
              );
            };

            this.props.toggleTextModal(
              'enter text',
              'text',
              createText,
            );
            break;
          case 9:
            // I Create Image
            const addImage = (value) => {
              this.props.addChild('Image', {
                flex: 1,
                height: [50, '%'],
                width: [20, '%'],
                margin: '20px',
                flexDirection: 'row',
                url: value },
                `Image${this.props.nextId}`,
                this.props.selected,
                this.props.nextId,
              );
            };

            this.props.toggleTextModal(
              'enter link url',
              'text',
              addImage,
            );
            break;
          case 12:
            // L Add Link
            const addLink = (value) => {
              this.props.updateInfos(
                'aUrl',
                value,
                this.props.selected,
              );
            };

            this.props.toggleTextModal(
              'enter link url',
              'text',
              addLink,
            );
            break;
          case 17:
            // Q Change to row
            this.props.updateProps(
              'flexDirection',
              'row',
              this.props.selected,
            );
            break;
          case 23:
            // W Change to column
            this.props.updateProps(
              'flexDirection',
              'column',
              this.props.selected,
            );
            break;
          default:
            break;
        }
      }
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Shortcuts;
