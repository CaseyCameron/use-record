import { CURRENT_COLOR, UNDO_COLOR, REDO_COLOR } from "./actions";

export const initialState = {
  current: '#FFFF00',
  before: [],
  after: []
};

//take in each piece of state: current, before, after
export function reducer(state, action) {
  const { current, before, after } = state;
  switch (action.type) {
    case CURRENT_COLOR:
      return {
        ...state,
        before: [...before, current],
        current: action.payload
      };
    case UNDO_COLOR:
      return {
        ...state,
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1),
      }
    case REDO_COLOR:
      return {
        ...state,
        before: [...before, current],
        current: [after[0]],
        after: after.slice(1),
      }
    default:
      return state;
  }
}