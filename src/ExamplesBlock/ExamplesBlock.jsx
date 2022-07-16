import React from "react";
import styled from "styled-components";
import {colors} from "../styled/params";
import {H2, H3, Paragraph} from "../styled/templletes";

import exampleIMG1 from "./../assets/image/examples/example1.png";
import exampleIMG2 from "./../assets/image/examples/example2.png";
import exampleIMG3 from "./../assets/image/examples/example3.png";
import exampleIMG4 from "./../assets/image/examples/example4.png";
import exampleIMG5 from "./../assets/image/examples/example5.png";
import exampleIMG6 from "./../assets/image/examples/example6.png";

const Examples = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lightBlue};
  @media(max-width: 720px){
   padding: 0 20px;
  }
`
const Title = styled(H2)`
  margin-top: 121px;
  margin-bottom: 51px;
  @media(max-width: 720px){
    align-self: center;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 15px;
  }
`
const ExamplesList = styled.div`
  width: 1160px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media(max-width: 1200px){
    width: 100%;
    justify-content: space-around;
  }
`

const Element = styled.div`
  width: 570px;
  height: 447px;

  margin-bottom: 38px;

  border-radius: 15px;
  
  @media(max-width: 1200px){
    width: 450px;
    height: 360px;
  }
  @media(max-width: 720px){
    width: 335px;
    height: 260px;
    margin-bottom: 15px;
  }
  &:hover {
    Img {
      display: none;
      BackSide{
        display: flex;
      }
    }
    
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const BackSide = styled.div`
  width: 100%;
  height: 100%;

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.blue};
  border-radius: 15px;
`
const ExampleTitle = styled(H3)`
  margin: 0;
  padding: 0;
`
const ExampleText = styled(Paragraph)`
  color: white;
  margin: 0;
  padding: 0;
`

const ExamplesBlock = () => {
    const examplesInfo = [
        {
            image: exampleIMG1,
            name: "Онлайн-магазин",
            description: "для оптовых покупок"

        },
        {
            image: exampleIMG2,
            name: "Онлайн-магазин",
            description: "для флористов"
        },
        {
            image: exampleIMG3,
            name: "Онлайн-магазин",
            description: "для парикмахеров"
        },
        {
            image: exampleIMG4,
            name: "Онлайн-магазин",
            description: "для визажистов"
        },
        {
            image: exampleIMG5,
            name: "Онлайн-магазин",
            description: "для кондитеров"
        },
        {
            image: exampleIMG6,
            name: "Онлайн-магазин",
            description: "для художников"
        }

    ]

    return (
        <Examples id="portfolio">
            <Title>Примеры онлайн-магазинов</Title>
            <ExamplesList>
                {examplesInfo.map(e => {
                    return (
                        <Element>
                            <Img src={e.image}/>
                            <BackSide>
                                <ExampleTitle>{e.name}</ExampleTitle>
                                <ExampleText>{e.description}</ExampleText>
                            </BackSide>
                        </Element>
                    )
                })}
            </ExamplesList>
        </Examples>
    )
}
export default ExamplesBlock;