// 1. we Created shimmers 
// 2.Fetched API from orignal swiggy servers
// 3.learned useeffect in detailed
// 4. solved corner cases of search functionality
// 5.created login logout function
// 6.learn async await
// 7.monolith vs microservices...

import React,{useState,useEffect} from 'react'
import RestrauntCard from './RestrauntCard';
import {restaurantList} from '../config';
import {resList} from '../../mockData.js';
import Shimmer from './Shimmer';
import Shimmermain from './Shimmermain';


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  // const searchText="KFC"
  const [allRestaurants,setAllRestraunts]=useState([]);
const [restaurants,setRestraunts]=useState([]);
const [searchText, setSearchText]=useState();

useEffect(()=>{
  getRestaurants();
},[]);
  

async function getRestaurants(){
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
  const json=await data.json();
  console.log(json);
  setRestraunts(json.data.cards[0].data.data.cards);
  setAllRestraunts(json.data.cards[0].data.data.cards);
}
if(allRestaurants.length===0) return <><Shimmermain/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/></>;

if(restaurants.length===0) return (
<>
<div className="search-container">
<input
  type="text"
  className="search"
  placeholder="Search"
  value={searchText}
  onChange={(e)=>{
    setSearchText(e.target.value);
  }}
  
></input>
<button
  className="search-btn"
  onClick={()=>{
    const data=filterData(searchText, allRestaurants);
    setRestraunts(data);
  }}
>
  Search
</button>
</div><h1>No Data Found Matching Your Need!! </h1>
<h1>Plz Reaload to Continue......</h1></>
);


return (
<>
<div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          
        ></input>
        <button
          className="search-btn"
          onClick={()=>{
            const data=filterData(searchText, allRestaurants);
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

