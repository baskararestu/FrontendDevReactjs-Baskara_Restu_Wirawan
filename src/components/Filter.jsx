import React from "react";

function Filter() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 text-lg lg:items-center">
      <div className="font-medium">
        <p>Filter By:</p>
      </div>
      <div className="flex gap-1 items-center borderFilter">
        <input type="radio" name="radio-1" className="radio radio-sm" />
        <p>Open Now</p>
      </div>
      <div className="flex gap-1 items-center borderFilter">
        <select className="bg-transparent w-full">
          <option disabled selected>
            Price
          </option>
          <option>highest to lowest</option>
          <option>lowest to highest</option>
        </select>
      </div>
      <div className="flex gap-1 items-center borderFilter">
        <select className="bg-transparent w-[15rem]">
          <option disabled selected>
            Categories
          </option>
          <option>Thai</option>
          <option>Japanese</option>
          <option>Sunda</option>
        </select>
      </div>
      <button
        className="uppercase md:right-16 md:absolute btn rounded-md disabled:bg-opacity-[0.02] w-32 btn-sm"
        disabled
      >
        Clear All
      </button>
    </div>
  );
}

export default Filter;
