import React from 'react';
import { UsersProvider_refactory } from './contextapi_ useRedcer_refactory/UsersContext_reactory';
import Users_context_refactory from './contextapi_ useRedcer_refactory/Users_context_refactory';

function App() {
  return (
    <>
      <UsersProvider_refactory>
        <Users_context_refactory></Users_context_refactory>
      </UsersProvider_refactory>
    </>

  );
}

export default App;
