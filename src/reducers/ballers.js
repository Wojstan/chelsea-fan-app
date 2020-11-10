import { GET_MATCH } from "../actions/types"

const initialState = {
  food: {
    meals: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATCH:
      return {
        ...state,
        food: action.payload,
      };

    default:
      return state;
  }

}