
//2:10:00
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const RestrauntMenu = () => {
    const params= useParams() ;
    const {id}=params;

    // const [restaurants,setRestraunts]=useState([]);

    // useEffect(()=>{
    //     getRestaurants();
    //   },[]);
        
      
    //   async function getRestaurants(){
         // const data =await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId="+restaurants.id);
    //     const json=await data.json();
         // console.log(json);
    //     setRestraunts(json.data);
         // setAllRestraunts(json.data.cards[2].data.data.cards);
    //   }


  return (
    <div>
      <h1>Menu is Here!!</h1>
      {/* <h1>Id is {id}</h1>
      <h1>{restaurants.name}</h1> */}
    </div>
  )
}

export default RestrauntMenu
