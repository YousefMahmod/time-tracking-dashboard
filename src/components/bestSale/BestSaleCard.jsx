import React from "react";
import styles from "./BestSaleCard.module.scss";
import bitmap from "../../assets/bitmap.png";
const BestSaleCard = () => {
  return (
    <div className={styles.best_sale_container}>
      <div className={styles.best_sale_top}>
        <div className={styles.best_sale_photo_container}>
          <img
            src={bitmap}
            alt="best_sales"
            className={styles.best_sale_photo}
          />
        </div>
        <div className={styles.best_sale_text}>
          <p className="fx_15_400 color_light_purple mb_4">Report for</p>
          <h2 className={`fx_40_300 ${styles.best_sales}`}>Best Sales</h2>
        </div>
      </div>
      <div className={`fx_18_400 ${styles.best_sale_categories}`}>
        <p className="color_light_purple">Daily</p>
        <p className={styles.best_sale_active}>Weekly</p>
        <p className="color_light_purple">Monthly</p>
      </div>
    </div>
  );
};

export default BestSaleCard;
