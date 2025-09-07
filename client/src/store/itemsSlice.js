// EXTERNAL FUNCTIONALITIES
import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addToItems: (state, action) => {
      return action.payload;
    },
  },
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;
