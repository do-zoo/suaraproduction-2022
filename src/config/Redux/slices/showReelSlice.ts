import { ShowReel, ShowReelItem } from '@/types/res';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ShowReelState {
  isLoading: boolean;
  showReelData: ShowReel[];
  showReelCurrentCategory: ShowReel;
  showReelCurrentPlay: ShowReelItem;
  error: string | null | undefined;
}

export const showReelSlice = createSlice({
  name: 'showReel',
  initialState: {
    isLoading: true,
    showReelData: [],
    showReelCurrentCategory: {
      _id: '',
      name: '',
      data: [],
      __v: 0,
      createdAt: '',
      updatedAt: '',
    },
    showReelCurrentPlay: {
      _id: '',
      title: '',
      client_name: '',
      showreel_category_id: '',
      video_id: '',
      createdAt: '',
      updatedAt: '',
      __v: 0,
    },
    error: '',
  } as ShowReelState,
  reducers: {
    setShowReelData: (state, action) => {
      state.showReelData = action.payload;
    },
    setShowReelCurrentCategory: (state, action) => {
      state.showReelCurrentCategory = action.payload;
    },
    setCurrentPlayVideo: (state, action) => {
      state.showReelCurrentPlay = action.payload;
    },
  },
});

export const {
  setShowReelCurrentCategory,
  setCurrentPlayVideo,
  setShowReelData,
} = showReelSlice.actions;

export const selectShowReel = (state: RootState) => state.showReel;

export default showReelSlice.reducer;
