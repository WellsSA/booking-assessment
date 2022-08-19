import { testAction } from 'store/slices/booking';
/* eslint-disable */


import { takeLatest, all } from 'redux-saga/effects';


export function testSaga({ payload }) {
  console.log('testing saga', payload)
}


export default all([
  takeLatest(testAction as any, testSaga),
]);
