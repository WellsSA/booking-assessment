import { useAppDispatch } from 'hooks';
import React, { useEffect } from 'react';
import { testAction } from 'store/slices/booking';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

const TestReduxComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(testAction({ test: true }));
  }, []);
  return null;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>Hello there</div>
        <TestReduxComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
