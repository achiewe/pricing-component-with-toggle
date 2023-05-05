import styled from "styled-components";
import CreatedCard from "./Card";

interface Props {
  changeInput: boolean;
}

const PackageCards = ({ changeInput }: Props): JSX.Element => {
  return (
    <PackageMain>
      <CreatedCard
        Type="Basic"
        Price={changeInput ? "19.99" : "199.99"}
        GB="500 GB Storage"
        Users="2 Users Allowed"
        SendGB="Send up to 3 GB"
        background="#FFFFFF"
      />
      <CreatedCard
        Type="Professional"
        Price={changeInput ? "24.99" : "249.99"}
        GB="1 TB Storage"
        Users="5 Users Allowed"
        SendGB="Send up to 10 GB"
        background="linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
      />

      <CreatedCard
        Type="Master"
        Price={changeInput ? "39.99" : "399.99"}
        GB="2 TB Storage"
        Users="10 Users Allowed"
        SendGB="Send up to 20 GB"
        background="#FFFFFF"
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
  margin-bottom: 71px;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;

export default PackageCards;
