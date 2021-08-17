// make a const to store your action string
export const CURRENT_COLOR = 'CURRENT_COLOR';
export const UNDO_COLOR = 'UNDO_COLOR';
export const REDO_COLOR = 'REDO_COLOR';

// make an action to send into the reducer (actions are state)
export const currentColor = (current) => ({
  type: CURRENT_COLOR,
  payload: current,
});

export const undoColor = () => ({
  type: UNDO_COLOR,
});

export const redoColor = () => ({
  type: REDO_COLOR,
});

