'use client'

import Link from 'next/link'
import { SignInButton,  useUser, useClerk } from '@clerk/nextjs'
import { observer } from 'mobx-react-lite'
import { userStore } from '../app/stores/userStore'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Navigation = observer(() => {
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()

  useEffect(() => {
    userStore.setAuthenticated(isSignedIn || false)
    userStore.setUsername(user?.username || '')
  }, [isSignedIn, user])

  const handleSignIn = () => {
    // The actual sign-in process is handled by Clerk's SignInButton
    console.log('Initiating sign-in process')
  }

  const handleSignOut = async () => {
    await signOut()
    userStore.setAuthenticated(false)
    userStore.setUsername('')
    router.push('/')
    console.log('User signed out')
  }

  return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-500">CryptoNova</Link>
          <ul className="flex space-x-6 items-center">
            <li><Link href="#features" className=" text-white  hover:text-purple-500 transition-colors">Features</Link></li>
            <li><Link href="#marketplace" className="text-white  hover:text-purple-500 transition-colors">Marketplace</Link></li>

            {userStore.isAuthenticated ? (
                <>
                  <li><Link href="/profile" className="text-white hover:text-purple-500 transition-colors">Profile</Link></li>
                  <li>
                    <button
                        onClick={handleSignOut}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
            ) : (
                <li>
                  <SignInButton mode="modal">
                    <button
                        onClick={handleSignIn}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-[10px] transition-colors"
                    >
                      Sign In
                    </button>
                  </SignInButton>
                </li>
            )}
          </ul>
        </div>
      </nav>
  )
})

export default Navigation