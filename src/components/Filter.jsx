import { useEffect, useState } from "react";
import { getRestaurants } from "../features/retaurantsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/categoriesSlice";

function Filter({ setCategory, setPriceSorting, setOpenNowFilter }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [selectedPriceSorting, setSelectedPriceSorting] = useState("");
  const [openNow, setOpenNow] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handlePriceSortingChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPriceSorting(selectedValue);
    setPriceSorting(selectedValue);
  };

  const handleOpenNowChange = () => {
    setOpenNow(!openNow);
    setOpenNowFilter(!openNow);
  };
  const handleClearAll = () => {
    setSelectedPriceSorting("");
    setPriceSorting("");
    setCategory("");
    setOpenNow(false);
    setOpenNowFilter(false);
  };

  const isClearAllDisabled = !selectedPriceSorting && !openNow;
  return (
    <div className="flex flex-col lg:flex-row gap-5 text-lg lg:items-center">
      <div className="font-medium">
        <p>Filter By:</p>
      </div>
      <div className="flex gap-1 items-center borderFilter">
        <input
          type="checkbox"
          className="checkbox checkbox-sm"
          checked={openNow}
          onChange={handleOpenNowChange}
        />
        <p>Open Now</p>
      </div>
      <div className="flex gap-1 items-center borderFilter">
        <select
          className="bg-transparent w-full"
          onChange={handlePriceSortingChange}
          value={selectedPriceSorting}
        >
          <option value="">Price</option>
          <option value="highestToLowest">Highest to Lowest</option>
          <option value="lowestToHighest">Lowest to Highest</option>
        </select>
      </div>
      <div className="flex gap-1 items-center borderFilter">
        <select
          className="bg-transparent w-[15rem]"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Categories</option>
          {categories.map((cat) => (
            <option key={cat.id_category} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="uppercase md:right-36 md:absolute btn rounded-md disabled:bg-opacity-[0.02] w-32 btn-sm"
        disabled={isClearAllDisabled}
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  );
}

export default Filter;
