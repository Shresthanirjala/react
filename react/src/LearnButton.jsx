import React from 'react'

const LearnButton = () => {
const HandleButton = ()=>{
    console.log("you clicked me");
};
const HandleClick =()=>{
    console.log("you pressed me");
}

  return (
    <div>
        <button onClick={HandleButton}>Click me</button>
        <button onClick={HandleClick}>press me</button>

    </div>

  )
}

export default LearnButton