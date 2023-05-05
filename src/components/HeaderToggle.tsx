import styled from "styled-components";

const HeaderToggle = (): JSX.Element => {
  return <MainHeder></MainHeder>;
};

const MainHeder = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export default HeaderToggle;
