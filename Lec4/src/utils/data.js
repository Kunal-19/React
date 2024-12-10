import CDN_URL from "./constants";

const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


const fetchData = async (url) => {
    try {
        const data = await fetch(url);
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        const json = await data.json();
        restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        return restaurants;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


const processRestaurants = async () =>{
    const restaurants = await fetchData(url);
    
    const resObj = await restaurants.map(restaurant => {
        const details = restaurant?.info;
        return {
            id: details?.id,
            name: details?.name,
            imageId: CDN_URL + details?.cloudinaryImageId,
            rating: details?.avgRating,
            costForTwo: details?.costForTwo,
            cuisines: details?.cuisines,
            eta: details?.sla?.deliveryTime,
        }
    });
    // console.log(resObj);
    return resObj;
}

export default processRestaurants;