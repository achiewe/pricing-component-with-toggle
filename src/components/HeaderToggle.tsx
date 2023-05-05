import styled from "styled-components";

const HeaderToggle = (): JSX.Element => {
  return (
    <MainHeder>
      <h1>Our Pricing</h1>
      <div>
        <h3>Annually</h3>
        <label>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <h3>Monthly</h3>
      </div>
    </MainHeder>
  );
};

const MainHeder = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0px;
    text-align: center;
    color: #6e728e;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }

  h3 {
    font-size: 15px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: right;
    mix-blend-mode: normal;
    color: #6e728e;
    opacity: 0.5;
  }

  label {
    appearance: none;
    width: 56px;
    height: 32px;
    outline: none;
    background-color: #dfdfdf;
    border-radius: 16px;
    position: relative;
    display: inline-block;
  }

  label input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 16px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 6px;
    bottom: 4px;
    background-color: #ffffff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    background-color: #ffffff;
  }
`;

export default HeaderToggle;
