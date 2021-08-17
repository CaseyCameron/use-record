import { USE_RECORD } from "./actions";

export const initialState = {
  current: '#FFFF00',
  before: [],
  after: []
};

//take in each piece of state: current, before, after
export function reducer(state, action) {
  switch (action.type) {
    case USE_RECORD:
      return state;
    case 'UNDO':
      return {
        ...state,
        current: action.payload(),
        before: action.payload(),
        after: action, payload()
      }
    case 'REDO':
      return {
        ...state,
        current: action.payload(1),
        before: action.payload(),
        after: action, payload()
      }
    default:
      return state;
  }
}