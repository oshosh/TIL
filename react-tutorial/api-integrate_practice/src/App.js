import React from 'react';
import { UsersProvider } from './contextapi_ useRedcer/UsersContext';
import Users_context from './contextapi_ useRedcer/Users_context';

function App() {
  return (
    <>
      <UsersProvider>
        <Users_context />
      </UsersProvider>
    </>

  );
}

export default App;
