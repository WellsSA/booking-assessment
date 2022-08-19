import { AnyAction, combineReducers } from 'redux';
import { booking } from './slices';

const reducers = combineReducers({
  booking,
});

const rootReducer = (state: ReturnType<typeof reducers>, action: AnyAction) => {
  return reducers(state, action);
};

export default rootReducer;
