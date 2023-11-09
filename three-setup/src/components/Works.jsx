import styled from "styled-components";
import React, {useState} from "react";
import WebDesign from "./WebDesign.jsx";
import ProductDesing from "./ProductDesing.jsx";
import Development from "./Development.jsx";


const data = [
    "Женская одежда",
    "Мужская одежда",
    "Детская обувь",
    "...",

];


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; // по центру
  display: flex;
  justify-content: space-between;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`
//раставляйте флажки и указывайте растояние между ними
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

`
const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #721b1b;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }


  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #c0502e;
    width: 0; /* Установите начальную ширину на 0 */
    overflow: hidden;
    white-space: nowrap;
  }

  /* Установите ключевые кадры и продолжительность анимации */
  @keyframes moveText {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  /* Применение анимации к селектору при наведении */

  &:hover::after {
    animation: moveText 0.5s linear both; /* Установите продолжительность и способ интерполяции */
  }
`

const Right = styled.div`
  flex: 8;
  width: 1000px;
  height: 700px;
`


const Works = () => {
    const [work, setWork] = useState("");
    return (
        <Section>
            <Container>

                <Left>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                    <Right>
                        {work === "Женская одежда" ? <WebDesign/> : " "}
                        {work === "Мужская одежда" ? <ProductDesing/> : " "}
                        {work === "Детская обувь" ? <Development/> : " "}

                    </Right>
                </Left>
            </Container>
        </Section>
    );
};

export default Works;