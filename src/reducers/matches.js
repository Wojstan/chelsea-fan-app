import { GET_MATCHES } from "../actions/types"

const initialState = {

};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MATCHES:
      return {
        ...state,
      };

    default:
      return state;
  }

}