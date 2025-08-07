import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import BagSlice from "./BagSlice";

const myntraStore =configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    Bag:BagSlice.reducer,
  }
})
export default myntraStore;