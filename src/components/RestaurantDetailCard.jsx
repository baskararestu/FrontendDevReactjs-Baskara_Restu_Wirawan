import { useParams } from "react-router";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function RestaurantDetailCard() {
  const { restaurantName } = useParams();
  const imagePath = `${import.meta.env.VITE_IMG_URL}`;
  const fallbackImageUrl =
    "https://cdn.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.webp";
  const storedRestaurantData = localStorage.getItem(
    `restaurantData_${restaurantName}`
  );
  const restaurantData = storedRestaurantData
    ? JSON.parse(storedRestaurantData)
    : null;

  if (!restaurantData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card lg:card-side w-full h-full md:h-[30rem] lg:h-[32rem] xl:h-[36rem] bg-base-100 shadow-xl gap-5">
      <figure>
        <img
          src={`${imagePath}/${restaurantData.image_path}`}
          alt="Album"
          onError={(e) => {
            e.target.src = fallbackImageUrl;
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{restaurantData.name}</h2>
        <div className="flex flex-row gap-2 justify-start items-center">
          <StarRating rating={restaurantData.rating} />
          {restaurantData.rating}
        </div>
        <p className="w-full lg:w-[16rem] text-justify">
          {restaurantData.description}
        </p>
        <div className="card-actions flex justify-between items-center pt-5 gap-3">
          <Link
            className="border-b-2 border-spacing-4 border-black/50 text-blue-700"
            to={`/`}
          >
            Back to the list
          </Link>
          <button className="btn bg-slate-400 text-black/70">
            Checkout page
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailCard;
