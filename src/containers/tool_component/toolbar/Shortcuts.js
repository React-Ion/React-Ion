import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onRedo, onUndo, updateProps, addChild, removeChild, updateInfos } from '../../../actions/routes';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import { setZoom } from '../../../actions/setZoom';
import Shortcuts from '../../../components/tool_component/toolbar/Shortcuts';

const mapStateToProps = state => (
  {
    canUndo: state.routes.appPages[state.pageSelected].past.length > 0,
    canRedo: state.routes.appPages[state.pageSelected].future.length > 0,
    routes: state.routes.appPages,
    nextId: state.nextId,
    pageSelected: state.pageSelected,
    selected: state.selected,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onUndo,
    onRedo,
    setZoom,
    addChild,
    updateProps,
    updateInfos,
    toggleTextModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Shortcuts);
