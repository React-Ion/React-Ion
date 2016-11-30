import store from '../store/store';

export const UPDATE_PROPS = 'UPDATE_PROPS';
export const UPDATE_INFOS = 'UPDATE_INFOS';
export const ADD_CHILD = 'ADD_CHILD';
export const GET_VALUE = 'GET_VALUE';
export const REMOVE_CHILD = 'REMOVE_CHILD';
export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const ADD_PAGE = 'ADD_PAGE';
export const GET_INFO = 'GET_INFO';
export const UPDATE_ROUTES = 'UPDATE_ROUTES';
export const SET_NEXTID = 'SET_NEXTID';
export const UPDATE_TREE_INFO = 'UPDATE_TREE_INFO';

export function updateProps(key, value, id, actionType) {
  console.log('UPDATEPROPS', key, value, id, actionType);
  setTimeout(() => {
    store.dispatch({ type: GET_INFO, id });
  }, 1);

  return {
    type: UPDATE_PROPS,
    key,
    value,
    id,
    actionType,
  };
}

export function updateInfos(key, value, id, actionType) {
  setTimeout(() => {
    store.dispatch({ type: GET_INFO, id });
  }, 1);

  return {
    type: UPDATE_INFOS,
    key,
    value,
    id,
    actionType,
  };
}

export function addChild(componentType, props, name, id, nextId, pageSelected) {
  return {
    type: ADD_CHILD,
    componentType,
    props,
    id,
    nextId,
    pageSelected,
    name,
  };
}

export function addPage(name, nextId) {
  return {
    type: ADD_PAGE,
    name,
    nextId,
  };
}

export function removeChild(id) {
  return {
    type: REMOVE_CHILD,
    id,
  };
}

export function getValue(key, id) {
  return {
    type: GET_VALUE,
    key,
    id,
  };
}

export function onUndo() {
  return {
    type: UNDO,
  };
}

export function onRedo() {
  return {
    type: REDO,
  };
}

export function updateTreeInfo(key, value) {
  return {
    type: UPDATE_TREE_INFO,
    key,
    value,
  };
}

export function updateRoutes(routes) {
  return {
    type: UPDATE_ROUTES,
    routes,
  };
}

export function setNextId(nextId) {
  return {
    type: SET_NEXTID,
    nextId,
  };
}
