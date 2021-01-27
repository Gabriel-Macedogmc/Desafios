import React from "react";
import { Link } from "react-router-dom";
import { Container, FormGroup, Buttons } from "../styles/components/Header";

export default function Header(chieldren: Element): JSX.Element {
  return (
    <Container>
      <FormGroup>
        <Link to="/D1">
          <Buttons>Palindromics</Buttons>
        </Link>
      </FormGroup>
      <FormGroup>
        <Link to="/D2">
          <Buttons>Controller Cashier</Buttons>
        </Link>
      </FormGroup>
      <FormGroup>
        <Link to="/D3">
          <Buttons>Controller Vehicles</Buttons>
        </Link>
      </FormGroup>
      <FormGroup>
        <Link to="/D4">
          <Buttons>Search Cep</Buttons>
        </Link>
      </FormGroup>
    </Container>
  );
}
