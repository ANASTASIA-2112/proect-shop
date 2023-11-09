
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import styled from "styled-components";
import Map from "./Map";


const Section= styled.div`
  height: 100vh;
  scroll-snap-align: center;// по центру 
`

const Container= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

`

const Left= styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

`

const Title= styled.h1`
  font-weight: 200;//вес шрифта 
`

const Form= styled.form`
  width: 500px;
  display: flex;
  flex-direction: column; //флаги
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }

`

const Input= styled.input`
  padding: 20px; //отступ 
  background-color: wheat;
  border: none;
  border-radius: 5px;

`

const TextArea= styled.textarea`
  padding: 20px;//отступ
  background-color: wheat;
  border: none;
  border-radius: 5px;
`

const Button= styled.button`
  background-color: #e18f59;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;//отступ
`

const Right= styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }

`


 export const Contact = () => {
    const ref = useRef();
    const [success,setSuccess]=useState(null);

    const sendEmail=(e)=> {
       e.preventDefault();


        emailjs
            .sendForm('service_19yhnty', 'template_daeov3a', ref.current, 'b6rVmlXR8ldyVeyBG')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
               console.log(error.text);
                setSuccess(false);
            });

    };
    return (
        <Section>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={sendEmail}>
                        <Title>Контакты</Title>
                        <Input placeholder="Name" name="name" autocomplete="name" />
                        <Input  placeholder="Email" email="email" autocomplete="email"  />
                        <TextArea
                            placeholder="Write your message"
                            name="message"
                            rows={10}
                        />
                        <Button  type="submit" >Отправить</Button>
                        {success &&
                            "Your message has been sent. We'll get back to you soon :)"}

                    </Form>
                </Left>
                <Right>
                    <Map/>
                </Right>
            </Container>
        </Section>
    );
};

export default Contact;