import styled from "styled-components";

interface Props {
  Type: string;
  Price: string;
  GB: String;
  Users: string;
  SendGB: string;
  background: string;
}

const CreateCard = ({
  Type,
  Price,
  GB,
  Users,
  SendGB,
  background,
}: Props): JSX.Element => {
  return (
    <Card background={background}>
      <div className="TopCard-div">
        <h2>{Type}</h2>
        <h1>
          <span> $</span>
          {Price}
        </h1>
      </div>
      <div className="MainCard-div">
        <hr />
        <h3> {GB}</h3>
        <hr />
        <h3> {Users}</h3>
        <hr />
        <h3> {SendGB}</h3>
        <hr />
      </div>

      <button> LEARN MORE</button>
    </Card>
  );
};

const Card = styled.div<{ background: string }>`
  width: 327px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 31px 29px;
  gap: 32px;
  background: ${(props) => props.background};
  border-radius: 10px;
  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
  @media (min-width: 1024px) {
    width: 350px;
  }
  .TopCard-div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: center;
      color: ${(props) =>
        props.background ===
        "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
          ? "#FFFFFF"
          : "#6E728E"};
    }

    h1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 72px;
      font-weight: 700;
      line-height: 71px;
      letter-spacing: -2.1600000858306885px;
      text-align: center;
      color: ${(props) =>
        props.background ===
        "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
          ? "#FFFFFF"
          : "#6E728E"};

      span {
        font-size: 40px;
        font-weight: 700;
        line-height: 49px;
        letter-spacing: -1.2000000476837158px;
        text-align: center;
        color: ${(props) =>
          props.background ===
          "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
            ? "#FFFFFF"
            : "#6E728E"};
      }
    }
  }

  .MainCard-div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    hr {
      width: 100%;
      border: none;
      background-color: ${(props) =>
        props.background ===
        "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
          ? "#FFFFFF"
          : "#6E728E"};
      height: 1px;
      opacity: 0.25;
    }

    h3 {
      font-size: 15px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: center;
      color: ${(props) =>
        props.background ===
        "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
          ? "#FFFFFF"
          : "#6E728E"};
    }
  }

  button {
    width: 100%;
    max-width: 288px;
    background: ${(props) =>
      props.background ===
      "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
        ? "#FFFFFF"
        : "linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%)"};
    height: 44px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.3928571939468384px;
    text-align: center;
    color: ${(props) =>
      props.background ===
      "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
        ? "#6D72DE"
        : "#FFFFFF"};
  }
`;

export default CreateCard;
