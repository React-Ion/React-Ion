import { connect } from 'react-redux';
import Editor from '../../components/tool_component/Editor';

const mapStateToProps = state => ({
  routes: state.routes.appPages,
  selected: state.selected,
  pageSelected: state.pageSelected,
  zoom: state.zoom,
});

export default connect(mapStateToProps)(Editor);
