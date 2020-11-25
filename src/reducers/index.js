import { combineReducers } from "redux"
import players from "./players";
import matches from "./matches";
import arena from "./arena";


export default combineReducers({ players, matches, arena });