import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: red; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <div>
              <Heading as="h1">PIU SAIGON</Heading>
              <Heading as="h2">Check in and check out</Heading>
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Check in")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <div>
              <Heading as="h3">Forms</Heading>
              <Input type="number" placeholder="Number of guest" />
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
