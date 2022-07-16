import React from "react";
import styled from "styled-components";
import phoneImg from "./../assets/image/phone.png";
import someImg from "./../assets/image/lastBlockImg.png";
import {Button, H2, Paragraph} from "../styled/templletes";
import {colors} from "../styled/params";

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 180px 0 128px 0;

  background-color: ${colors.lightBlue};
  @media (max-width: 840px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 40px 0;
  }
`
const LeftBg = styled.div`
  margin-top: 82px;
 
`
const RightBg = styled.div`
  margin-top: 110px;
  margin-right: 145px;
  @media (max-width: 1200px) {
    display: none;
  }
`
const FormBlock = styled.div`
  width: 480px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 130px 0 130px;
  @media (max-width: 1400px) {
    margin: 0 30px 0 30px;
  }
  @media (max-width: 840px) {
    width: 335px;
  }
`
const FormTitle = styled(H2)`
  margin: 0 0 30px 0;
 
`
const FormDescription = styled(Paragraph)`
  color: #111111;
  margin: 10px 0 27px 0;
`
const Input = styled.input`
  width: 450px;
  margin-bottom: 20px;
  padding: 19px 14px;

  color: #939393;
  background-color: #FFFFFF;
  border: 1px solid #6EB1FB;
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 840px) {
    width: 335px;
  }
`
const ButtonS = styled(Button)`
  width: 270px;
  height: 60px;

  margin-top: 10px;
`

const ContactBlock = () => {
    return (
        <Contact>
            <LeftBg>
                <img src={phoneImg} alt="phone"/>
            </LeftBg>
            <FormBlock>
                <FormTitle>Обсудить проект</FormTitle>
                <FormDescription>Расскажите о своих бизнес-целях и мы поможем вам в их достижении</FormDescription>
                <Input type="text" placeholder="Имя"/>
                <Input type="text" placeholder="Telegram/Viber"/>
                <Input type="email" placeholder="Email"/>
                <ButtonS>Отправить</ButtonS>
            </FormBlock>
            <RightBg>
                <img src={someImg} alt="image"/>
            </RightBg>
        </Contact>
    )
}
export default ContactBlock;