import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(
    to right top,
    #6a29ff,
    #8b22fa,
    #a51bf5,
    #bc15f0,
    #cf12eb
  );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Form = styled.form`
  background-color: #ffff;
  width: 450px;
  height: 450px;
  padding: 30px;
  border-radius: 10px;
  margin: 1em;
  -webkit-box-shadow: 12px 17px 13px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 17px 13px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 12px 17px 13px -4px rgba(0, 0, 0, 0.75);
`;
export const SignTilte = styled.h2`
  text-align: center;
  margin-bottom: 2em;
`;

export const FormGroup = styled.div`
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerButtons = styled.div`
  padding: 5px;
  margin-top: 10px;
  height: 10%;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1);
  transition: all 200ms ease-in;
  transform: scale(1.05, 1.05);

  :hover {
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.1);
    transition: all 200ms ease-in;
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  background-color: #6a29ff;
  padding: 5px;
  width: 20vw;
  outline: none;
  border: 2px solid #c2a7ff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #ffff;
  transition: 0.3s all;
  margin-bottom: 5px;
  :hover {
    background-color: #854fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;
