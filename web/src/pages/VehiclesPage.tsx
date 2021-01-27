import React, { useState, useEffect } from "react";
import api from "../api";
import Header from "../components/Header";
import { Container } from "../styles/VehiclesPage";

interface ICar {
  model: string;
  year_manufacture: number;
  doors: number;
  brand: string;
}

const VehiclesPage = (children: Element): JSX.Element => {
  // model,
  // year_manufacture,
  // doors,
  // brand,
  // wheels,
  // passagers,

  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [doors, setDoors] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");

  const [res, setResponse] = useState<ICar>();

  async function handleSubmit() {
    const { data } = await api.post("/D3/car", {
      model,
      year_manufacture: year,
      doors,
      brand,
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
            type="text"
            value={model}
            onChange={(event) => setModel(event.target.value)}
            placeholder="Digite o Valor da compra"
            required
          />
          <label>Modelo</label>
        </div>

        <div className="container-inputs">
          <input
            value={year}
            onChange={(event) => setYear(event.target.valueAsNumber)}
            type="number"
            placeholder=" "
            required
          />
          <label>Fabricação</label>
        </div>
        <div className="container-inputs">
          <input
            value={doors}
            onChange={(event) => setDoors(event.target.valueAsNumber)}
            type="number"
            placeholder=" "
            required
          />
          <label>Portas</label>
        </div>
        <div className="container-inputs">
          <input
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>Marca</label>
        </div>

        <div className="container-button">
          <button onClick={() => handleSubmit()}>Salvar</button>
        </div>

        <footer className="container-result">
          <div className="result">
            <div className="border-result">
              <p>Modelo: {res?.model}</p>
            </div>
            <div className="border-result">
              <p>Ano Fabricação: {res?.year_manufacture}</p>
            </div>
            <div className="border-result">
              <p>Portas: {res?.doors}</p>
            </div>
            <div className="border-result">
              <p>Marca: {res?.brand}</p>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default VehiclesPage;
