import { useState } from "react";
import Headers from "../components/Headers";
import ListRestaurants from "../components/ListRestaurants";

function HomePage() {
  const [category, setCategory] = useState(null);
  const [priceSorting, setPriceSorting] = useState("");
  const [openNowFilter, setOpenNowFilter] = useState(false);

  return (
    <div className="bg-base-100 p-14">
      <Headers
        setCategory={setCategory}
        setPriceSorting={setPriceSorting}
        setOpenNowFilter={setOpenNowFilter}
      />
      <ListRestaurants
        category={category}
        priceSorting={priceSorting}
        openNowFilter={openNowFilter}
      />
    </div>
  );
}

export default HomePage;
