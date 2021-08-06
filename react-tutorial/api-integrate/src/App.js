
import React from 'react';
import { UsersProvider2 } from './UsersContext2';
import Users_contextapi from './contextapi/Users_contextapi';

function App() {
  /*
    yarn add axios
   */
  return (
    <UsersProvider2>
      <Users_contextapi></Users_contextapi>
    </UsersProvider2>
  );
}

export default App;
