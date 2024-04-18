import React from "react";
import Business from "../Business/Business";
//import { StylesProvider } from "@chakra-ui/react";//
import styles from "./BusinessList.module.css";

const BusinessList = () => {
  const businessArr = [
    Business,
    Business,
    Business,
    Business,
    Business,
    Business,
  ];
  return (
    <section className={styles.businessList}>
      {businessArr.map((Business, i) => {
        return <Business className={styles.businessCard} key={i} />;
      })}
      ;
    </section>
  );
};
export default BusinessList;
