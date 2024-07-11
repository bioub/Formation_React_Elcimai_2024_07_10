import React, { createContext, Component } from 'react';

export const UserContext = createContext({
  name: '',
  setName: () => {},
});

export class UserProvider extends Component {
  state = {
    name: 'Romain',
    setName: (name) => {
      this.setState({ name });
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const withUser = (Component) => (props) => (
  <UserContext.Consumer>
    {(context) => <Component {...props} {...context} />}
  </UserContext.Consumer>
);
