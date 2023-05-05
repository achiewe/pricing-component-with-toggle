import styled from "styled-components";

interface Props {
  Type: string;
  Price: string;
  GB: String;
  Users: string;
  SendGB: string;
}

const CreateCard = ({ Type, Price, GB, Users, SendGB }: Props): JSX.Element => {
  return (
    <Card>
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

const Card = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 31px 29px;
  gap: 32px;
  background-color: #ffffff;
  border-radius: 10px;
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
      color: #6e728e;
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
      color: #4a4d60;

      span {
        font-size: 40px;
        font-weight: 700;
        line-height: 49px;
        letter-spacing: -1.2000000476837158px;
        text-align: center;
        color: #4a4d60;
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
      background-color: #6e728e;
      height: 1px;
      opacity: 0.25;
    }

    h3 {
      font-size: 15px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0px;
      text-align: center;
      color: #6e728e;
    }
  }

  button {
    width: 100%;
    max-width: 288px;
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    height: 44px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.3928571939468384px;
    text-align: center;
    color: #ffffff;
  }
`;

export default CreateCard;
