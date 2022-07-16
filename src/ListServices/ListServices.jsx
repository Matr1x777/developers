import React, {useState} from "react";
import styled from "styled-components";
import {colors} from "../styled/params";
import arrow from "./../assets/image/Arrow.png"

const ListServicesBlock = styled.div`
  padding: 120px 0 110px 0;
  background-color: ${colors.lightBlue};
  @media (max-width: 720px) {
    padding: 16px 20px 30px 20px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
`
const Title = styled.label`
  font-size: 32px;
  font-weight: 800;
  font-style: normal;
  line-height: 40px;
  color: black;
  
  padding-bottom: 60px;
  @media(max-width: 1200px){
    font-size: 24px;
  }
  @media(max-width: 992px){
    font-size: 18px;
  }
  @media (max-width: 720px) {
    padding-bottom: 17px;
  }
`
const ElementBlock = styled.div`
  width: 1170px;
  
  background-color: #FFF;
  border-radius: 15px;
  margin-bottom: 10px;
  @media(max-width: 1200px){
    width: 800px;
  }
  @media(max-width: 1080px){
    width: 600px;
  }
  @media (max-width: 720px) {
    width: 335px;
  }
`
const UpperPath = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:14px 42px 15px 44px;
  @media (max-width: 720px) {
   padding: 23px;
  }
`
const ElementsLeftBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ArrowTop = styled.img`
  transform: rotate(180deg);
`
const ColorCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  margin-right: 28px;
  @media (max-width: 720px) {
    width: 15px;
    height: 15px;
  }
`
const GreenCircle = styled(ColorCircle)`
  background-color: ${colors.green};
`
const BlueCircle = styled(ColorCircle)`
  background-color: ${colors.blue};
`
const ElementTitle = styled.label`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 32px;
  color: black;
  @media (max-width: 720px) {
   width: 80%;
    font-size: 17px;
    line-height: 30px;
  }
`
const DescriptionPath = styled.p`
  margin: 32px 0 32px 55px;
  padding: 5px 95px 5px 40px;
  
  color: #000000;
  border-left:1px solid #000000;

  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 32px;
  @media (max-width: 720px) {
    margin:19px 0 46px 32px;
    padding: 5px 25px;
  }
`

const ListServices = () => {
    const elementInformation = [
        {
            title:"Дизайн портала",
            description:"Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.\n"
        },
        {
            title:"Дизайн адаптивной мобильной версии",
            description:"Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий. \n" +
                "При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. \n" +
                "Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML. \n" +
                "Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.\n"
        },
        {
            title:"Дизайн десктопной версии",
            description:"Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.\n"
        },
        {
            title:"Пользовательский интерфейс",
            description:"Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания. \n"
        },
        {
            title:"Микро UX",
            description:"Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.\n"
        },
    ]

    const Element = (props) =>{
        const [openStatus,setOpenStatus] = useState(false)
        let openDescription = () => {
            setOpenStatus(!openStatus)
        }

        if (openStatus === true) {
            return(
                <ElementBlock >
                    <UpperPath onClick={openDescription}>
                        <ElementsLeftBlock>
                            <BlueCircle></BlueCircle>
                            <ElementTitle>{props.title}</ElementTitle>
                        </ElementsLeftBlock>
                        <ArrowTop src={arrow}/>
                    </UpperPath>
                    <DescriptionPath id="description">{props.description}</DescriptionPath>
                </ElementBlock>
            )
        }else {
            return(
                <ElementBlock >
                    <UpperPath onClick={openDescription}>
                        <ElementsLeftBlock>
                            <GreenCircle></GreenCircle>
                            <ElementTitle>{props.title}</ElementTitle>
                        </ElementsLeftBlock>
                        <img src={arrow} alt="arrow"/>
                    </UpperPath>
                </ElementBlock>
            )
        }

    }

  return(
      <ListServicesBlock id="listServices">
        <Content>
            <Title>Что входит в услугу по созданию дизайна интернет-магазина?</Title>
            {elementInformation.map(e => {
                return(
                    <Element title={e.title} description={e.description}/>
                )
            })}
        </Content>
      </ListServicesBlock>
  )
}
export default ListServices;