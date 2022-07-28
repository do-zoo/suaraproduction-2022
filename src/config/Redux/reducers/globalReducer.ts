const initialState = {
  name: "",
  date: "",
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
