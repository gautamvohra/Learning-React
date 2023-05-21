import React from 'react'
import { IMG_CDN_URL }  from '../config';



const RestrauntCard = ({name,cuisines,cloudinaryImageId,costForTwoString}) => {
  return (
    <div className="card-main">
        <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} className="card-img"/>
        
        <h3 className="heading-name">{name}</h3>
        <h4>{cuisines.slice(0,2).join(" , ")}</h4>
        {/*  */}
        <h4>{costForTwoString.toLowerCase()} person</h4>
        </div>
        
        </div>
  )
}

export default RestrauntCard
