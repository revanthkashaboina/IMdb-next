import React from 'react'

const Results = ({results}) => {
    // console.log(results)
  return (
    <div>
        {
            results.map((result)=>(
                <div key={result.id}>
                    {/* <h2>{result.title || result.name}</h2> */}
                    <h2>{result.original_title}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default Results