import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {

  const { listOfRestaurants, filteredRestaurant, searchText, fetchData } = useBody();

  const onlineStatus = useOnlineStatus();

  // useEffect(() => {
  //   fetchData();
  // }, []); // Fetch data on component mount

  if (!onlineStatus) {
    return <h1>Looks like you're offline! Please check your internet connection.</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter flex">
        <div className="search m-4 p-4 ml-16">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 mx-2 bg-slate-200 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex-items-center">
        <button
          className="px-4 py-2  bg-slate-200 rounded-lg"
          onClick={() => {
            const filteredListed = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredListed);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap m-10 px-5">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
