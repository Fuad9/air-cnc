import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	users: authReducer,
});

export default rootReducer;
