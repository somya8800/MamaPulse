
import React from 'react'
import Home from './Component/home'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App () {
  return (
    <div>
      <Home/>
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
    
  )
}

export default App
