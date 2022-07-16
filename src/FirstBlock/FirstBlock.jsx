import React from "react";
import styled from "styled-components";
import FbImg1 from "../assets/image/sphereBlue.png";
import FbImg2 from "../assets/image/someIMG1.png";
import trolley from "../assets/image/trolley.png";
import {colors} from "../styled/params";
import {H1,Button} from "../styled/templletes";

const First = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 6px;
  @media(max-width: 992px){
    flex-direction: column-reverse;
    align-items: center;
  }

`
const ButtonFB = styled.button`
  color: white;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 15px;
  text-transform: uppercase;

  border: none;
  border-radius: 5px;
  background-color: ${colors.green};
`
const BackgroundImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media(max-width: 1367px){
    display: none;
  }
`
const Img1 = styled.img`
  width: 52.57px;
  height: 52.57px;
  margin: 120px 0 0 239px;
`
const Img2Block = styled.div`
  width: 100%;
`
const Content = styled.div`
  padding-left: 83.43px;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
`
const Title = styled(H1)`
  width: 549px;
  margin-top: 171px;
  @media (max-width: 720px) {
    width: 336px;
    margin-top: 40px;
    margin-bottom: 22px;
  }
`
const P = styled.p`
  width: 432px;
  
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 22.4px;
  color: #000000;
  margin: 20px 0 58px 0;
  @media (max-width: 720px) {
    width: 335px;
  }
`
const ButtonBlock1 = styled(Button)`
  width: 270px;
  height: 60px;
  @media (max-width: 720px) {
    margin-bottom: 51px;
  }
`
const TrolleyBlock = styled.div`
  width: 100%;
  @media(max-width: 1560px){
   align-self: flex-end;
  }
  @media(max-width: 720px){
    margin-top: 49px;
  }
`
const Trolley = styled.img`
  width: 100%;
  margin-top: 82px;
  @media (max-width: 720px) {
    margin-top: 35px;
  }
`


const FirstBlock = () => {
    return(
        <First>
            <BackgroundImg>
                <Img1 src={FbImg1}/>
                <Img2Block>
                    <img src={FbImg2}/>
                </Img2Block>
            </BackgroundImg>
            <Content>
                <Title>Разработка интернет-магазина
                    с нуля за неделю</Title>
                <P>
                    Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля
                    до пользовательского интерфейса в сжатые сроки
                    с командой Virtual Designers

                </P>
                <ButtonBlock1>Замовити</ButtonBlock1>
            </Content>
            <TrolleyBlock>
                <Trolley src={trolley}/>
            </TrolleyBlock>
        </First>
    )
}
export default FirstBlock;