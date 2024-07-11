import React from 'react';
import Header from './Header';
import { UserProvider } from './UserContext';
import Main from './Main';

function AppExampleContextWithHooks() {
  return (
    <UserProvider>
      <div className="AppExampleContextWithHooks">
        <Header />
        <Main />
      </div>
    </UserProvider>
  );
}

export default AppExampleContextWithHooks;
