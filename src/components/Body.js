import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  //searchTtext is a local state variable
  const [searchInput, setSearchInput] = useState(); //To create state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [restaurantList]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true"
    );
    const json = await data.json();
    console.log("apidata", json);
    //optional chaining
    setAllRestaurants(
      json.data.cards[2]?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[2]?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //Conditional Rendering
  //If restaurant is empty shimmer UI
  //If restaurant has data=>actual data UI

  //not rendered component(Early return)
  if (!allRestaurants) return null;
  if (!filteredRestaurants?.length===0) return <h1>No restaurant match your filter</h1>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            //e.target.value => whatever input you put in
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter data
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
