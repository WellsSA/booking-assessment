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
    updateBookingRequest: (
      _,
      action: PayloadAction<{ booking: Booking }>
    ) => {},
    updateBookingSuccess: (
      state,
      action: PayloadAction<{ booking: Booking }>
    ) => {
      const index = state.bookings.findIndex(
        booking => booking.id === action.payload.booking.id
      );
      if (index !== -1) {
        state.bookings[index] = action.payload.booking;
      }
    },
    deleteBookingRequest: (
      _,
      action: PayloadAction<{ booking: Booking }>
    ) => {},
    deleteBookingSuccess: (
      state,
      action: PayloadAction<{ booking: Booking }>
    ) => {
      const index = state.bookings.findIndex(
        booking => booking.id === action.payload.booking.id
      );
      if (index !== -1) {
        state.bookings.splice(index, 1);
      }
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
  updateBookingRequest,
  updateBookingSuccess,
  deleteBookingRequest,
  deleteBookingSuccess,
} = bookingSlice.actions;

export default bookingSlice.reducer;
