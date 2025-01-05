import React from "react";
import * as Icons from "react-icons/fa";
import styles from "./CategoryCard.module.scss";

type CategoryCardProps = {
  iconName: string; // Name of the icon to render
  categoryName: string; // The name of the category
  productCount: number; // The number of products in the category
  onClick?: () => void; // Optional click handler
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  iconName,
  categoryName,
  productCount,
  onClick,
}) => {
  const SelectedIcon = Icons[iconName as keyof typeof Icons]; // Dynamically select the icon

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.icon}>
        {SelectedIcon ? <SelectedIcon /> : "Icon not found"}
      </div>
      <div className={styles.categoryName}>{categoryName}</div>
      <div className={styles.productCount}>{productCount} Products</div>
    </div>
  );
};

export default CategoryCard;
