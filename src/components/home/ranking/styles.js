import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 24px;
    border-bottom: 2px solid black;
    cursor: defualt;
`;

export const ContentArea = styled.div`
    display:flex;
    justify-content: flex-start;
    gap: 5px;
    width: 100%;
    height: 140px;
    padding: 10px 0;
`;

export const RankItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 5px;
    padding: 7px 10px;
    transition: all 0.2s ease;
`;