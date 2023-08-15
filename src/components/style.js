import styled from "styled-components";


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
        margin: 10% 10% 0 10%;
        width: 65vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        margin: 5% 5% 0 5%;
        width: 50vw;
        font-size: 20px;
    }
`

export const P = styled.p`
    word-wrap: break-word;
    @media screen and (max-device-width : 480px) {
        width: 80vw;
        font-size: 13px;
    }

    @media screen and (min-device-width : 481px) {
        width: 65vw;
        font-size: 15px;
    }

    @media screen and (min-device-width : 1200px) {
        width: 50vw;
        font-size: 20px;
    }
`

export const DivInteracoes = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2%;
    position: absolute;
    @media screen and (max-device-width : 480px) {
        margin-top: 100px;
    }

    @media screen and (min-device-width : 481px) {
        margin-top: 95px;
    }

    @media screen and (min-device-width : 1200px) {
        margin-top: 85px;
    }
    
`

export const DivLikeDislike = styled.div`
    display: flex;
    width: 98px;
    height: 27.886px;
    padding: 4.667px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;

    border-radius: 28px;
    border: 0.797px solid #ECECEC;
`

export const DivMessage =  styled.div`
    display: inline-flex;
    padding: 4.667px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 28px;
    border: 0.793px solid #ECECEC;
`