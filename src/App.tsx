import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import BgTop from "../src/images/bg-top.svg";
import HeaderToggle from "./components/HeaderToggle";

function App(): JSX.Element {
  return (
    <StyledMain>
      <GlobalStyles />
      <HeaderToggle />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  align-items: center;
  background-color: #f7f7fe;
  background-image: url(${BgTop});
  background-repeat: no-repeat;
  background-position: top -20px right -200px;
`;

export default App;
