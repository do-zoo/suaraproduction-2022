export const setDataShowreel =
  () => (dispatch: (arg0: { type: string; payload: unknown }) => void) => {
    fetch(`${import.meta.env.VITE_API_URL}/showreel`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'SET_SHOWREEL',
          payload: res.showreels,
        });
        dispatch({
          type: 'SET_SHOWREEL_CURRENT',
          payload: res.showreels[0],
        });
        dispatch({
          type: 'SET_CURRENT_PLAY_VIDEO',
          payload: res.showreels[0].data[0].video_id,
        });
      });
  };

export const setDataShowreelByCategoryId =
  (id: never) =>
  (dispatch: (arg0: { type: string; payload: unknown }) => void) => {
    fetch(`${import.meta.env.VITE_API_URL}/showreel/category/${id}`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'SET_SHOWREEL_CURRENT',
          payload: res.showreelCategory,
        });
        dispatch({
          type: 'SET_CURRENT_PLAY_VIDEO',
          payload: res.showreelCategory.data[0].video_id,
        });
      });
  };

export const setCurrentPlayVideo = data => dispatch => {
  dispatch({
    type: 'SET_CURRENT_PLAY_VIDEO',
    payload: data,
  });
};
