import React from 'react'
import { useAuth } from './providers/auth'
import Profile from './components/Profile'

function App() {
  const { user, setUser } = useAuth()

  console.log("Bau", user)

  return (
    <div className="App">
      <h1>Hello world</h1>
      <input type="text" onChange={e => setUser({ name: e.target.value })} />
      <Profile />
    </div>
  );
}

export default App;
