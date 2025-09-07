// EXTERNAL FUNCTIONALITIES
import { configureStore } from "@reduxjs/toolkit";
// SLICES
import itemsSlice from "./itemsSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
