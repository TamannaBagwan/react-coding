

import React from 'react'
import DropDown from './Dropdown';

const DropDownApp = () => {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div>
      <h2>DropDownApp</h2>
      <DropDown options={dropdownOptions} placeholder="Select an option" />
    </div>
  )
}

export default DropDownApp

