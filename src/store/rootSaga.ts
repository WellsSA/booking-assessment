import { all } from 'redux-saga/effects';

import booking from './slices/booking/sagas';

function* rootSaga() {
  return yield all([booking]);
}

export default rootSaga;
