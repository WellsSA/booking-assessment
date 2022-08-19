/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {}

const initialState = {} as BookingState;

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    testAction: (
      _,
      action: PayloadAction<{
        [key: string]: any;
      }>
    ) => {},
  },
});

export const { testAction } = bookingSlice.actions;

export default bookingSlice.reducer;
