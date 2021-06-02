import React from 'react'
import { useAuth } from '../providers/auth'

function Profile() {
  const { user } = useAuth()

  return (
    <div>
      <hr />
      <h1>{user.name}</h1>
    </div>
  );
}

export default Profile;