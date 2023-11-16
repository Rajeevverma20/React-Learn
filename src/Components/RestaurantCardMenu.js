import useRestaurantCardMenu from "../utils/useRestaurantCardMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantCardMenu = () => {
 

  const { resId } = useParams();

  const resInfo = useRestaurantCardMenu(resId);


  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          <li key={item.card.info.id}>
            {item.card.info.name}-{item.card.info.price}
          </li>
        })}
      </ul>
    </div>
  );
};

export default RestaurantCardMenu;
