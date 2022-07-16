import React, {useState} from "react";
import styled from "styled-components";
import {colors} from "../styled/params";
import {Button, MenuText} from "../styled/templletes";

const HeaderBlock = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue};
  @media(max-width: 720px){
    position: fixed;
    height: 49px;
  }
`
const Content = styled.div`
  width: 1170px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media(max-width: 1199.98px){
    padding:0 20px 0 12px;
  }
 
`
const DesktopLogo = styled.div`
  @media(max-width: 720px){
    display: none;
  }
`
const MobileLogo = styled.div`
  display: none;
  @media(max-width: 720px){
    display: block;
  }
`
const Navigation = styled.div`
  width: 620px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 970px){
    width: 400px;
  }
  @media(max-width: 768px){
    display: none;
  }
`
const ButtonE = styled(Button)`
  width: 170px;
  height: 37.78px;
  &:hover{
    border: 2px solid #FFFFFF;
  }
  &:active{
    color: ${colors.blue};
    background-color: #FFFF;
  }
  @media(max-width: 970px){
    display: none;
  }
`
const MobileButton = styled.div`
  width: 50px;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 720px){
    display: flex;
  }
`
const Circle = styled.div`
  width: 13px;
  height: 13px;
  background-color: #FFFFFF;
  border-radius: 50px;
`
const NavList = styled.div`
  position: fixed;
  top: 49px;
  width: 100%;
  height: 328px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: ${colors.blue};
`
const Header = () => {
    const [navStatus,setNavStatus] = useState(false)
    const openNav = () =>{
        setNavStatus(!navStatus)
    }
    const MobileNav = () => {
        if (navStatus === true){
            return(
                <NavList>
                    <MenuText href="#listServices">Услуги</MenuText>
                    <MenuText href="#portfolio">Портфолио</MenuText>
                    <MenuText href="#stage">Этапы</MenuText>
                    <MenuText href="#moreInfo">Дизайнеры</MenuText>
                </NavList>
            )
        }else {
            return (
                <>
                </>
            )
        }
    }
    const LogoSVG = () =>{
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="242"
                height="59"
                fill="none"
                viewBox="0 0 242 59"
            >
                <path
                    fill="url(#paint0_linear_601_15)"
                    d="M47.02 11.902L30.804 58.448h42.564V11.902H47.02z"
                ></path>
                <path
                    fill="#fff"
                    d="M49.047 17.855h8.106l9.729 17.064-9.73 17.483h-8.105l8.916-17.483-8.916-17.064z"
                ></path>
                <path
                    fill="url(#paint1_linear_601_15)"
                    d="M26.348 46.38L42.56 0H0v46.38h26.348z"
                ></path>
                <path
                    fill="#fff"
                    d="M24.725 40.5H16.62l-9.73-17.065 9.73-17.482h8.106L15.81 23.435 24.725 40.5zM79.77 21.185c1.597-.24 3.21-.353 4.824-.34 2.924 0 4.735.49 6.24 1.562 1.673 1.191 2.75 3.148 2.75 6.03 0 3.198-1.17 5.276-2.653 6.47-1.667 1.337-4.152 1.933-7.12 1.933a26.375 26.375 0 01-4.042-.257V21.185zm4.058 12.343c.286.04.575.055.863.046 2.631.033 4.58-1.461 4.58-5.003 0-3.067-1.755-4.51-4.206-4.51a5.565 5.565 0 00-1.237.103v9.364zM108.427 30.337h-5.454v2.892h6.103v3.436H98.908V20.967h9.847v3.436h-5.782v2.534h5.454v3.4zM118.305 36.665l-4.822-15.698h4.463l1.611 6.18a63.78 63.78 0 011.261 5.489h.043a80.038 80.038 0 011.246-5.42l1.649-6.243h4.328l-4.971 15.698-4.808-.006zM142.413 30.337h-5.463v2.892h6.098v3.436h-10.162V20.967h9.846v3.436h-5.782v2.534h5.463v3.4zM148.466 20.967h4.065V33.14h5.849v3.524h-9.914V20.967zM176.92 28.658c0 5.048-2.924 8.264-7.603 8.264s-7.311-3.651-7.311-8.013c0-4.57 2.893-8.196 7.542-8.196 4.893 0 7.372 3.744 7.372 7.945zm-10.603.176c0 2.952 1.243 4.758 3.184 4.758 1.942 0 3.12-1.97 3.12-4.797 0-2.705-1.169-4.752-3.143-4.752-1.915 0-3.158 1.893-3.158 4.79h-.003zM182.245 21.185a30.283 30.283 0 015.003-.34c2.185 0 3.75.41 4.814 1.253a4.658 4.658 0 011.296 1.678c.3.655.448 1.375.432 2.1 0 1.59-.514 2.982-1.476 3.871-1.226 1.137-3.007 1.643-5.054 1.643-.395 0-.742-.034-.991-.052v5.327h-4.024v-15.48zm4.033 6.926c.307.05.619.07.93.06 1.579 0 2.57-.846 2.57-2.195 0-1.171-.748-1.963-2.295-1.963a5.527 5.527 0 00-1.205.108v3.99zM208.47 30.337h-5.454v2.892h6.094v3.436h-10.159V20.967h9.843v3.436h-5.778v2.534h5.454v3.4zM214.532 21.185a31.96 31.96 0 014.904-.34c2.34 0 3.989.334 5.132 1.21.974.769 1.497 1.888 1.497 3.425 0 1.956-1.418 3.348-2.6 3.795v.082c1.01.448 1.553 1.449 1.942 2.813.457 1.594.956 3.877 1.249 4.483h-4.153c-.23-.454-.625-1.682-1.064-3.63-.413-1.881-.968-2.272-2.222-2.272h-.662v5.886h-4.023V21.185zm4.023 6.566h1.059c1.532 0 2.416-.774 2.416-1.95 0-1.177-.749-1.846-2.1-1.858-.46-.02-.921.012-1.375.094v3.714zM231.847 32.484a9.075 9.075 0 003.936.971c1.389 0 2.076-.499 2.076-1.291 0-.793-.681-1.192-2.397-1.8-2.557-.938-4.261-2.398-4.261-4.733 0-2.777 2.263-4.906 6.096-4.906a9.66 9.66 0 014.095.801l-.851 3.36a7.79 7.79 0 00-3.299-.744c-1.237 0-1.918.47-1.918 1.159 0 .795.804 1.116 2.719 1.857 2.735 1.034 3.957 2.55 3.957 4.734 0 2.722-2.047 5.017-6.468 5.017-1.831 0-3.604-.496-4.463-.955l.778-3.47z"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_601_15"
                        x1="-84794.9"
                        x2="-84794.9"
                        y1="63458.2"
                        y2="56091.9"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ACC0FE"></stop>
                        <stop offset="1" stopColor="#4B086D"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_601_15"
                        x1="-89303.2"
                        x2="-89303.2"
                        y1="65070.2"
                        y2="57730.6"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ACC0FE"></stop>
                        <stop offset="1" stopColor="#4B086D"></stop>
                    </linearGradient>
                </defs>
            </svg>
        )
    }
    const MobileLogoSVG = () =>{
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="136"
                height="35"
                fill="none"
                viewBox="0 0 136 35"
            >
                <path
                    fill="url(#paint0_linear_601_30)"
                    d="M26.424 7.06l-9.113 27.613h23.92V7.06H26.424z"
                ></path>
                <path
                    fill="#fff"
                    d="M27.563 10.592h4.556l5.467 10.123-5.467 10.37h-4.556l5.011-10.37-5.01-10.123z"
                ></path>
                <path
                    fill="url(#paint1_linear_601_30)"
                    d="M14.807 27.513L23.918 0H0v27.513h14.807z"
                ></path>
                <path
                    fill="#fff"
                    d="M13.895 24.025H9.34L3.872 13.902 9.34 3.532h4.555l-5.01 10.37 5.01 10.123zM44.829 12.567a16.36 16.36 0 012.712-.2c1.643 0 2.66.29 3.507.925.94.707 1.544 1.868 1.544 3.578 0 1.896-.657 3.129-1.49 3.838-.937.793-2.334 1.146-4.002 1.146-.76.011-1.519-.04-2.271-.152v-9.135zm2.28 7.323c.162.023.324.032.486.026 1.479.02 2.573-.866 2.573-2.967 0-1.82-.986-2.676-2.363-2.676a2.97 2.97 0 00-.695.062v5.555zM60.934 17.996H57.87v1.716h3.43v2.038h-5.714v-9.312h5.533v2.038H57.87v1.504h3.065v2.016zM66.485 21.75l-2.71-9.312h2.508l.906 3.665a39.49 39.49 0 01.708 3.257h.025c.205-1.136.45-2.214.7-3.215l.927-3.704h2.432l-2.793 9.313-2.703-.004zM80.034 17.996h-3.07v1.716h3.427v2.038H74.68v-9.312h5.533v2.038h-3.249v1.504h3.07v2.016zM83.436 12.438h2.284v7.222h3.287v2.09h-5.572v-9.312zM99.426 17c0 2.995-1.643 4.903-4.273 4.903s-4.108-2.166-4.108-4.753c0-2.712 1.625-4.863 4.238-4.863 2.75 0 4.143 2.221 4.143 4.714zm-5.959.105c0 1.75.699 2.822 1.79 2.822 1.091 0 1.753-1.168 1.753-2.846 0-1.604-.657-2.818-1.766-2.818-1.077 0-1.775 1.123-1.775 2.842h-.002zM102.419 12.567a16.132 16.132 0 012.811-.2c1.228 0 2.108.241 2.706.742.31.265.559.606.728.995.169.39.252.816.243 1.246 0 .944-.289 1.77-.83 2.297-.688.674-1.69.974-2.84.974-.222 0-.417-.02-.557-.03v3.16h-2.261v-9.184zm2.266 4.109c.173.03.348.041.523.036.887 0 1.444-.503 1.444-1.303 0-.694-.42-1.164-1.29-1.164a2.955 2.955 0 00-.677.064v2.367zM117.157 17.996h-3.066v1.716h3.426v2.038h-5.71v-9.312h5.532v2.038h-3.248v1.504h3.066v2.016zM120.563 12.567a17.044 17.044 0 012.756-.2c1.315 0 2.242.196 2.885.717.547.456.841 1.12.841 2.03 0 1.162-.797 1.987-1.461 2.253v.048c.567.266.873.86 1.091 1.669.257.945.537 2.3.702 2.659h-2.334c-.129-.27-.351-.998-.598-2.153-.232-1.116-.544-1.348-1.249-1.348h-.372v3.492h-2.261v-9.167zm2.261 3.895h.595c.862 0 1.358-.459 1.358-1.157s-.421-1.094-1.18-1.102a3.324 3.324 0 00-.773.056v2.203zM130.294 19.27c.69.367 1.445.564 2.212.577.781 0 1.167-.297 1.167-.767 0-.47-.383-.706-1.347-1.067-1.437-.556-2.395-1.423-2.395-2.808 0-1.647 1.272-2.91 3.426-2.91a5.18 5.18 0 012.301.475l-.478 1.993a4.185 4.185 0 00-1.854-.441c-.695 0-1.078.278-1.078.687 0 .472.452.662 1.528 1.102 1.537.613 2.224 1.512 2.224 2.808 0 1.615-1.15 2.977-3.635 2.977-1.029 0-2.025-.295-2.508-.567l.437-2.058z"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_601_30"
                        x1="-47653.3"
                        x2="-47653.3"
                        y1="37644.7"
                        y2="33274.9"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ACC0FE"></stop>
                        <stop offset="1" stopColor="#4B086D"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_601_30"
                        x1="-50186.9"
                        x2="-50186.9"
                        y1="38601"
                        y2="34247"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ACC0FE"></stop>
                        <stop offset="1" stopColor="#4B086D"></stop>
                    </linearGradient>
                </defs>
            </svg>
        );
    }
    return (
        <HeaderBlock>
            <Content>
                <DesktopLogo href="/">
                    <LogoSVG/>
                </DesktopLogo>
                <MobileLogo href="/">
                    <MobileLogoSVG/>
                </MobileLogo>
                <Navigation>
                    <MenuText href="#listServices">Услуги</MenuText>
                    <MenuText href="#portfolio">Портфолио</MenuText>
                    <MenuText href="#stage">Этапы</MenuText>
                    <MenuText href="#moreInfo">Дизайнеры</MenuText>
                    <ButtonE>Заказать</ButtonE>
                </Navigation>
                <MobileButton onClick={openNav}>
                    <Circle></Circle>
                    <Circle></Circle>
                    <Circle></Circle>
                </MobileButton>
            </Content>
            <MobileNav/>
        </HeaderBlock>
    )
}
export default Header;