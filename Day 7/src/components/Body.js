// 1. Explore Formic library..
// 2. npm install react-router-dom used for linking pages.
//3. basically full session was on react-router-dom and its functionalities.

import React,{useState,useEffect} from 'react'
import RestrauntCard from './RestrauntCard';
import {restaurantList} from '../config';
import {resList} from '../../mockData.js';
import Shimmer from './Shimmer';
import Shimmermain from './Shimmermain';
import { Link } from 'react-router-dom';


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name?.toLowerCase().includes(searchText?.toLowerCase())
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
if(allRestaurants.length===0) return <><Shimmermain/><Shimmer/></>;

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

          return <Link to={"/restaurant/"+restaurant.data.id}><RestrauntCard {...restaurant.data} key={index}/></Link>
        })
      }
    </>
  )
}

export default Body

