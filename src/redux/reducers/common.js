
const defaultState = {
  appName: '',
  modalMode: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
    return {
      ...defaultState,
      modalMode: action.mode
    }
    default:
      return state;
  }
};
