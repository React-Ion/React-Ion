import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import Editor from '../containers/tool_component/Editor';
import '../scss/index.scss';

const EditorApp = () => (
  <Provider store={store}>
    <Editor />
  </Provider>
);

ReactDOM.render(<EditorApp />, document.getElementById('App'));
