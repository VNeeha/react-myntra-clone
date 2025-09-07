// EXTERNAL FUNCTIONALITIES
import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    fetchInProgress: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    fetchStarted: (state) => {
      state.fetchInProgress = true;
    },
    fetchEnded: (state) => {
      state.fetchInProgress = false;
    },
  },
});

export default fetchStatusSlice;
export const fetchActions = fetchStatusSlice.actions;
