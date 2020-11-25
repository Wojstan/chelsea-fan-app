import { GET_ARENA, MODIFY_ARENA, ADD_ARENA } from "../actions/types";

const initialState = {
  stadium: {
    arena: [],
  },
};

export default function arenaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARENA:
      return {
        ...state,
        stadium: action.payload,
      };

    case ADD_ARENA:
      return {
        ...state,
        stadium: action.payload,
      };

    case MODIFY_ARENA:
      return {
        ...state,
        stadium: action.payload,
      };

    default:
      return state;
  }
}
