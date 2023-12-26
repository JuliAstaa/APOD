import { configureStore } from "@reduxjs/toolkit";
import { apodSlice } from "./components/Apod/apodSlice";

export default configureStore({
  reducer: {
    apod: apodSlice.reducer,
  },
});
