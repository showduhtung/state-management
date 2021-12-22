// Action Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = 0;

// Action Creators
export const onIncrement = () => ({ type: INCREMENT });
export const onDecrement = () => ({ type: DECREMENT });

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
