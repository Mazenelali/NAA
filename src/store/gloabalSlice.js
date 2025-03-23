import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isShowLoader: false,
  },
  reducers: {
    setIsShowLoader:(state,action)=>{
        state.isShowLoader = action.payload
    }
  },
});

export const { setIsShowLoader } = globalSlice.actions;

export default globalSlice.reducer