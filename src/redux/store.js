import { legacy_createStore } from "redux";
import reducers from "./reducer";
const store = legacy_createStore(reducers);
export default store;