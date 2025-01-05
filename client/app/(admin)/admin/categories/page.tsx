"use client";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CategoryCard from "@/app/components/ui/card/category/CategoryCard";
import styles from "./page.module.scss";
import InputField from "@/app/components/ui/Input/InputField";
import Button from "@/app/components/ui/button/Button";

const Category = () => {
  const router = useRouter();
  const handleCardClick = (category: string) => {
    router.push(`/admin/categories/${category}`);
  };

  const handleAddCategory = () => {
    alert("Add Category button clicked!");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Search query:", event.target.value);
  };

  return (
    <>
      <div className={styles.topControlContainer}>
        {/* Search Bar */}
        <InputField
          label=""
          name="search-product"
          placeholder="Search Product"
          onChange={handleSearch}
          type="text"
          value=""
          inputStyle={styles.searchBar}
        />

        {/* Add Category Button */}
        <Button
          label="Add category"
          icon={<FaPlus />}
          size="medium"
          onClick={handleAddCategory}
        />
      </div>
      <div className={styles.categoryContainer}>
        <CategoryCard
          iconName="FaShoppingCart"
          categoryName="Groceries"
          productCount={123}
          onClick={() => handleCardClick("Groceries")}
        />
        <CategoryCard
          iconName="FaLaptop"
          categoryName="Electronics"
          productCount={45}
          onClick={() => handleCardClick("Electronics")}
        />
        <CategoryCard
          iconName="FaTshirt"
          categoryName="Clothing"
          productCount={78}
          onClick={() => handleCardClick("Clothing")}
        />
        <CategoryCard
          iconName="FaUtensils"
          categoryName="Food"
          productCount={32}
          onClick={() => handleCardClick("Food")}
        />
      </div>
    </>
  );
};

export default Category;
