import React from "react";
const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <>
      <ul>{renderSortByOptions()}</ul>
      <form>
        <label>
          <input
            type="text"
            name="location"
            placeholder="Where?"
            required
            aria-label="Where?"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="Business"
            placeholder="Search Business"
            aria-label="Search Business"
            required
          />
        </label>
        <br />
        <input type="button" value="Let's Go" aria-label="Let's Go" />
      </form>
    </>
  );
};
export default SearchBar;
