import { createBookingRequest } from 'store/slices/booking';
import { takeLatest, all } from 'redux-saga/effects';

export function createBooking({ payload: { property, interval } }) {
  // TODO: Add validations here
  console.log('testing saga', property, interval);
}

export default all([takeLatest(createBookingRequest, createBooking)]);
