import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  defaultEndpointDatas: [],
};

export const feeDataSlice = createSlice({
  name: "feeDataSlice",
  initialState,
  reducers: {
    setDefaultEndpointFeeData: (state, action) => {
      state.defaultEndpointDatas = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setDefaultEndpointFeeData } = feeDataSlice.actions;

export default feeDataSlice;
