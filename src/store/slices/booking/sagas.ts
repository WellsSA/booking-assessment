import {
  createBookingRequest,
  createBookingSuccess,
} from 'store/slices/booking';
import { takeLatest, all, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { notifyError, notifySuccess } from 'services/notify';

export function* createBooking({ payload: { property, interval } }) {
  try {
    if (interval.start > interval.end) {
      throw new Error('Start date must be before end date');
    }

    yield put(
      createBookingSuccess({
        id: uuidv4(),
        property,
        interval,
      })
    );

    notifySuccess('Booking created');
  } catch (error) {
    notifyError(error.message);
  }
}

export default all([takeLatest(createBookingRequest, createBooking)]);
