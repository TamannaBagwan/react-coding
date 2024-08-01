
import React from 'react'
// import CountryStateDropdown from './components/CountryStateDropdown'

import Notifications from './Toast component/components/Notifications'
import FetchData from './Infinite scroll/FetchData'
import Home from './components/API call with filter/Home'
import Welcome from './Conditional Rendering/Welcome'
import Condition from './Conditional Rendering/Condition'

export default function App() {
  return (
    <div>
      {/* <CountryStateDropdown/> */}
      {/* <Notifications type='success' message='New notifications'/> */}
      {/* <FetchData/> */}
      {/* <Home/> */}
      <Condition/>
    </div>
  )
}
