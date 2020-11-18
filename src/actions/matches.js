import { GET_MATCH, ADD_MATCH, MODIFY_LINEUP, MODIFY_RATINGS, MODIFY_GOALS } from "./types";

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

export const modifyLineup = (id, team) => (dispatch) => {

  fetch(`http://localhost:4442/matches/lineup/${id}`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      lineup: team
    })
  })
    .then(response => response.json())
    .then(data => dispatch({
      type: MODIFY_LINEUP,
      payload: data,
    }))
}

export const modifyRatings = (id, rates) => (dispatch) => {
  console.log("runnner");
  fetch(`http://localhost:4442/matches/ratings/${id}`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ratings: rates
    })
  })
    .then(response => response.json())
    .then(data => dispatch({
      type: MODIFY_RATINGS,
      payload: data,
    }))
}

export const modifyGoals = (id, scorers) => (dispatch) => {
  fetch(`http://localhost:4442/matches/goals/${id}`, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      goals: scorers
    })
  })
    .then(response => response.json())
    .then(data => dispatch({
      type: MODIFY_GOALS,
      payload: data,
    }))
}

