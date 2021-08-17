// make a const to store your action string
export const USE_RECORD = 'USE_RECORD';

// make an action to send into the reducer (actions are state)
export const getColors = (colors) => ({
  type: USE_RECORD,
  payload: colors,
});