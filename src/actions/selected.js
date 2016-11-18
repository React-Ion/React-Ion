export const SET_SELECTED = 'SET_SELECTED';
export const SET_PAGE_SELECTED = 'SET_PAGE_SELECTED';

export function setSelected(e, id) {
  e.preventDefault();
  e.stopPropagation();
  return {
    type: SET_SELECTED,
    id,
  };
}

export function setSelector(id) {
  return {
    type: SET_SELECTED,
    id,
  };
}


export function setPageSelected(id) {
  return {
    type: SET_PAGE_SELECTED,
    id,
  };
}
