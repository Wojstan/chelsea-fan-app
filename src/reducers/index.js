import { combineReducers } from "redux"
import players from "./players";
import matches from "./matches";

export default combineReducers({ players, matches });