import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  //padding: 5em;
  flex-direction: column;
  justify-content: center;

  transition: all 0.3s;

  .container-inputs {
    margin-top: 2em;
    margin-left: 1em;
  }
  .container-inputs input {
    ::-webkit-inner-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  .container-inputs {
    position: relative;
    padding-top: 15px;
  }

  .container-inputs input {
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
    min-width: 300px;
    min-height: 60px;
    padding: 15px 20px;
    font-size: 17px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
  }
  .container-inputs input:hover {
    transition: all 0.2s ease-in;
    border-color: #aeb4b5;
    opacity: 1;
  }
  .container-inputs input:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid;
    border-color: #6a29ff;
  }

  .container-inputs input::placeholder {
    color: transparent;
  }

  .container-inputs label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
  }

  .container-inputs input:required:invalid + label {
    color: red;
  }
  .container-inputs input:focus:required:invalid {
    border: 2px solid red;
  }
  .container-inputs input:required:invalid + label:before {
    content: "";
  }
  .container-inputs input:focus + label,
  .container-inputs input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: #854fff;
  }

  .container-button {
    margin-top: 1em;
    margin-left: 1em;
  }

  .container-button button {
    min-width: 300px;
    min-height: 45px;
    border-color: #854fff;
    background-color: #854fff;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    outline: none;
    :hover {
      background-color: #693dcc;
      border-color: #854fff;
      transition: all 0.3s;
    }
  }

  .container-result {
    width: 80%;
    height: 12vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 3em;
  }
  .result {
    width: 245px;
    height: 2vh;
  }

  .result p {
    margin-left: 5px;
    margin-bottom: 5px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 1em;
    font-size: 1em;
    color: #000;
    font-weight: 700;
  }
  .result p:hover {
    color: #aeb4b5;
    transition: all 0.3s ease;
  }

  .border-result {
    padding: 0;
  }
`;
