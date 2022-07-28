export const setTeamList =
  () => (dispatch: (arg0: { type: string; payload: unknown }) => void) => {
    fetch(`${import.meta.env.VITE_API_URL}/team`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'SET_TEAM_LIST',
          payload: res.teams,
        });
      });
  };
