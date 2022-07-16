import React from "react";
import styled from "styled-components";
import order from "./../assets/image/order.png";
import someImg from "./../assets/image/sphereBlue.png";
import {Button, H2, } from "../styled/templletes";

const MoreInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const BgImg = styled.div`
  margin: 150px 163px 0 150px;
  @media (max-width: 1400px) {
    display: none;
  }
`
const Content = styled.div`
  width: 670px;
  
  display: flex;
  flex-direction: column;
  
  margin-top: 214px;
  @media (max-width: 1400px) {
   margin-left: 40px;
  }
  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 43px;
    margin-left: 0;
    padding: 0 21px;
  }
`
const Title = styled(H2)`
  margin: 0;
  padding: 0;
  text-align: center;
`
const Description = styled.label`
  color: #111111;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  
  margin: 53px 0 45px 0;
`
const ButtonI = styled(Button)`
  width: 270px;
  height: 60px;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }
`
const ImgBlock = styled.div`
  margin: 135px 145px 104px 40px;
  @media (max-width: 1100px) {
    display: none;
  }
`
const ImgBlock2 = styled(ImgBlock)`
  display: none;
  @media (max-width: 1100px) {
    display: block;
    margin: 29px 0;
  }
`

const OrderIMG = styled.img`
  width: 100%;
  @media (max-width: 1400px) {
    align-self: flex-end;
  }
  
`

const InformationBlock = () => {
    return (
       <MoreInfoBlock id="moreInfo">
            <BgImg>
                <img src={someImg} alt="image"/>
            </BgImg>
           <Content>
               <Title>Необходимо больше информации?</Title>
               <ImgBlock2>
                   <OrderIMG src={order}/>
               </ImgBlock2>
               <Description>
                   Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет  визуализировать ваш веб проект.
               </Description>
               <ButtonI>Оставить заявку</ButtonI>
           </Content>
           <ImgBlock>
               <OrderIMG src={order}/>
           </ImgBlock>
       </MoreInfoBlock>
    )
}
export default InformationBlock;