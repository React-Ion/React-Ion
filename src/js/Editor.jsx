import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Draggable from 'react-draggable';
import { mapComponents, getValue } from '../lib/helpers';
import { setSelected, setPageSelected, setSelector } from '../actions/selected';
import { updateProps, updateInfos, addChild, removeChild, onRedo, onUndo, addPage } from '../actions/routes';
import { setZoom } from '../actions/setZoom';
import { toggleControls } from '../actions/toggleControls';
import { toggleTextModal, closeTextModal } from '../actions/toggleTextModal';
import EditorControls from '../components/EditorControls';
import Toolbar from '../components/Toolbar';
import ZoomPercent from '../components/ZoomPercent';
import TextInputModal from '../components/TextInputModal';
import '../scss/toolbar.scss';
import '../scss/canvas.scss';
import '../scss/editor.scss';

class Editor extends Component {
  render() {
    const {
      routes,
      selected,
      pageSelected,
      zoom,
    } = this.props;

    const pageRoute = [routes[pageSelected]];

    return (
      <div className="editor">
        <TextInputModal {...this.props} />
        <Toolbar {...this.props} />
        <EditorControls {...this.props} />
        <ZoomPercent zoom={zoom} />
        <div style={{ transform: `scale(${zoom})` }}>
          <Draggable>
            <div className="canvas">
              {mapComponents(pageRoute, selected)}
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state.routes,
    routes: state.routes.present,
    nextId: state.nextId,
    selected: state.selected,
    pageSelected: state.pageSelected,
    controlsShowing: state.controlsShowing,
    info: state.info,
    canUndo: state.routes.past.length > 0,
    canRedo: state.routes.future.length > 0,
    zoom: state.zoom,
    textModal: state.textModal,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUndo,
    onRedo,
    updateProps,
    updateInfos,
    addChild,
    removeChild,
    getValue,
    toggleControls,
    setZoom,
    toggleTextModal,
    closeTextModal,
    addPage,
    setPageSelected,
    setSelected,
    setSelector,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
