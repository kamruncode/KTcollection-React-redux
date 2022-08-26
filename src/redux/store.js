import ProductReducer from "./reducer/ProductReducer";
import { createStore } from "redux";

const store = createStore(ProductReducer);

export default store;
