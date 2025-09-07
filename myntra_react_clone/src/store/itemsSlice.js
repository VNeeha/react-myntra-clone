// EXTERNAL FUNCTIONALITIES
import { createSlice } from "@reduxjs/toolkit";

import { DEFAULT_ITEMS } from "../data/items";

const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addToItems: (state, action) => {
      return action.payload;
    },
  },
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;
