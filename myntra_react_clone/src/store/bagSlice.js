// EXTERNAL FUNCTIONALITIES
import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      const idToAdd = action.payload;
      state.push(idToAdd);
    },
    removeFromBag: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((id) => id != idToRemove);
    },
  },
});

export default bagSlice;
export const bagActions = bagSlice.actions;
