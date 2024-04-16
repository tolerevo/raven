import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar className={styles.SearchBar} />
      <Box bgColor="orange.100">
        <BusinessList />
      </Box>
    </div>
  );
}

export default App;
