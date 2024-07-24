import React from 'react'

const GetStorage = () => {
//local storage is the memory for a particular domain in particular browser 
//All data in local Storage are string.
//If the browser is closed local storage data will persist in local.


 let name = localStorage.getItem("name")
 let age = localStorage.getItem("age");
 let location = localStorage.getItem("location");
    
  return (
    <div>My name is {name}. i am {age} years old. i live in {location}</div>
  )
}

export default GetStorage