import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-height: center;
    width: 100%;
`;

export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    height: 100%;
    border-bottom: 2px solid black;
    cursor: default;
`;

export const Iframe = styled.iframe`
    width: 100%;
    height: 480px;
`;