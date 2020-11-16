import { GET_MATCH, ADD_MATCH } from "./types";

const addMatch = (id) => (dispatch) => {
  fetch(`http://localhost:4442/matches/${id}`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      _id: id,
      lineup: [],
    })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("created match: ", id);
      dispatch({
        type: ADD_MATCH,
        payload: data,
      });
    });
};

export const getMatch = (id) => (dispatch) => {
  fetch(`http://localhost:4442/matches/${id}`)
    .then((response) => response.json())
    .then((data) => {
      data === null
        ? dispatch(addMatch(id))
        : dispatch({
          type: GET_MATCH,
          payload: data,
        });
    });
};


