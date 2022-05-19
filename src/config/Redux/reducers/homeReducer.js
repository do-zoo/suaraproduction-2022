const initialState = {
  showreel: [],
  client: [],
  showreelCurrent: [],
  currentPlayVideo: null,
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHOWREEL":
      return {
        ...state,
        showreel: action.payload,
      };

    case "SET_CLIENT":
      return {
        ...state,
        client: action.payload,
      };
    case "SET_SHOWREEL_CURRENT":
      return {
        ...state,
        showreelCurrent: action.payload,
      };
    case "SET_CURRENT_PLAY_VIDEO":
      return {
        ...state,
        currentPlayVideo: action.payload,
      };

    default:
      return state;
  }
};

export default GlobalReducer;
