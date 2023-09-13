function LoadMoreButton({
  loadMoreRestaurants,
  displayedRestaurants,
  listRestaurants,
}) {
  const isAllLoaded = displayedRestaurants >= listRestaurants.length;

  return (
    <div className="mt-4 flex justify-center items-center py-5">
      <button
        onClick={loadMoreRestaurants}
        className="btn w-[10rem] rounded-md btn-outline"
        disabled={isAllLoaded}
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
