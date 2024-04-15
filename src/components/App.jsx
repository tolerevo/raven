import React from "react";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar className="SearchBar" />
      <BusinessList />
      <BusinessList />
    </div>
  );
}

export default App;
