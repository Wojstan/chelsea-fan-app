import { ADD_MATCH, MODIFY_LINEUP, GET_MATCH, MODIFY_GOALS } from "../actions/types"

const initialState = {
  game: {
    lineup: [],
    ratings: [],
    goals: []
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATCH:
      return {
        ...state,
        game: action.payload
      };

    case ADD_MATCH:
      return {
        ...state,
        game: action.payload
      }

    case MODIFY_LINEUP:
      return {
        ...state,
        game: action.payload
      }

    case MODIFY_GOALS:
      return {
        ...state,
        game: action.payload
      }

    default:
      return state;
  }

}