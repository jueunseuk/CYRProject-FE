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

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 175px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    margin-left: 30px;
`;

