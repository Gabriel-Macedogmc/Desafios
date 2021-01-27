import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const FormGroup = styled.div`
  min-width: 10vw;
  min-height: 10vh;
  padding: 1em;
  margin-left: 2em;
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

export const Buttons = styled.button`
  background-color: #6a29ff;
  padding: 5px;
  min-width: 10vw;
  outline: none;
  border: 2px solid #c2a7ff;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 700;
  color: #ffff;
  transition: 0.3s all;
  margin-bottom: 5px;
  :hover {
    background-color: #854fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;
