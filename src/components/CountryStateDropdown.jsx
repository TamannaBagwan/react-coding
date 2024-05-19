import React, { useState } from 'react'

const CountryStateDropdown = () => {
    const [selectedCountry,setSelectedCountry] = useState("") ;
    const [selectedState,setSelectedState] = useState('') ;
    const [states,setStates] = useState([]) ;

    const countries =[
        {name : 'INDIA' ,states :['Maharashtra' ,'Goa','Karnataka']} ,
        {name : 'USA' ,states :['California' ,'New York','Texas']}
    ] ;

    const handleCountryChange = (e) =>{
 const selectedCountry = e.target.value ;
 setSelectedCountry(selectedCountry) ;
 const country = countries.find(country=>country.name===selectedCountry) ;
 if(country){
    setStates(country.states) ;
    setSelectedState('')
 }else{
    setStates([])
 }
    }


    const handleStateChange = (e) =>{
        setSelectedState(e.target.value)
    }

  return (
    <div className="p-4">
    <label htmlFor='country' className="block mb-2">Country:</label>
      <select
       id='country'
       value={selectedCountry}
       className="border p-2 mb-4 w-50"
       onChange={handleCountryChange}>
        <option value=''>Select Country</option>
        {countries.map((country)=>{
            return <option key={country.name}
            value={country.name}> {country.name} </option>
        })}
      </select>

      <label htmlFor='state' className="block mb-2">State:</label>
      <select id='state'
      value={selectedState}
      onChange={handleStateChange}
      className="border p-2 w-50">
        <option value=''> Select  State</option>
        {states.map((state)=>{
            return <option key={state}
            value={state}> {state} </option>
        })}
      </select>



    </div>
  )
}

export default CountryStateDropdown
