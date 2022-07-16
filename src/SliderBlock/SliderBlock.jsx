import React, {useState} from "react";
import styled from "styled-components";
import arrow from "./../assets/image/Arrow.png";

import sliderIMG1 from "./../assets/image/sliderIMG/sliderIMG1.png";
import sliderIMG2 from "./../assets/image/sliderIMG/sliderIMG2.png";
import sliderIMG3 from "./../assets/image/sliderIMG/sliderIMG3.png";
import sliderIMG4 from "./../assets/image/sliderIMG/sliderIMG4.png";
import sliderIMG5 from "./../assets/image/sliderIMG/sliderIMG5.png";

import {H2, H3} from "../styled/templletes";
import {colors} from "../styled/params";

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Title = styled(H2)`
  margin-top:123px;
  margin-bottom: 84px;
  text-align: center;
  @media (max-width: 720px) {
    margin-top:42px;
    margin-bottom: 20px;
  }
`
const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  @media (max-width: 720px) {
    height: 100%;
  }
`
const ForSliderElements = styled.div`
  width: 1410px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1400px) {
    width: 1050px;
    justify-content: space-around;
  }
  @media (max-width: 1050px) {
    width: 100%;
  }
`
const SliderElement = styled.div`
  width: 694px;
  height: 391px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  text-align: left;
  border:2px solid ${colors.blue};
  border-radius: 15px;
  @media (max-width: 1400px) {
    width: 500px;
    height: 300px;
  }
  @media (max-width: 1080px) {
    width: 694px;
    height: 391px;
  }
  @media (max-width: 720px) {
    width: 335px;
    height: 615px;
    flex-direction: column;
  }
  
`
const SliderElement2 = styled(SliderElement)`
  @media (max-width: 1080px) {
   display: none;
  }
`
const ForSliderTitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 71px;
  @media (max-width: 720px) {
    margin-left: 33px;
    margin-bottom: 50px;
  }
`
const SliderTitle = styled(H3)`
    color: black;
  @media (max-width: 720px) {
    margin: 27px 0 0 0;
  }
`
const SliderDescription = styled.p`
  width: 300px;
  
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  
  margin-right: 20px;
  @media (max-width: 720px) {
    width: 273px;
    margin:10px 0 0 0;
  }
`
const SliderIMG = styled.img`
  @media (max-width: 1400px) {
   width: 100%;
  }
`
const SliderButtons = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  margin-top: 84px;
  @media (max-width: 1080px) {
    width: 230px;
    margin:25px 0 45px 0 ;
  }
  
`
const SliderNavButton = styled.button`
  width: 60px;
  height: 60px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 2px solid ${colors.blue};
  border-radius: 15px;
  &:hover{
      background-color: ${colors.blue};
  }
`
const PrevArrow = styled.img`
  transform: rotate(90deg);
`
const NextArrow = styled.img`
  transform: rotate(270deg);
`
const SliderBlock = () => {
    const [firstElement,setfirstElement] = useState(0)
    const [activeIndex,setActiveIndex] = useState(1)
    const sliderContent = [
        {
            title:"1. Анализ",
            description:"Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. ",
            image:sliderIMG1
        },
        {
            title:"2. Визуальное решение",
            description:"Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт. ",
            image:sliderIMG2
        },
        {
            title:"3. Техническая реализация",
            description:"После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.",
            image:sliderIMG3
        },
        {
            title:"4. Наполнение контентом ",
            description:"Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом. ",
            image:sliderIMG4
        },
        {
            title:"5. Тестирование",
            description:"Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.",
            image:sliderIMG5
        }
    ]

    let nextSlider = () => {
        if (activeIndex < 4){
            setfirstElement(firstElement + 1)
            setActiveIndex(activeIndex + 1)
        }
    }
    let prevSlider = () => {
        if (activeIndex > 1){
            setfirstElement(firstElement - 1)
            setActiveIndex(activeIndex - 1)
        }
    }


    return(
        <Slider id="stage">
            <Content>
                <Title>Этапы разработки интернет-магазина</Title>
                <SliderContent>
                  <ForSliderElements>
                      <SliderElement>
                          <ForSliderTitleAndDescription>
                              <SliderTitle>{sliderContent[firstElement].title}</SliderTitle>
                              <SliderDescription>{sliderContent[firstElement].description}</SliderDescription>
                          </ForSliderTitleAndDescription>
                          <div>
                              <SliderIMG src={sliderContent[firstElement].image}/>
                          </div>
                      </SliderElement>
                      <SliderElement2>
                          <ForSliderTitleAndDescription>
                              <SliderTitle>{sliderContent[activeIndex].title}</SliderTitle>
                              <SliderDescription>{sliderContent[activeIndex].description}</SliderDescription>
                          </ForSliderTitleAndDescription>
                          <div>
                              <SliderIMG src={sliderContent[activeIndex].image}/>
                          </div>
                      </SliderElement2>
                  </ForSliderElements>
                    <SliderButtons>
                        <SliderNavButton onClick={prevSlider}>
                            <PrevArrow src={arrow}/>
                        </SliderNavButton>
                        <SliderNavButton onClick={nextSlider}>
                            <NextArrow src={arrow}/>
                        </SliderNavButton>
                    </SliderButtons>
                </SliderContent>
            </Content>
        </Slider>


    )
}
export default SliderBlock;