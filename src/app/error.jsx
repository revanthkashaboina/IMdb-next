'use client'
import React, {useEffect} from 'react'

const error = ({error, reset}) => {

    useEffect(()=>{
        console.log(error)
    }, [error])

    const errorButtonClicked = () =>{
        // console.log("button clicked");
        reset()
    }

  return (
    <div className="text-center mt-10">
        <h1>Something went wrong. Please Try again later</h1>
        <button className='hover:text-amber-600 bg-white text-amber-600 font-semibold p-3 rounded mt-5' onClick={errorButtonClicked}>Try Again</button>
    </div>
  )
}

export default error