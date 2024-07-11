import React from 'react';
import Header from './Header';
import { UserProvider } from './UserContext';
import Main from './Main';

function AppExampleContextWithHoc() {
  return (
    <UserProvider>
      <div className="AppExampleContextWithHoc">
        <Header />
        <Main />
      </div>
    </UserProvider>
  );
}

export default AppExampleContextWithHoc;
