import { Provider } from "react-redux";
import { createStore } from "redux";
import { Counter } from "./components/Counter";
import { reducer } from "./reducers";
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
