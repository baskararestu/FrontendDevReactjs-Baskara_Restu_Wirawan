import React from "react";
import Filter from "./Filter";

function Headers() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h1 className="text-xl lg:text-3xl">Restaurants</h1>
      <p className="text-md lg:text-xl text-black/60">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="flex flex-col">
        <div className="divider"></div>
        <Filter />
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Headers;
