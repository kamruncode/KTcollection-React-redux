import "./App.css";
import { AppRouting } from "./AppRouting";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppRouting />
    </Provider>
  );
}

export default App;
