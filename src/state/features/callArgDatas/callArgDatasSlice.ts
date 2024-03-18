import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  defaultEndpointCallArgs: {
    sourceChainId: 1,
    _payload: "0x",
    _payInZRO: false,
    _adapterParams: "0x",
  },
};

export const callArgDatasSlice = createSlice({
  name: "callArgDatasSlice",
  initialState,
  reducers: {
    setDefaultEndpointCallArgs: (state, action) => {
      state.defaultEndpointCallArgs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setDefaultEndpointCallArgs } = callArgDatasSlice.actions;

export default callArgDatasSlice;
