import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import BgTop from "../src/images/bg-top.svg";
import BgBottom from "../src/images/bg-bottom.svg";
import HeaderToggle from "./components/HeaderToggle";
import PackageCards from "./components/PackageCards";
import { useState } from "react";

function App(): JSX.Element {
  const [changeInput, setChangeInput] = useState<boolean>(true);
  return (
    <StyledMain>
      <GlobalStyles />
      <HeaderToggle changeInput={changeInput} setChangeInput={setChangeInput} />
      <PackageCards changeInput={changeInput} />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 24px;
  align-items: center;
  background-color: #f7f7fe;
  background-image: url(${BgTop});
  background-repeat: no-repeat;
  background-position: top -20px right -200px;
  @media (min-width: 1024px) {
    padding: 0;
    background-image: url(${BgTop}), url(${BgBottom});
    background-repeat: no-repeat, no-repeat;
    background-position: top 0px right 0px, bottom 0px left 0px;
  }
`;

export default App;
