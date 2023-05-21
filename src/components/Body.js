import React,{useState} from 'react'
import RestrauntCard from './RestrauntCard';
import {restaurantList} from '../config';


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // const searchText="KFC"
const [restaurants,setRestraunts]=useState(restaurantList);
const [searchText, setSearchText]=useState();
  
  return (
    <>
<div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          
        ></input>
        <button
          className="search-btn"
          onClick={()=>{
            const data=filterData(searchText, restaurants);
            setRestraunts(data);
          }}
        >
          Search
        </button>
      </div>

    <h1>Restraunts We Serve:</h1>
    {
        restaurants.map((restaurant,index)=>{
          return <RestrauntCard {...restaurant.data} key={index}/>
        })
      }
    </>
  )
}

export default Body

