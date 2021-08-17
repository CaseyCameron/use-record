import React, { createContext, useContext, useReducer } from 'react';

const ReduxContext = createContext();

export const ReduxProvider = ({ reducer, initialState, children }) => {
  // takes in the reducer function name, and state
  // dispatch sends the action into the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider value={{ state, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(ReduxContext);
  return dispatch;
};

export const useSelector = (selectorFn) => {
  const { state } = useContext(ReduxContext);
  return selectorFn(state);
}