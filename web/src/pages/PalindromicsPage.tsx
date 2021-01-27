import React, { useState } from "react";
import api from "../api";
import Header from "../components/Header";
import { Container } from "../styles/PalindromicsPage";

const PalindromicsPage = (children: Element): JSX.Element => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  const [res, setResponse] = useState();

  async function handleSubmit() {
    const { data } = await api.post("/D1", {
      min,
      max,
    });

    setResponse(data);
    console.log(res);
  }

  return (
    <>
      <Header {...children} />
      <Container>
        <div className="container-inputs">
          <input
            type="number"
            value={min}
            onChange={(event) => setMin(event.target.valueAsNumber)}
            placeholder="Digite o Valor Min"
            required
          />
          <label>Valor Minímo</label>
        </div>

        <div className="container-inputs">
          <input
            value={max}
            onChange={(event) => setMax(event.target.valueAsNumber)}
            type="number"
            placeholder=" "
            required
          />
          <label>Valor Maxímo</label>
        </div>
        <div className="container-button">
          <button type="submit" onClick={() => handleSubmit()}>
            Calcular
          </button>
        </div>

        <footer className="container-result">
          <div className="result">
            <div className="border-result">
              <p>Result: {res}</p>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default PalindromicsPage;
