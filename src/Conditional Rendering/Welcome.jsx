import React from 'react'

const Welcome = ({isLoggedIn}) => {
  return (
    <div className="text-center mt-8">
    {isLoggedIn ? (
      <h1 className="text-2xl font-bold text-green-500">Welcome back!</h1>
    ) : (
      <h1 className="text-2xl font-bold text-red-500">Please log in</h1>
    )}
  </div>
  )
}

export default Welcome