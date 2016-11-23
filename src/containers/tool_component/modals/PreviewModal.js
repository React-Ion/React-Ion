import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeTextModal } from '../../../actions/toggleTextModal';
import PreviewModal from '../../../components/tool_component/modals/PreviewModal';

const mapStateToProps = state => (
  {
    textModal: state.textModal,
    routes: state.routes.appPages,
    pageSelected: state.pageSelected,
    selected: state.selected,
  }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({ closeTextModal }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PreviewModal);
