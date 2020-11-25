import { ADD_ARENA, MODIFY_ARENA, GET_ARENA } from "./types";
import { emptyArena } from "./EmptyTickets";

export const addArena = (id) => (dispatch) => {
  fetch(`http://localhost:4442/arena/${id}`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _id: id,
      arena: emptyArena,
    })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("created arena for the match: ", id);
      dispatch({
        type: ADD_ARENA,
        payload: data,
      });
    });
};

export const getArena = (id) => (dispatch) => {
  fetch(`http://localhost:4442/arena/${id}`)
    .then((response) => response.json())
    .then((data) => {
      data === null
        ? dispatch(addArena(id))
        : dispatch({
          type: GET_ARENA,
          payload: data,
        });
    });
}

export const modifyArena = (id, seats) => (dispatch) => {
  fetch(`http://localhost:4442/arena/${id}`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      arena: seats
    })
  })
    .then(response => response.json())
    .then(data => dispatch({
      type: MODIFY_ARENA,
      payload: data,
    }))
}