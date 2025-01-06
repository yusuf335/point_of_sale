"use client";

import Header from "@/app/components/header/header/Header";
import InputField from "@/app/components/ui/Input/InputField";
import styles from "../page.module.scss";
import Button from "@/app/components/ui/button/Button";
import { gql, useMutation } from "@apollo/client";

const ADD_CATEGORY = gql`
  mutation CreateCategory($name: String!, $description: String!) {
    createCategory(name: $name, description: $description) {
      id
    }
  }
`;

const AddCategoryPage = () => {
  return (
    <>
      <Header title="Add Category" />
      <div className={styles.container}>
        <InputField
          name="name"
          label="Category Name"
          placeholder="Enter Category Name"
          type="text"
          value=""
          inputStyle={styles.input}
        />
        <InputField
          name="description"
          label="Description"
          placeholder="Enter Category Name"
          type="text"
          value=""
          inputStyle={styles.input}
        />

        <Button
          label="Add Category"
          type="submit"
          size="medium"
          onClick={() => {}}
          btnStyle={styles.btn}
        />
      </div>
    </>
  );
};

export default AddCategoryPage;
