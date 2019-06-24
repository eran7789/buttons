import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core'

import { ReactComponent as Fabric1 } from './fabrics/1.svg';
import { ReactComponent as Fabric2 } from './fabrics/2.svg';
import { ReactComponent as Fabric3 } from './fabrics/3.svg';
import { ReactComponent as Fabric4 } from './fabrics/4.svg';
import { ReactComponent as Fabric5 } from './fabrics/5.svg';
import { ReactComponent as Fabric6 } from './fabrics/6.svg';

import ButtonSrc1 from './buttons/1.png';
import ButtonSrc2 from './buttons/2.png';
import ButtonSrc3 from './buttons/3.png';
import ButtonSrc4 from './buttons/4.png';
import ButtonSrc5 from './buttons/5.png';
import ButtonSrc6 from './buttons/6.png';
import ButtonSrc7 from './buttons/7.png';
import ButtonSrc8 from './buttons/8.png';
import ButtonSrc9 from './buttons/9.png';
import ButtonSrc10 from './buttons/10.png';

const buttonsArray = [
  ButtonSrc1,
  ButtonSrc2,
  ButtonSrc3,
  ButtonSrc4,
  ButtonSrc5,
  ButtonSrc6,
  ButtonSrc7,
  ButtonSrc8,
  ButtonSrc9,
  ButtonSrc10
];

const handleButtonClick = (buttonIndexString, setButtonCursorIndex, buttonCursorIndex) => {
  if (buttonIndexString === buttonCursorIndex) {
    setButtonCursorIndex(null);

    return;
  }

  setButtonCursorIndex(buttonIndexString);
}

function Buttons({ setButtonCursorIndex, buttonCursorIndex }) {
  return (
    <ButtonsContainer>
      <img onClick={() => handleButtonClick(0, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc1} />
      <img onClick={() => handleButtonClick(1, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc2} />
      <img onClick={() => handleButtonClick(2, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc3} />
      <img onClick={() => handleButtonClick(3, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc4} />
      <img onClick={() => handleButtonClick(4, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc5} />
      <img onClick={() => handleButtonClick(5, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc6} />
      <img onClick={() => handleButtonClick(6, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc7} />
      <img onClick={() => handleButtonClick(7, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc8} />
      <img onClick={() => handleButtonClick(8, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc9} />
      <img onClick={() => handleButtonClick(9, setButtonCursorIndex, buttonCursorIndex)} alt="button" src={ButtonSrc10} />
    </ButtonsContainer>
  );
}

function Fabrics() {
  return (
    <FabricsContainer>
      <StyledFabric1  />
      <StyledFabric2  />
      <StyledFabric3  />
      <StyledFabric4  />
      <StyledFabric5  />
      <StyledFabric6  />
    </FabricsContainer>
  );
}

function App() {
  const [buttonCursorIndex, setButtonCursorIndex] = useState(null);

  return (
    <>
      {buttonCursorIndex !== null ? (
        <>
          <Global styles={css`
            body {
              cursor: url("${buttonsArray[buttonCursorIndex]}"), auto;
            }
          `}/>
          <Fabrics />
          <Buttons setButtonCursorIndex={setButtonCursorIndex} buttonCursorIndex={buttonCursorIndex} />
        </>
      ) : (
        <>
          <Fabrics />
          <Buttons setButtonCursorIndex={setButtonCursorIndex} buttonCursorIndex={buttonCursorIndex} />
        </>  
        )}
    </>
  );
}

const FabricsContainer = styled.div`
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ButtonsContainer = styled.div`
  width: 20px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: 12/1fr;
`;

const svgTemplate = (svgImage) => styled(svgImage)`
  height: 100%;
  width: 100%;
`;

const StyledFabric1 = svgTemplate(Fabric1);
const StyledFabric2 = svgTemplate(Fabric2);
const StyledFabric3 = svgTemplate(Fabric3);
const StyledFabric4 = svgTemplate(Fabric4);
const StyledFabric5 = svgTemplate(Fabric5);
const StyledFabric6 = svgTemplate(Fabric6);

export default App;
