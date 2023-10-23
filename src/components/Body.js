import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput,restaurants){
    return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchInput))
};

const Body = () => {
  //searchTtext is a local state variable
  const [searchInput, setSearchInput] = useState(""); //To create state variable
  const[restaurants,setRestaurants]=useState(restaurantList);
  return (
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
        <button className="search-btn" onClick={()=>{
            //need to filter data
            const data =filterData(searchInput,restaurants);
             setRestaurants(data);
        }}
       >
            
        Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
