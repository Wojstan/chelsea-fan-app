import { GET_PLAYERS } from "../actions/types";

const initialState = {
  players: []
}

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload
      }

    default:
      return state;
  }
}