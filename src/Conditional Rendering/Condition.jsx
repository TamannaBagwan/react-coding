import React, { useState } from 'react' ;
import Welcome from './Welcome';

export default function Condition() {
    const [isLoggedIn,setIsLoggedIn] = useState(true) ;
    const handleLoginToggle  = () =>{
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Welcome isLoggedIn={isLoggedIn} />
      <button
        onClick={handleLoginToggle}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  )
}
