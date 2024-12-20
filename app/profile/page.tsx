'use client'

import { useUser } from '@clerk/nextjs'
import { observer } from 'mobx-react-lite'
import { userStore } from '../stores/userStore'
import Navigation from '../components/Navigation'

const ProfilePage = observer(() => {
  const { user } = useUser()

  if (!userStore.isAuthenticated) {
    return (
      <div>
        <Navigation />
        <div className="container mx-auto mt-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Please sign in to view your profile</h1>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.username || 'User'}!</h1>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</p>
          <p><strong>User ID:</strong> {user?.id}</p>
        </div>
      </div>
    </div>
  )
})

export default ProfilePage

