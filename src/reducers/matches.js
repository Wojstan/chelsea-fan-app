import { GET_MATCHES } from "../actions/types"

const initialState = {
  matches: {

  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATCHES:
      return {
        ...state,
        food: action.payload,
      };

    default:
      return state;
  }

}