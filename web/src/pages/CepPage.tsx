import React, { useState, useEffect } from "react";
import api from "../api";
import Header from "../components/Header";
import { Container } from "../styles/CepPage";

interface ICep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

const CepPage = (children: Element): JSX.Element => {
  const [cep2, setCep2] = useState<string>("");
  const [cep3, setCep3] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [cep4, setCep4] = useState<string>("");
  const [cep5, setCep5] = useState<string>("");
  const [response, setResponse] = useState<ICep[]>([]);

  async function handleSubmit() {
    try {
      const { data } = await api.post("/D4", {
        cep,
        cep2,
        cep3,
        cep4,
        cep5,
      });

      setResponse(data);

      console.log(response);
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
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>CEP-1</label>
        </div>

        <div className="container-inputs">
          <input
            value={cep2}
            onChange={(event) => setCep2(event.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>CEP-2</label>
        </div>
        <div className="container-inputs">
          <input
            value={cep3}
            onChange={(event) => setCep3(event.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>CEP-3</label>
        </div>
        <div className="container-inputs">
          <input
            value={cep4}
            onChange={(event) => setCep4(event.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>CEP-4</label>
        </div>
        <div className="container-inputs">
          <input
            value={cep5}
            onChange={(event) => setCep5(event.target.value)}
            type="text"
            placeholder=" "
            required
          />
          <label>CEP-5</label>
        </div>

        <div className="container-button">
          <button onClick={() => handleSubmit()}>Buscar</button>
        </div>
        <aside className="container-result">
          <div className="border-result"></div>
          {response.map(
            ({
              cep,
              bairro,
              uf,
              complemento,
              ddd,
              gia,
              ibge,
              localidade,
              logradouro,
              siafi,
            }: ICep) => {
              return (
                <div className="result">
                  <p>CEP: {cep}</p>
                  <p>Logradouro: {logradouro}</p>
                  <p>complemento: {complemento}</p>
                  <p>Localidae: {localidade}</p>
                  <p>Bairro: {bairro}</p>
                  <p>UF: {uf}</p>
                  <p>IBGE: {ibge}</p>
                  <p>GIA: {gia}</p>
                  <p>DDD: {ddd}</p>
                  <p>SIAFI: {siafi}</p>
                </div>
              );
            }
          )}
        </aside>

        {/* {response.map(
          ({
            cep,
            bairro,
            complemento,
            ddd,
            gia,
            ibge,
            localidade,
            logradouro,
            siafi,
          }: ICep) => {
            return (
              <>
                <section className="products">
                  <div className="table">
                    <div className="table-header">
                      <div className="col-1">
                        <input type="checkbox" />
                      </div>
                      <div className="col-2">{cep}</div>
                      <div className="col-3">Price</div>
                      <div className="col-4">Stock</div>
                      <div className="col-5">Category</div>
                      <div className="col-6">
                        <i className="fas fa-trash-alt"></i>
                      </div>
                    </div>
                    <div className="table-item">
                      <div className="col-1">
                        <input type="checkbox" />
                      </div>
                      <div className="col-2">
                        <p>{logradouro}</p>
                      </div>
                      <div className="col-3">R$ 9,00</div>
                      <div className="col-4">48</div>
                      <div className="col-5">brincos</div>
                    </div>
                    <div className="table-item">
                      <div className="col-1">
                        <input type="checkbox" />
                      </div>
                      <div className="col-2">
                        <p>{bairro}</p>
                      </div>
                      <div className="col-3">R$ 9,00</div>
                      <div className="col-4">48</div>
                      <div className="col-5">brincos</div>
                    </div>
                  </div>
                </section>
              </>
            );
          }
        )} */}
      </Container>
    </>
  );
};

export default CepPage;
