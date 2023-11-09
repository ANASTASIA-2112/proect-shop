import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import React, {Suspense} from "react";
import Cubes from "./Cubes.jsx";
import {OrbitControls} from "@react-three/drei";


//Навигационная понель и контейнер
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; // по центру 
  display: flex; //гибкий
  justify-content: center; //содержимое по центру 

`
const Container = styled.div`
  width: 1400px;
  height: 100vh;
  scroll-snap-align: center; // по центру 
  display: flex;
  justify-content: space-between; //содержимое по центр



`
//создаем левую сторону и правую
// текст,строка,кнопка
//создадим товары сами по себе
const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; //вертикально по контенту и промежутку между ними 
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

`
const Title = styled.h1`
  font-size: 74px;
  color: #da733c;
  font-family: sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }

`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`
  color: #2f2c2f;
  font-size: 40px;
`
const Desc = styled.p`
  font-size: 35px;
  color: #fa0f0f;
`


const Button = styled.button`
  background-color: #da733c;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{position: [5, 5, 5], fov: 25}}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5}/>
                            <directionalLight position={[3, 2, 1]}/>
                            <Cubes/>
                            <OrbitControls enableZoom={false} autoRotate/>
                        </Suspense>
                    </Canvas>
                </Left>
                <Right>
                    <Title>Продукция</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png"></Line>
                        <Subtitle>Каталог</Subtitle>
                    </WhatWeDo>
                    <Desc>Акции!</Desc>
                    <Button>Подробнее узнать</Button>
                </Right>
            </Container>
        </Section>
    );
};

export default Who;