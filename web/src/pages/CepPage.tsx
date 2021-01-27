import React from "react";
import Header from "../components/Header";
import { Container } from "../styles/CepPage";

const CepPage = (children: Element): JSX.Element => {
  return (
    <>
      <Header {...children} />
      <Container>
        <div className="container-inputs">
          <input type="number" placeholder=" " required />
          <label>CEP-1</label>
        </div>

        <div className="container-inputs">
          <input type="number" placeholder=" " required />
          <label>CEP-2</label>
        </div>
        <div className="container-inputs">
          <input type="number" placeholder=" " required />
          <label>CEP-3</label>
        </div>
        <div className="container-inputs">
          <input type="number" placeholder=" " required />
          <label>CEP-4</label>
        </div>
        <div className="container-inputs">
          <input type="number" placeholder=" " required />
          <label>CEP-5</label>
        </div>

        <div className="container-button">
          <button>Buscar</button>
        </div>
        <div className="container-result">
          <div className="result">
            <div className="border-result">
              <p>CEP-1: {}</p>
            </div>
            <div className="border-result">
              <p>CEP-2: {}</p>
            </div>
            <div className="border-result">
              <p>CEP-3: {}</p>
            </div>
            <div className="border-result">
              <p>CEP-4: {}</p>
            </div>
            <div className="border-result">
              <p>CEP-5: {}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CepPage;
