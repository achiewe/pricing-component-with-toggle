import styled from "styled-components";
import CreatedCard from "./Card";

const PackageCards = (): JSX.Element => {
  return (
    <PackageMain>
      <CreatedCard
        Type="Basic"
        Price="19.99"
        GB="500 GB Storage"
        Users="2 Users Allowed"
        SendGB="Send up to 3 GB"
      />
      <CreatedCard
        Type="Professional"
        Price="24.99"
        GB="1 TB Storage"
        Users="5 Users Allowed"
        SendGB="Send up to 10 GB"
      />

      <CreatedCard
        Type="Master"
        Price="39.99"
        GB="2 TB Storage"
        Users="10 Users Allowed"
        SendGB="Send up to 20 GB"
      />
    </PackageMain>
  );
};

const PackageMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32.5px;
`;

export default PackageCards;
