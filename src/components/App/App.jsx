import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "Marginotto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 95,
};

const businesses = [business, business, business, business, business, business];

function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
