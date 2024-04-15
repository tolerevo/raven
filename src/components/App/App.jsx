import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import style from "./App.module.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <SearchBar className={style.SearchBar} />
      <Box>
        <BusinessList />
      </Box>
      <Box>
        <BusinessList />
      </Box>
    </div>
  );
}

export default App;
