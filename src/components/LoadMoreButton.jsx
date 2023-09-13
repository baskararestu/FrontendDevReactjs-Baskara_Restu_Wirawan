function LoadMoreButton({
  loadMoreRestaurants,
  displayedRestaurants,
  listRestaurants,
}) {
  const isAllLoaded = displayedRestaurants >= listRestaurants.length;

  return (
    <div className="mt-4">
      <button
        onClick={loadMoreRestaurants}
        className="btn btn-primary"
        disabled={isAllLoaded}
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
