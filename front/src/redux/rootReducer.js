import { combineReducers } from "redux";
import coins from "./reducer";
import search from './serachReducer'

export default combineReducers({
    coins,
    search
});