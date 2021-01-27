import React from "react";

import {
  Container,
  SignTilte,
  Form,
  FormGroup,
  Button,
  ContainerButtons,
} from "../styles/LandingPage";

import { Link } from "react-router-dom";

function App() {
  return (
    <Container>
      <Form>
        <SignTilte>Desafios</SignTilte>
        <FormGroup>
          <ContainerButtons>
            <Link to="/D1">
              <Button>Numbers Palindromics</Button>
            </Link>
          </ContainerButtons>
          <ContainerButtons>
            <Link to="/D2">
              <Button>Controller Cashier</Button>
            </Link>
          </ContainerButtons>
          <ContainerButtons>
            <Link to="/D3">
              <Button>Controller Vehicles</Button>
            </Link>
          </ContainerButtons>
          <ContainerButtons>
            <Link to="/D4">
              <Button>Search Ceps</Button>
            </Link>
          </ContainerButtons>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default App;
