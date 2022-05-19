export const setTeamList = (data) => (dispatch) => {
  fetch(`${process.env.REACT_APP_API_URL}/team`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: "SET_TEAM_LIST",
        payload: res.teams,
      });
    });
};
