'use client'
import React, {useEffect} from 'react'

const error = ({error, reset}) => {

    useEffect(()=>{
        console.log(error)
    }, [error])

  return (
    <div className="text-center mt-10">
        <h1>Something went wrong. Please Try again later</h1>
        <button className='hover:text-amber-600 bg-white text-amber-600 font-semibold p-3 rounded mt-5' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default error