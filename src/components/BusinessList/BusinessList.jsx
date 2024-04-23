import React from "react";
import Business from "../Business/Business";
//import { StylesProvider } from "@chakra-ui/react";//
import styles from "./BusinessList.module.css";

const businessArr = [
  Business,
  Business,
  Business,
  Business,
  Business,
  Business,
];

const BusinessList = () => {
  return (
    <section className={styles.BusinessList}>
      {businessArr.map((Business, i) => {
        return <Business className={styles.businessCard} key={i} />;
      })}
      ;
    </section>
  );
};
export default BusinessList;
