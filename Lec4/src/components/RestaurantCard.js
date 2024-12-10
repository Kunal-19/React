const RestaurantCard = ({ resData }) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-img">
                <img
                    src={resData.imageId}
                    alt="Restaurant Logo"
                />
            </div>

            <div className="restaurant-details">
                <div className="restaurant-name">
                    <p>{resData.name}</p>
                </div>

                <div className="restaurant-cuisines">
                    <p className="cuisine">{resData.cuisines.join(', ')}</p>
                </div>

                <div className="restaurant-additional-info">
                    <p>Rating: {resData.rating}stars</p>
                    <p>Estimated Delivery Time: {resData.eta}minutes</p>
                    <p>{resData.costForTwo}</p>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;