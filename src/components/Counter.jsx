import { useDispatch, useSelector } from "react-redux";
import { onDecrement, onIncrement } from "../reducers";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state);

  function handleIncrement() {
    dispatch(onIncrement());
  }

  function handleDecrement() {
    dispatch(onDecrement());
  }

  function incrementIfOdd() {
    if (value % 2 !== 0) handleIncrement();
  }

  function incrementAsync() {
    setTimeout(handleIncrement, 1000);
  }
  return (
    <p>
      Clicked: {value} times <button onClick={handleIncrement}>+</button>{" "}
      <button onClick={handleDecrement}>-</button>{" "}
      <button onClick={incrementIfOdd}>Increment if odd</button>{" "}
      <button onClick={incrementAsync}>Increment async</button>
    </p>
  );
};
