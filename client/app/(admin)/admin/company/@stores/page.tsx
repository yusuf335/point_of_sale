"use client";
import StoreCard from "@/app/components/ui/card/store/StoreCard";
import styles from "./page.module.scss";
import { gql, useQuery } from "@apollo/client";
import Loading from "../../../loading";

const GET_STORES = gql`
  query Stores {
    stores {
      id
      name
      address
      phone
    }
  }
`;

const Store = () => {
  const { loading, error, data } = useQuery(GET_STORES);

  return (
    <>
      {/* Loading */}
      {loading && <Loading />}

      {/* Error */}
      <div className={styles.storeStyles}>
        {!loading &&
          !error &&
          data.stores.map(
            (store: {
              id: number;
              name: string;
              address: string;
              phone: string;
            }) => (
              <StoreCard
                key={store.id}
                id={store.id}
                name={store.name}
                address={store.address}
                phone={store.phone}
              />
            )
          )}
      </div>
    </>
  );
};

export default Store;
