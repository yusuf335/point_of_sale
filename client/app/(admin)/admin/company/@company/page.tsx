"use client";
import styles from "./page.module.scss";
import Loading from "../../../loading";
import { gql, useQuery } from "@apollo/client";
import CompanyCard from "@/app/components/ui/card/company/CompanyCard";

const GET_COMPANY = gql`
  query Company {
    company {
      id
      name
      address
      phone
    }
  }
`;

const CompanyPage = () => {
  const { loading, error, data } = useQuery(GET_COMPANY);

  return (
    <>
      {loading && <Loading />}
      <div className={styles.companyStyles}>
        {!loading && !error && data.company && (
          <CompanyCard
            name={data.company.name}
            address={data.company.address}
            phone={data.company.phone}
          />
        )}
      </div>
    </>
  );
};

export default CompanyPage;
