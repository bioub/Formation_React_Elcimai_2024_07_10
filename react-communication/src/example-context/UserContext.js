import { createContext } from 'react';

const UserContext = createContext({
  name: '',
  setName: () => {},
});

export default UserContext;
