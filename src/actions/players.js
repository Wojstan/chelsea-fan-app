import { GET_PLAYERS } from "./types";

export const getPlayers = () => (dispatch) => {
  fetch("http://localhost:4442/players")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: GET_PLAYERS,
        payload: data
      })
    );
}