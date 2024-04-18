import styles from "./Business.module.css";

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
  };

  return (
    <div className={styles.Business}>
      <div className={styles.ImageContainer}>
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h1>{business.name}</h1>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}></div>
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{`${business.zipCode} ${business.state}`}</p>
        <div className={styles.BusinessReviews}>
          <h3>{business.category.toUpperCase()}</h3>
          <h3>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};
export default Business;
