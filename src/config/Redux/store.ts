import { configureStore } from '@reduxjs/toolkit';
import clientLogoSlice from './slices/clientLogoSlice';
import globalSlice from './slices/globalSlice';
import showReelSlice from './slices/showReelSlice';

import teamsSlice from './slices/teamsSlice';

// const store = createStore(reducer, compose(applyMiddleware(thunk)));
const store = configureStore({
  reducer: {
    teams: teamsSlice,
    global: globalSlice,
    showReel: showReelSlice,
    clientLogo: clientLogoSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
