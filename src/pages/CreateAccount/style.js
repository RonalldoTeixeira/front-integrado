import styled from "styled-components";

export const Body = styled.body`
    height:100%;
`

export const Header = styled.header`
    background: #EDEDED;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
`

export const Svg = styled.svg`
    width: 40px;
    height: 84.021px;
    flex-shrink: 0;
    grid-column: 2/3;
`

export const ButtonEntrar = styled.button`
    border: none;
    display: grid;
    align-items: center;
    color: #4088CB;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    grid-column: 3/4;
    @media screen and (max-device-width: 480px) {
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        font-size: 20px;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-device-width : 480px) {
        margin: 10%;
    }

    @media screen and (min-device-width : 481px) {
        margin: 10%;
    }

    @media screen and (min-device-width : 1200px) {
        margin: 5%;
    }
`

export const Form = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-device-width : 480px) {
        margin-top: 100px;
    }

    @media screen and (min-device-width : 481px) {
        margin: 10%;
    }

    @media screen and (min-device-width : 1200px) {
        margin: 5%;
    }
`

export const InputApelido = styled.input`
    border-radius: 4px;
    border: 1px solid #D5D8DE;
    background: #FFF;
    flex-shrink: 0;
    margin-top: 5px;
    height: 8vh;

    color: #323941;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.800000011920929;

    @media screen and (max-device-width: 480px) {
        width: 80vw;
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        width: 60vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        width: 35vw;
        font-size: 20px;
    }
`

export const InputEmail = styled.input`
    border-radius: 4px;
    border: 1px solid #D5D8DE;
    background: #FFF;
    flex-shrink: 0;
    margin-top: 5px;
    height: 8vh;

    color: #323941;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.800000011920929;

    @media screen and (max-device-width: 480px) {
        width: 80vw;
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        width: 60vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        width: 35vw;
        font-size: 20px;
    }
`

export const InputSenha = styled.input`
    border-radius: 4px;
    border: 1px solid #D5D8DE;
    background: #FFF;
    flex-shrink: 0;
    margin-top: 5px;
    height: 8vh;


    color: #323941;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.800000011920929;

    @media screen and (max-device-width: 480px) {
        width: 80vw;
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        width: 60vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        width: 35vw;
        font-size: 20px;
    }
`

export const P = styled.p`

    @media screen and (max-device-width: 480px){
        margin: 60px 0 20px 0;
        font-size: 13px;
    }
    
    @media screen and (min-device-width : 481px) {
        margin: 60px 0 20px 0;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        margin: 60px 0 20px 0;
        font-size: 20px;
    }
`

export const Div = styled.div`
    display: flex;
`

export const Label = styled.p`
    @media screen and (max-device-width: 480px){
        margin-left: 10px;
        font-size: 13px;
    }
    @media screen and (min-device-width : 481px) {
        margin-left: 10px;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        margin-left: 10px;
        font-size: 20px;
    }
`

export const ButtonCadastrar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 27px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    margin: 20px 0 0 0;
    height: 8vh;
    padding: 9px 3px;
    
    color: #FFF;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media screen and (max-device-width: 480px) {    
        margin-top: 35px;
        width: 80vw;
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        margin: 60px 0 0 0;
        width: 30vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        margin: 60px 0 0 0;
        width: 20vw;
        font-size: 20px;
    }
`