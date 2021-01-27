import React, { useState, useEffect } from "react";
import api from "../api";
import Header from "../components/Header";
import { Container } from "../styles/VehiclesPage";

interface IVehicle {
  model: string;
  year_manufacture: number;
  doors: number;
  brand: string;
  passagers?: number;
  wheels?: number;
}

const VehiclesPage = (children: Element): JSX.Element => {
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [doors, setDoors] = useState<number>(0);
  const [passagers, setPassagers] = useState<number>(0);
  const [wheels, setWheels] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [res, setResponse] = useState<IVehicle>();

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

  async function handleSubmitMotor() {
    const { data } = await api.post("/D3/motor", {
      model,
      year_manufacture: year,
      wheels,
      passagers,
      brand,
    });
    setOpen(true);
    setResponse(data);
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
        <div className="container-inputs">
          <input
            value={passagers}
            onChange={(event) => setPassagers(event.target.valueAsNumber)}
            type="number"
            placeholder=" "
            required
          />
          <label>Passageiros</label>
        </div>
        <div className="container-inputs">
          <input
            value={wheels}
            onChange={(event) => setWheels(event.target.valueAsNumber)}
            type="number"
            placeholder=" "
            required
          />
          <label>Rodas</label>
        </div>

        <div className="container-button">
          <button onClick={() => handleSubmit()}>Salvar Carro</button>
          <button onClick={() => handleSubmitMotor()}>Salvar Moto</button>
        </div>

        <footer className="container-result">
          <div className="result">
            {open && (
              <>
                <div className="border-result">
                  <p>Passageiros: {res?.passagers}</p>
                </div>
                <div className="border-result">
                  <p>Rodas: {res?.wheels}</p>
                </div>
              </>
            )}
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
