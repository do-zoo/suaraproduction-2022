import { Team } from '@/types/res';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface TeamsState {
  data: Team[];
}

export const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    data: [],
  } as TeamsState,
  reducers: {
    setTeamList: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTeamList } = teamSlice.actions;

export const selectTeam = (state: RootState) => state.teams;

export default teamSlice.reducer;
