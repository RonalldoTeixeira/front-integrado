import styled from "styled-components";

// export const Div = styled.div`
// margin: 20px;
// display: flex;

// `

export const Div = styled.div`
    padding: 9px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 25vh;
    border-radius: 12px;
    border: 1px solid #E0E0E0;
    background: #FBFBFB;
    @media screen and (max-device-width : 480px) {
        margin: 10% 10% 0 10%;
        width: 80vw;
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        margin: 10% 10% 8% 10%;
        width: 65vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        margin: 5% 5% 3% 5%;
        width: 50vw;
        font-size: 20px;
    }
`

export const P = styled.p`
width: 50vw; background: gold; word-wrap: break-word;
`

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
export const SvgX = styled.svg`
    width: 40px;
    height: 84.021px;
    flex-shrink: 0;
    grid-column: 1/2;
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

export const InputCreatePost = styled.textarea`
    border: none;
    padding: 6px;
    height: 20vh;
    resize: none;
    border-radius: 12px;
    background: #EDEDED;
    @media screen and (max-device-width : 480px) {
        margin: 10% 10% 0 10%;
        width: 80vw;
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        margin: 1px;
        width: 65vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        margin: 1px;
        width: 50vw;
        font-size: 20px;
    }
`

export const ButtonResponder = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    height: 8vh;
    padding: 9px 3px;

    color: #FFF;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media screen and (max-device-width: 480px) {    
        margin-top: 10px;
        width: 80vw;
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        margin-top: 10px;
        width: 30vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        margin-top: 10px;
        width: 20vw;
        font-size: 20px;
    }
`

export const ButtonSair = styled.button`
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