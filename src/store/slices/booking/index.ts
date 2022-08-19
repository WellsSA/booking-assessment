/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Booking, BookingInterval, Property } from 'shared/types';

interface BookingState {
  bookings: Booking[];
  selectedBooking: Booking | null;
}

const initialState = {
  bookings: [],
  selectedBooking: null,
} as BookingState;

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    createBookingRequest: (
      _,
      action: PayloadAction<{
        property: Property;
        interval: BookingInterval;
      }>
    ) => {},
    createBookingSuccess: (
      state,
      action: PayloadAction<{ booking: Booking }>
    ) => {
      state.bookings.push(action.payload.booking);
    },
    setSelectedBooking: (
      state,
      action: PayloadAction<{ booking: Booking }>
    ) => {
      state.selectedBooking = action.payload.booking;
    },
  },
});

export const {
  createBookingRequest,
  createBookingSuccess,
  setSelectedBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
