export const setDate = (date) => (dispatch) => {
  const day = date.getDate();
  // get string month
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  dispatch({
    type: "SET_DATE",
    payload: `${day} ${month} ${year}`,
  });
};
