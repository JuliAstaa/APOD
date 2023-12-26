import { createSlice } from "@reduxjs/toolkit";

export const apodSlice = createSlice({
  name: "apod",
  initialState: {
    apodData: [],
    date: "",
  },
  reducers: {
    setDataApod: (state, actions) => {
      const data = actions.payload;
      state.apodData = data;
    },
    setDate: (state, actions) => {
      state.date = actions.payload;
    },
  },
});

export const { setDataApod, setDate } = apodSlice.actions;
export default apodSlice;

export const apodData = (state) => state.apod.apodData;
export const getDate = (state) => state.apod.date;
