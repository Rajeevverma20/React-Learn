import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData";
import { useState } from "react";

  const Body = () => {
   
  const [listOfRestaurants, setListOfRestaurant] = useState(resList)

    return (
      <div className="Body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=>{
            const filteredListed = listOfRestaurants.filter(
              (res)=> res.info.avgRating > 4
            );
            setListOfRestaurant(filteredListed)
          }}
          >Top Rated Restaurant</button>
        </div>
        <div className="res-conatiner">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key ={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };


  export default Body;