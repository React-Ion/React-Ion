import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTextModal } from '../../../actions/toggleTextModal';
import PreviewDisplay from '../../../components/tool_component/inspector/PreviewDisplay';

// const mapStateToProps = state => (
//   {
//     url: state.info.aUrl,
//   }
// );

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleTextModal,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(PreviewDisplay);
