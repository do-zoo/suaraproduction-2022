const initialState = {
  teamList: [],
};

export default function AboutUsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TEAM_LIST":
      return {
        ...state,
        teamList: action.payload,
      };
    default:
      return state;
  }
}
