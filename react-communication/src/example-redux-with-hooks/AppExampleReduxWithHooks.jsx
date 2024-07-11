import React from 'react';
import Header from './Header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './Main';

const initialState = {
  name: 'Romain',
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

function AppExampleReduxWithHooks() {
  return (
    <Provider store={store}>
      <div className="AppExampleReduxWithHooks">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default AppExampleReduxWithHooks;
