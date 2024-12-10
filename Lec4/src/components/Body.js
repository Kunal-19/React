import RestaurantCard from "./RestaurantCard.js";
import processRestaurants from "../utils/data.js";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";




const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    let [searchTxt, setSearchTxt] = useState("");

    const displayRestaurantContainer = () => (
        <div className="restaurant-container">
            {allRestaurants.length === 0
                ? Array.from({ length: 6 }, (_, i) => <Shimmer key={i} />)
                : listOfRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))
            }
        </div>
    );


    useEffect(()=>{
        const fetchData = async()=>{
            const resObj = await processRestaurants();
            setListOfRestaurants(resObj);
            setAllRestaurants(resObj);
        }
        fetchData();
    },[]);


    return (
        <div className="body">
            <div className="top-layer-container">
                <div className="search">
                    <input type="text" placeholder="Enter the restaurant name" name="restaurant-search" value = {searchTxt} onChange = {(event)=>{
                        setSearchTxt(event.target.value);
                    }}></input>
                    <button onClick={()=>{
                        const filteredObj = allRestaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchTxt.toLowerCase()));
                        setListOfRestaurants(filteredObj);
                    }}>Search</button>
                </div>

                <div className="filters">
                    <button className="top-rated" onClick={() => {
                        const filteredObj = allRestaurants.filter(restaurant => restaurant.rating >= 4.3);
                        setListOfRestaurants(filteredObj);
                        }
                    }>Top Rated</button>
                    <button className="cheapest" onClick={() => {
                        const filteredObj = allRestaurants.filter(restaurant => parseInt(restaurant.costForTwo.slice(1,4)) <= 250);
                        setListOfRestaurants(filteredObj);
                    }
                    }>Cheapest</button>
                </div>
            </div>

            {displayRestaurantContainer()}
            
        </div >
    )
}

export default Body;