import React from "react";
import Business from "../Business/Business";
//import { StylesProvider } from "@chakra-ui/react";//
import styles from "./BusinessList.module.css";

const BusinessList = ({ businesses }) => {
  return (
    <section className={styles.BusinessList}>
      {businesses.map((business, i) => {
        return <Business business={business} key={business.name} />;
      })}
    </section>
  );
};
export default BusinessList;
