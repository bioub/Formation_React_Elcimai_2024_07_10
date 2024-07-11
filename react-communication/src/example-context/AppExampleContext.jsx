import React, { Component } from 'react';
import Header from './Header';
import UserContext from './UserContext';
import Main from './Main';

class AppExampleContext extends Component {
  state = {
    name: 'Romain',
    setName: (name) => {
      this.setState({ name });
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <div className="AppExampleContext">
          <Header />
          <Main />
        </div>
      </UserContext.Provider>
    );
  }
}
export default AppExampleContext;
