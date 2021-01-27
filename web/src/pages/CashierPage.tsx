import React, { useState } from "react";
import Header from "../components/Header";
import api from "../api/index";
import { Container } from "../styles/CashierPage";

interface IResponse {
  valor: number;
  troco: number;
  nota100: number;
  nota10: number;
  nota1: number;
}

const CashierPage = (children: Element): JSX.Element => {
  const [amount_paid, setAmount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [response, setResponse] = useState<IResponse>();

  async function handleSubmit() {
    try {
      const res = await api.post("/D2");
      setResponse(res.data);
      console.log(response);
      alert("sucesso");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header {...children} />
      <Container>
        <div className="container-inputs">
          <input
            type="number"
            value={amount_paid}
            onChange={(event) => setAmount(event.target.valueAsNumber)}
            placeholder="Digite o Valor da compra"
            required
          />
          <label>Valor da Compra</label>
        </div>

        <div className="container-inputs">
          <input
            value={price}
            onChange={(event) => setPrice(event.target.valueAsNumber)}
            type="number"
            placeholder=" "
            required
          />
          <label>Valor do Dinheiro</label>
        </div>
        <div className="container-button">
          <button type="submit" onClick={() => handleSubmit()}>
            Calcular
          </button>
        </div>

        <footer className="container-result">
          <div className="result">
            <div className="border-result">
              <p>Compra: R${response?.valor}</p>
            </div>
            <div className="border-result">
              <p>Troco: R${response?.troco}</p>
            </div>
            <div className="border-result">
              <p>Notas de R$100: {response?.nota100}</p>
            </div>
            <div className="border-result">
              <p>Notas de R$10: {response?.nota10}</p>
            </div>
            <div className="border-result">
              <p>Notas de R$: {response?.nota1}</p>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default CashierPage;
