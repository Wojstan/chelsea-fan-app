import { ADD_MATCH, GET_MATCH } from "../actions/types"

const initialState = {
  game: {
    lineup: []
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

    default:
      return state;
  }

}