import styled from "styled-components";
import bgImage from './bgImage/144.jpg';
import Hero from "./components/Hero.jsx";
import Who from "./components/Who.jsx";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import React from "react";


//используем Container вместо div
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  overflow-y: auto; //если 1280 максимально то можно больше
  scrollbar-width: none; //не видеть полосу прокрутки не работает // скажем отопрожения веб
  color: #111111;
  background-image: url(${bgImage});

  &::-webkit-scrollbar {
    display: none;
  }

`


function App() {


    return (
        <Container>
            <Hero/>
            <Who/>
            <Works/>
            <Contact/>
        </Container>


    )
}

export default App
