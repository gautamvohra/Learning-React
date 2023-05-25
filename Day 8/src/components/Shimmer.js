import React from 'react'

const Shimmer = () => {
  return (
    <div >
      {Array(10).fill("").map((e)=>(
         <div className="card card-main">
         </div>
      ))}
    </div>
  )
}

export default Shimmer
