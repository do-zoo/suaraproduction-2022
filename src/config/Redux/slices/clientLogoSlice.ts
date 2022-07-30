import { ClientLogo } from '@/types/res';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ClientLogoState {
  clients: ClientLogo[];
}

export const clientLogoSlice = createSlice({
  name: 'clientLogo',
  initialState: {
    clients: [],
  } as ClientLogoState,
  reducers: {
    setClientLogoList: (state, action) => {
      state.clients = action.payload;
    },
  },
});

export const { setClientLogoList } = clientLogoSlice.actions;

export const selectClientLogo = (state: RootState) => state.clientLogo;

export default clientLogoSlice.reducer;
