import React from "react";
import styled from "styled-components";
import {colors} from "../styled/params";

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 101px 0 79px 0;
  background-color: ${colors.blue};
  @media (max-width: 720px) {
    padding: 46px 46px 150px 46px;
  }
`
const DesktopFooter = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    display: none;
  }
`
const MobileFooter = styled.div`
  display: none;
  flex-direction: column;
  @media (max-width: 720px) {
    display: flex;
  }
`
const LinksBlock = styled.div`
  display: flex;
  flex-direction: column;
`
const Logo = styled.div`
  margin-bottom: 45px;
`
const Links = styled.div`
  width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 720px) {
    align-self: center;
    width: 240px;
  }
`
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 26px 0 0 120px;
  @media (max-width: 720px) {
    margin: 26px 0 60px 0;
  }
  
`
const Element = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 13px;
  @media (max-width: 720px) {
    margin-left: 10px;
  }
`
const ElementText = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #FFFFFF;
  margin-left: 9.56px;
  @media (max-width: 720px) {
    font-size: 16px;
    line-height: 22px;
  }
`

const Email = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #FFFFFF;
  
  margin-top: 26px;
  margin-right: 150px;
  @media (max-width: 1200px) {
    margin-right: 0;
  }
  @media (max-width: 720px) {
    width: 210px;
    align-self: center;
    margin-top: 42px;
  }
`
const LastText = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  
  color: #FFFFFF;
  
  margin-top: 120px;
  @media (max-width: 720px) {
    margin-top: 24px;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
`

const Footer = () => {
    let LogoSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="280"
                height="66"
                fill="none"
                viewBox="0 0 280 66"
            >
                <path
                    fill="url(#paint0_linear_601_61)"
                    d="M54.403 13.314L35.642 65.383h49.246V13.314H54.403z"
                ></path>
                <path
                    fill="#fff"
                    d="M56.748 19.973h9.38l11.256 19.09-11.257 19.556h-9.379l10.316-19.557-10.316-19.09z"
                ></path>
                <path
                    fill="url(#paint1_linear_601_61)"
                    d="M30.485 51.882L49.243 0H0v51.882h30.485z"
                ></path>
                <path
                    fill="#fff"
                    d="M28.608 45.305h-9.38L7.973 26.215 19.228 6.66h9.38L18.29 26.215l10.317 19.09zM92.295 23.698a36.758 36.758 0 015.583-.38c3.383 0 5.478.55 7.22 1.747 1.935 1.333 3.18 3.522 3.18 6.746 0 3.577-1.353 5.901-3.068 7.238-1.929 1.495-4.805 2.162-8.24 2.162a31.532 31.532 0 01-4.675-.288V23.698zm4.696 13.808c.331.044.665.061.998.05 3.045.038 5.299-1.634 5.299-5.596 0-3.43-2.03-5.044-4.866-5.044-.48-.014-.96.025-1.43.115v10.475zM125.453 33.936h-6.311v3.235h7.062v3.844h-11.765v-17.56h11.393v3.843h-6.69v2.835h6.311v3.803zM136.882 41.015l-5.579-17.56h5.163l1.864 6.912c.552 1.966 1.036 3.887 1.459 6.14h.05a87.325 87.325 0 011.442-6.062l1.908-6.984h5.007l-5.751 17.56-5.563-.006zM164.775 33.936h-6.32v3.235h7.055v3.844h-11.758v-17.56h11.392v3.843h-6.689v2.835h6.32v3.803zM171.779 23.454h4.703v13.619h6.767v3.942h-11.47v-17.56zM204.701 32.059c0 5.647-3.383 9.243-8.797 9.243-5.414 0-8.459-4.084-8.459-8.963 0-5.112 3.347-9.169 8.726-9.169 5.661 0 8.53 4.189 8.53 8.889zm-12.268.196c0 3.302 1.438 5.322 3.684 5.322 2.247 0 3.61-2.203 3.61-5.366 0-3.025-1.353-5.316-3.637-5.316-2.216 0-3.654 2.119-3.654 5.36h-.003zM210.862 23.698a36.227 36.227 0 015.789-.38c2.528 0 4.338.458 5.57 1.402a5.223 5.223 0 011.999 4.226c0 1.78-.595 3.336-1.708 4.33-1.418 1.273-3.479 1.838-5.847 1.838-.457 0-.859-.037-1.147-.058v5.959h-4.656V23.697zm4.666 7.748c.356.055.716.078 1.076.068 1.827 0 2.974-.948 2.974-2.457 0-1.31-.866-2.196-2.656-2.196a6.61 6.61 0 00-1.394.122v4.463zM241.205 33.936h-6.311v3.235h7.052v3.844h-11.755v-17.56h11.389v3.843h-6.686v2.835h6.311v3.803zM248.219 23.698a38.231 38.231 0 015.674-.379c2.707 0 4.615.372 5.938 1.353 1.127.86 1.732 2.112 1.732 3.83 0 2.19-1.641 3.746-3.008 4.247v.091c1.168.5 1.797 1.62 2.247 3.147.528 1.783 1.106 4.337 1.445 5.014h-4.805c-.267-.507-.724-1.881-1.231-4.06-.478-2.105-1.12-2.541-2.572-2.541h-.765v6.584h-4.655V23.698zm4.655 7.346h1.225c1.773 0 2.795-.867 2.795-2.183 0-1.316-.866-2.064-2.429-2.077a7.45 7.45 0 00-1.591.105v4.155zM268.253 36.339a10.786 10.786 0 004.554 1.086c1.607 0 2.402-.559 2.402-1.445 0-.887-.788-1.333-2.774-2.013-2.958-1.05-4.93-2.683-4.93-5.295 0-3.107 2.619-5.489 7.054-5.489a11.504 11.504 0 014.737.897l-.984 3.76a9.272 9.272 0 00-3.817-.833c-1.431 0-2.219.524-2.219 1.296 0 .89.93 1.248 3.146 2.077 3.164 1.157 4.578 2.853 4.578 5.295 0 3.046-2.368 5.614-7.484 5.614-2.118 0-4.169-.555-5.163-1.07l.9-3.88z"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_601_61"
                        x1="-98109.8"
                        x2="-98109.8"
                        y1="70987.2"
                        y2="62746.9"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ACC0FE"></stop>
                        <stop offset="1" stopColor="#4B086D"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_601_61"
                        x1="-103326"
                        x2="-103326"
                        y1="72790.4"
                        y2="64580"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ACC0FE"></stop>
                        <stop offset="1" stopColor="#4B086D"></stop>
                    </linearGradient>
                </defs>
            </svg>
        );
    };
    let MobileLogoSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="280"
                height="66"
                fill="none"
                viewBox="0 0 280 66"
            >
                <path
                    fill="url(#paint0_linear_601_45)"
                    d="M54.403 13.314L35.642 65.383h49.246V13.313H54.403z"
                ></path>
                <path
                    fill="#fff"
                    d="M56.748 19.973h9.38l11.256 19.09-11.257 19.556h-9.379l10.316-19.557-10.316-19.09z"
                ></path>
                <path
                    fill="url(#paint1_linear_601_45)"
                    d="M30.485 51.882L49.243 0H0v51.882h30.485z"
                ></path>
                <path
                    fill="#fff"
                    d="M28.608 45.305h-9.38L7.973 26.215 19.228 6.66h9.38L18.29 26.215l10.317 19.09zM92.295 23.698a36.758 36.758 0 015.583-.379c3.383 0 5.478.548 7.22 1.746 1.935 1.333 3.18 3.522 3.18 6.747 0 3.576-1.353 5.9-3.068 7.237-1.929 1.495-4.805 2.162-8.24 2.162a31.532 31.532 0 01-4.675-.288V23.698zm4.696 13.808c.331.044.665.061.998.05 3.045.038 5.299-1.633 5.299-5.595 0-3.431-2.03-5.045-4.866-5.045-.48-.014-.96.025-1.43.115v10.475zM125.453 33.936h-6.311v3.235h7.062v3.844h-11.765v-17.56h11.393v3.843h-6.69v2.835h6.311v3.803zM136.882 41.015l-5.579-17.56h5.163l1.864 6.912c.552 1.966 1.036 3.887 1.459 6.14h.05a87.325 87.325 0 011.442-6.062l1.908-6.984h5.007l-5.751 17.56-5.563-.006zM164.775 33.936h-6.32v3.235h7.055v3.844h-11.758v-17.56h11.392v3.843h-6.689v2.835h6.32v3.803zM171.779 23.454h4.703v13.619h6.767v3.942h-11.47v-17.56zM204.701 32.058c0 5.647-3.383 9.244-8.797 9.244-5.414 0-8.459-4.084-8.459-8.963 0-5.112 3.347-9.169 8.726-9.169 5.661 0 8.53 4.189 8.53 8.888zm-12.268.197c0 3.302 1.438 5.322 3.684 5.322 2.247 0 3.61-2.203 3.61-5.366 0-3.025-1.353-5.316-3.637-5.316-2.216 0-3.654 2.118-3.654 5.36h-.003zM210.862 23.698a36.227 36.227 0 015.789-.379c2.528 0 4.338.457 5.57 1.4a5.223 5.223 0 011.999 4.226c0 1.78-.595 3.337-1.708 4.332-1.418 1.272-3.479 1.837-5.847 1.837-.457 0-.859-.037-1.147-.058v5.959h-4.656V23.698zm4.666 7.748c.356.055.716.078 1.076.068 1.827 0 2.974-.948 2.974-2.457 0-1.31-.866-2.195-2.656-2.195a6.61 6.61 0 00-1.394.121v4.463zM241.205 33.936h-6.311v3.235h7.052v3.844h-11.755v-17.56h11.389v3.843h-6.686v2.835h6.311v3.803zM248.219 23.698a38.231 38.231 0 015.674-.379c2.707 0 4.615.372 5.938 1.353 1.127.86 1.732 2.112 1.732 3.83 0 2.19-1.641 3.746-3.008 4.247v.091c1.168.5 1.797 1.62 2.247 3.147.528 1.783 1.106 4.337 1.445 5.014h-4.805c-.267-.507-.724-1.881-1.231-4.06-.478-2.105-1.12-2.541-2.572-2.541h-.765v6.584h-4.655V23.698zm4.655 7.346h1.225c1.773 0 2.795-.867 2.795-2.183 0-1.316-.866-2.064-2.429-2.077a7.45 7.45 0 00-1.591.105v4.155zM268.253 36.339a10.786 10.786 0 004.554 1.086c1.607 0 2.402-.559 2.402-1.445s-.788-1.333-2.774-2.013c-2.958-1.05-4.93-2.683-4.93-5.295 0-3.106 2.619-5.488 7.054-5.488a11.504 11.504 0 014.737.896l-.984 3.76a9.272 9.272 0 00-3.817-.833c-1.431 0-2.219.524-2.219 1.296 0 .89.93 1.248 3.146 2.077 3.164 1.157 4.578 2.853 4.578 5.295 0 3.046-2.368 5.614-7.484 5.614-2.118 0-4.169-.555-5.163-1.07l.9-3.88z"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_601_45"
                        x1="-98109.8"
                        x2="-98109.8"
                        y1="70987.2"
                        y2="62746.9"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ACC0FE"></stop>
                        <stop offset="1" stopColor="#4B086D"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_601_45"
                        x1="-103326"
                        x2="-103326"
                        y1="72790.4"
                        y2="64580"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#ACC0FE"></stop>
                        <stop offset="1" stopColor="#4B086D"></stop>
                    </linearGradient>
                </defs>
            </svg>
        );
    };
    let InstagramSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 26 26"
            >
                <path
                    fill="#fff"
                    d="M12.64 6.573a6.067 6.067 0 106.068 6.067 6.074 6.074 0 00-6.068-6.067zm0 10.112a4.045 4.045 0 110-8.089 4.045 4.045 0 010 8.09zM18.202 0H7.08A7.087 7.087 0 000 7.079v11.123a7.087 7.087 0 007.079 7.079h11.123a7.086 7.086 0 007.079-7.079V7.08A7.086 7.086 0 0018.202 0zm5.056 18.202a5.062 5.062 0 01-5.056 5.056H7.08a5.062 5.062 0 01-5.057-5.056V7.08A5.062 5.062 0 017.08 2.022h11.123a5.062 5.062 0 015.056 5.057v11.123zM20.73 6.067a1.517 1.517 0 11-3.033 0 1.517 1.517 0 013.033 0z"
                ></path>
            </svg>
        );
    };
    let FacebookSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="26"
                fill="none"
                viewBox="0 0 14 26"
            >
                <path
                    fill="#fff"
                    d="M9.073 1.633l.153.025h2.124v2.45H9.226c-.119 0-.234.008-.345.025a.711.711 0 00-.268.089 1.584 1.584 0 00-.346.293.799.799 0 00-.153.319l-.026.128-.013.09V8.98h4.145l-.589 2.449H8.075v12.245H5.62V11.429H2.345v-2.45H5.62v-3.8c0-.528.068-1 .204-1.416.137-.417.32-.744.55-.982a5.1 5.1 0 01.704-.613c.238-.17.503-.289.793-.357.29-.068.52-.115.69-.14.17-.026.341-.038.512-.038zm0-1.633c-1.057 0-2.004.255-2.84.765-1.5.902-2.25 2.373-2.25 4.414v2.168H2.344c-.443 0-.827.162-1.151.485A1.567 1.567 0 00.708 8.98v2.449c0 .442.162.825.486 1.148.324.323.708.484 1.151.484h1.637v10.587c0 .46.158.846.474 1.161.315.315.703.472 1.163.472h2.456c.444 0 .827-.157 1.151-.472.324-.315.487-.702.487-1.16V13.06h1.918a1.6 1.6 0 00.998-.331c.29-.221.486-.502.588-.842l.563-2.45c.153-.526.068-1.007-.256-1.44a1.546 1.546 0 00-1.304-.651H9.713V5.74h1.637c.443 0 .827-.162 1.15-.485.325-.323.487-.706.487-1.148V1.658c0-.459-.158-.846-.473-1.16a1.554 1.554 0 00-1.139-.472H9.278A.843.843 0 009.073 0z"
                ></path>
            </svg>
        );
    };
    let TelegramSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                fill="none"
                viewBox="0 0 28 26"
            >
                <path
                    fill="#fff"
                    d="M26.959.447a1.754 1.754 0 00-1.83-.319L1.421 9.668a1.81 1.81 0 00-.872.745 1.877 1.877 0 00.19 2.199c.26.296.606.498.987.576l6.228 1.276v7.92c0 .364.105.72.302 1.023.198.304.479.54.807.68.33.139.69.175 1.04.104.349-.071.67-.247.92-.505l3.503-3.588 5.24 4.722a1.759 1.759 0 001.739.37c.297-.096.564-.271.775-.506.21-.236.358-.524.426-.835l4.831-21.595a1.88 1.88 0 00-.043-.986 1.84 1.84 0 00-.536-.821zM1.823 11.405a.249.249 0 01.033-.164.24.24 0 01.13-.104L21.82 3.155l-13.274 9.82-6.518-1.335a.236.236 0 01-.145-.079.247.247 0 01-.06-.156zM9.935 22.57a.255.255 0 01-.28.057.26.26 0 01-.116-.097.268.268 0 01-.043-.146v-6.821l3.872 3.49-3.433 3.517zm11.27.926a.266.266 0 01-.172.192.251.251 0 01-.249-.053L9.96 13.878 26.014 2.002l-4.81 21.494z"
                ></path>
            </svg>
        );
    };
    let ViberSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                fill="none"
                viewBox="0 0 25 26"
            >
                <path
                    fill="#fff"
                    d="M21.934 2.464C21.307 1.886 18.77.044 13.111.02c0 0-6.671-.4-9.92 2.582C1.384 4.409.747 7.061.678 10.344.608 13.628.525 19.78 6.455 21.45h.005l-.005 2.548s-.04 1.032.642 1.24c.82.256 1.303-.529 2.088-1.373a77.353 77.353 0 001.472-1.664c4.059.34 7.174-.44 7.53-.553.82-.267 5.456-.86 6.206-7.012.78-6.35-.375-10.36-2.459-12.171zm.687 11.707c-.637 5.135-4.395 5.461-5.086 5.683-.296.094-3.037.776-6.478.553 0 0-2.568 3.096-3.368 3.901-.261.262-.548.237-.543-.281 0-.341.02-4.232.02-4.232-.005 0-.005 0 0 0-5.027-1.392-4.73-6.631-4.676-9.372.054-2.74.573-4.987 2.103-6.498 2.75-2.493 8.414-2.123 8.414-2.123 4.785.02 7.076 1.462 7.61 1.946 1.762 1.51 2.66 5.125 2.004 10.423zm-6.864-3.99c.02.425-.617.455-.637.03-.054-1.086-.563-1.615-1.61-1.674-.424-.025-.384-.662.035-.637 1.378.074 2.143.864 2.212 2.281zm1.003.558c.05-2.093-1.26-3.733-3.743-3.915-.42-.03-.375-.667.044-.637 2.864.207 4.39 2.177 4.336 4.567-.005.425-.647.405-.637-.015zm2.32.662c.005.425-.636.43-.636.005-.03-4.024-2.711-6.217-5.965-6.241-.42-.005-.42-.637 0-.637 3.639.024 6.567 2.538 6.602 6.873zm-.557 4.844v.01c-.534.938-1.531 1.975-2.558 1.644l-.01-.015c-1.042-.291-3.496-1.555-5.046-2.79-.8-.632-1.531-1.377-2.094-2.093a16.02 16.02 0 01-1.52-2.301C6.241 8.799 6.01 7.95 6.01 7.95c-.33-1.028.702-2.025 1.645-2.558h.01c.454-.237.888-.158 1.18.192 0 0 .612.731.874 1.092.247.335.577.874.75 1.175.301.538.114 1.086-.182 1.313l-.593.474c-.301.242-.262.691-.262.691s.88 3.323 4.163 4.163c0 0 .449.04.691-.262l.474-.592c.227-.297.775-.484 1.313-.183.726.41 1.65 1.047 2.262 1.624.345.282.424.711.188 1.166z"
                ></path>
            </svg>
        );
    };
    let ViberSmallSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.56"
                height="22.5"
                fill="none"
                viewBox="0 0 25 26"
            >
                <path
                    fill="#fff"
                    d="M21.934 2.464C21.307 1.886 18.77.044 13.111.02c0 0-6.671-.4-9.92 2.582C1.384 4.409.747 7.061.678 10.344.608 13.628.525 19.78 6.455 21.45h.005l-.005 2.548s-.04 1.032.642 1.24c.82.256 1.303-.529 2.088-1.373a77.353 77.353 0 001.472-1.664c4.059.34 7.174-.44 7.53-.553.82-.267 5.456-.86 6.206-7.012.78-6.35-.375-10.36-2.459-12.171zm.687 11.707c-.637 5.135-4.395 5.461-5.086 5.683-.296.094-3.037.776-6.478.553 0 0-2.568 3.096-3.368 3.901-.261.262-.548.237-.543-.281 0-.341.02-4.232.02-4.232-.005 0-.005 0 0 0-5.027-1.392-4.73-6.631-4.676-9.372.054-2.74.573-4.987 2.103-6.498 2.75-2.493 8.414-2.123 8.414-2.123 4.785.02 7.076 1.462 7.61 1.946 1.762 1.51 2.66 5.125 2.004 10.423zm-6.864-3.99c.02.425-.617.455-.637.03-.054-1.086-.563-1.615-1.61-1.674-.424-.025-.384-.662.035-.637 1.378.074 2.143.864 2.212 2.281zm1.003.558c.05-2.093-1.26-3.733-3.743-3.915-.42-.03-.375-.667.044-.637 2.864.207 4.39 2.177 4.336 4.567-.005.425-.647.405-.637-.015zm2.32.662c.005.425-.636.43-.636.005-.03-4.024-2.711-6.217-5.965-6.241-.42-.005-.42-.637 0-.637 3.639.024 6.567 2.538 6.602 6.873zm-.557 4.844v.01c-.534.938-1.531 1.975-2.558 1.644l-.01-.015c-1.042-.291-3.496-1.555-5.046-2.79-.8-.632-1.531-1.377-2.094-2.093a16.02 16.02 0 01-1.52-2.301C6.241 8.799 6.01 7.95 6.01 7.95c-.33-1.028.702-2.025 1.645-2.558h.01c.454-.237.888-.158 1.18.192 0 0 .612.731.874 1.092.247.335.577.874.75 1.175.301.538.114 1.086-.182 1.313l-.593.474c-.301.242-.262.691-.262.691s.88 3.323 4.163 4.163c0 0 .449.04.691-.262l.474-.592c.227-.297.775-.484 1.313-.183.726.41 1.65 1.047 2.262 1.624.345.282.424.711.188 1.166z"
                ></path>
            </svg>
        );
    };
    let WhatsAppSVG = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="none"
                viewBox="0 0 26 26"
            >
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M22.317 3.674A12.51 12.51 0 0018.235.95 12.557 12.557 0 0013.413 0C6.475 0 .827 5.62.824 12.527c0 2.208.58 4.363 1.68 6.263L.72 25.28l6.673-1.742a12.64 12.64 0 006.015 1.525h.006c6.936 0 12.584-5.62 12.587-12.527a12.405 12.405 0 00-.95-4.798 12.452 12.452 0 00-2.733-4.064zM13.413 22.95h-.004c-1.874 0-3.714-.502-5.326-1.453l-.381-.226-3.96 1.034 1.056-3.841-.248-.394a10.358 10.358 0 01-1.6-5.542c.003-5.74 4.696-10.411 10.467-10.411a10.437 10.437 0 014.005.789 10.398 10.398 0 013.391 2.264 10.351 10.351 0 012.272 3.378c.525 1.265.793 2.62.79 3.989-.003 5.74-4.697 10.413-10.462 10.413zm5.739-7.8c-.316-.157-1.86-.913-2.15-1.018-.287-.105-.496-.156-.706.156-.21.313-.814 1.018-.997 1.227-.184.21-.368.234-.682.078-.314-.156-1.328-.487-2.53-1.553-.934-.83-1.565-1.855-1.75-2.169-.183-.314-.019-.483.14-.639.141-.14.314-.366.47-.548.158-.183.21-.313.315-.522.105-.21.053-.392-.027-.549-.078-.157-.708-1.698-.97-2.325-.254-.607-.513-.526-.707-.534-.2-.008-.4-.012-.601-.011a1.163 1.163 0 00-.84.39c-.289.314-1.1 1.07-1.1 2.611 0 1.541 1.127 3.03 1.284 3.24.157.209 2.218 3.37 5.373 4.726.751.322 1.337.515 1.793.66.753.239 1.439.204 1.981.124.605-.09 1.86-.756 2.123-1.487.262-.732.262-1.358.184-1.49-.079-.13-.29-.21-.603-.366z"
                    clipRule="evenodd"
                ></path>
            </svg>
        );
    };

    return (
        <FooterBlock>
            <DesktopFooter>
                <LinksBlock>
                    <Logo>
                        <LogoSVG/>
                    </Logo>
                    <Links>
                        <InstagramSVG/>
                        <FacebookSVG/>
                        <TelegramSVG/>
                        <ViberSVG/>
                        <WhatsAppSVG/>
                    </Links>
                </LinksBlock>
                <Contacts>
                    <Element>
                        <ViberSmallSVG/>
                        <ElementText>Валерия: +380505859409</ElementText>
                    </Element>
                    <Element>
                        <ViberSmallSVG/>
                        <ElementText>Анна: +380505859409</ElementText>
                    </Element>
                    <Element>
                        <ViberSmallSVG/>
                        <ElementText>Валерия: +380505859409</ElementText>
                    </Element>
                    <LastText>Developers 2018-2022 © All rights reserved</LastText>
                </Contacts>
                <Email>hr@dv-s.com</Email>
            </DesktopFooter>
            <MobileFooter>
                <Logo>
                    <MobileLogoSVG/>
                </Logo>
                <Contacts>
                    <Element>
                        <ViberSmallSVG/>
                        <ElementText>Валерия: +380505859409</ElementText>
                    </Element>
                    <Element>
                        <ViberSmallSVG/>
                        <ElementText>Анна: +380505859409</ElementText>
                    </Element>
                    <Element>
                        <ViberSmallSVG/>
                        <ElementText>Валерия: +380505859409</ElementText>
                    </Element>
                </Contacts>
                <Links>
                    <FacebookSVG/>
                    <TelegramSVG/>
                    <ViberSVG/>
                    <InstagramSVG/>
                    <WhatsAppSVG/>
                </Links>
                <Email>hr@dv-s.com</Email>
                <LastText>Developers 2018-2022 © All rights reserved</LastText>
            </MobileFooter>
        </FooterBlock>
    )
}
export default Footer;