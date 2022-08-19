import {
  createBookingRequest,
  createBookingSuccess,
  updateBookingRequest,
  updateBookingSuccess,
  deleteBookingRequest,
  deleteBookingSuccess,
} from 'store/slices/booking';
import { takeLatest, all, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { notifyError, notifySuccess } from 'services/notify';

export function* createBooking({ payload: { property, interval } }) {
  try {
    if (interval.start > interval.end) {
      throw new Error('Start date must be before end date');
    }

    // Note: here we could have a backend call.

    yield put(
      createBookingSuccess({
        booking: {
          id: uuidv4(),
          property,
          interval,
        },
      })
    );

    notifySuccess('Booking created successfully!');
  } catch (error) {
    notifyError(error.message);
  }
}

export function* updateBooking({ payload: { booking } }) {
  try {
    // Note: here we could have a backend call.
    yield put(
      updateBookingSuccess({
        booking,
      })
    );

    notifySuccess('Booking updated successfully!');
  } catch (error) {
    notifyError(error.message);
  }
}
export function* deleteBooking({ payload: { booking } }) {
  try {
    // Note: here we could have a backend call.
    yield put(
      deleteBookingSuccess({
        booking,
      })
    );

    notifySuccess('Booking deleted successfully!');
  } catch (error) {
    notifyError(error.message);
  }
}

export default all([
  takeLatest(createBookingRequest, createBooking),
  takeLatest(updateBookingRequest, updateBooking),
  takeLatest(deleteBookingRequest, deleteBooking),
]);
