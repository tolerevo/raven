import React from "react";

const Business = () => {

  const business = {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "Marginotto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 95,
  }

  return (
    <div>
      <h1>{business.name}</h1>
      <img src={business.imageSrc} alt={business.name} />
      <ul>
        <li>{business.address}</li>
        <li>{business.city}</li>
        <li>{business.zipCode}</li>
      </ul>
      <ul>
        <li>{business.category}</li>
        <li>{business.rating}</li> 
        <li>{business.reviewCount}</li>
      </ul>
    </div>
  ); 
};
export default Business;