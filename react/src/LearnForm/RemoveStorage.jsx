import React from 'react'

const RemoveStorage = () => {
localStorage.removeItem("name")
localStorage.removeItem("age")
localStorage.removeItem("location")

  return (
    
    <div>RemoveStorage</div>
  )
}

export default RemoveStorage