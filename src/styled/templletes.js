import styled from "styled-components";
import {colors} from "./params";

export const H1 = styled.h1`
  color: #484848;
  font-size: 50px;
  font-weight: 900;
  font-style: normal;
  line-height: 62px;
  @media(max-width: 576px){
    color: #000000;
    font-size: 30px;
    font-weight: 800;
    font-style: normal;
    line-height: 32.4px;
  }
`
export const H2 = styled.h2`
  color: #000000;
  font-size: 32px;
  font-weight: 800;
  font-style: normal;
  line-height: 40px;
  @media(max-width: 576px){
    font-size: 23px;
    font-weight: 800;
    font-style: normal;
    line-height: 34.5px;
  }
`
export const H3 = styled.h3`
  font-size: 21px;
  font-weight: 700;
  font-style: normal;
  line-height: 26px;
  @media(max-width: 576px){
    font-size: 17px;
    font-weight: 800;
    font-style: normal;
    line-height: 27px;
    text-transform: uppercase;
  }
`
export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 32px;
  @media(max-width: 576px){
    font-size: 17px;
    font-weight: 400;
    font-style: normal;
    line-height: 30px;
  }
`
export const Button = styled.button`
  color: white;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: 15px;
  text-transform: uppercase;
  
  border: none;
  border-radius: 5px;
  background-color: ${colors.green};
  &:hover{
    border: 2px solid ${colors.blue};
  }
  &:active{
    background-color: ${colors.blue};
  }
  @media(max-width: 576px){
    font-size: 15px;
    font-weight: 700;
    font-style: normal;
    line-height: 26px;
    text-transform: uppercase;
  }
`
export const MenuText = styled.a`
  color: #FFFF;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 20px;
  text-decoration: none;
  text-transform: capitalize;
  @media(max-width: 576px){
    width: 100%;
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 27px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 45px;
    &:hover{
      border-bottom: 2px solid #FFFFFF;
    }
  }
`

