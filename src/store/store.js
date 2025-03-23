// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './gloabalSlice';

const store = configureStore({
  reducer: {
    global:globalSlice ,
  },
});

export default store;