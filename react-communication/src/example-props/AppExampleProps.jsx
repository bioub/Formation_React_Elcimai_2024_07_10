import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

class AppExampleProps extends Component {
  state = {
    user: {
      name: 'Romain',
    },
  };

  handleUserUpdate = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="AppExampleProps">
        <Header user={user} />
        <Main user={user} onUserUpdate={this.handleUserUpdate} />
      </div>
    );
  }
}
export default AppExampleProps;
