import { createSlice } from '@reduxjs/toolkit';

interface GlobalState {
  isLoading: boolean;
  error: string | null;
  date: string;
}

const initialState: GlobalState = {
  isLoading: false,
  error: null,
  date: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setLoading, setError, setDate } = globalSlice.actions;

export default globalSlice.reducer;
