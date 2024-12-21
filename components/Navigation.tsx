'use client';

import Link from 'next/link';
import { SignInButton, useUser, useClerk } from '@clerk/nextjs';
import { observer } from 'mobx-react-lite';
import { userStore } from '../app/stores/userStore';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Navigation = observer(() => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    userStore.setAuthenticated(isSignedIn || false);
    userStore.setUsername(user?.username || '');
  }, [isSignedIn, user]);

  const handleSignIn = () => {
    console.log('Initiating sign-in process');
  };

  const handleSignOut = async () => {
    await signOut();
    userStore.setAuthenticated(false);
    userStore.setUsername('');
    router.push('/');
    console.log('User signed out');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-500">
            CryptoNova
          </Link>

          {/* Burger Menu Icon */}
          <button
              className="text-white lg:hidden focus:outline-none"
              onClick={toggleMenu}
          >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
              className={`lg:flex space-y-4 lg:space-y-0 lg:space-x-6 items-center absolute lg:static bg-black w-full lg:w-auto transition-all duration-300 ${
                  isMenuOpen ? 'top-16 left-0 p-4' : 'top-[-300px]'
              }`}
          >
            <li>
              <Link href="#features" className="text-white hover:text-purple-500 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#marketplace" className="text-white hover:text-purple-500 transition-colors">
                Marketplace
              </Link>
            </li>

            {userStore.isAuthenticated ? (
                <>
                  <li>
                    <Link href="/profile" className="text-white hover:text-purple-500 transition-colors">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                        onClick={handleSignOut}
                        className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-colors"
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
  );
});

export default Navigation;
