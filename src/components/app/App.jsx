import React from 'react';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { selectColors } from '../../state/selectors';
import { currentColor, undoColor, redoColor } from '../../state/actions';

function App() {
  const current = useSelector(selectColors);
  const dispatch = useDispatch();
  const undo = () => dispatch(undoColor());
  const redo = () => dispatch(redoColor());

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        data-testid='color-input'
        type="color"
        value={current}
        onChange={({ target }) => dispatch(currentColor(target.value))}
      />
      <div
        data-testid='color-display'
        style={{ backgroundColor: current, width: "10rem", height: "10rem" }}
      ></div>
    </>
  );
}

export default App;
