import React from 'react';
import AppExampleProps from './example-props/AppExampleProps';
import AppExampleContext from './example-context/AppExampleContext';
import AppExampleContextWithHoc from './example-context-with-hoc/AppExampleContextWithHoc';
import AppExampleContextWithHooks from './example-context-with-hooks/AppExampleContextWithHooks';
import AppExampleRedux from './example-redux/AppExampleRedux';
import AppExampleReduxWithHooks from './example-redux-with-hooks/AppExampleReduxWithHooks';

function App() {
  return (
    <div className="App">
      <AppExampleProps />
      <AppExampleContext />
      <AppExampleContextWithHoc />
      <AppExampleContextWithHooks />
      <AppExampleRedux />
      <AppExampleReduxWithHooks />
    </div>
  );
}

export default App;
