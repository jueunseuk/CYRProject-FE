import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
`;

export const Description = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 13px;
    margin-top: 10px;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top: 20px;
`;

export const Text = styled.span`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    gap: ${({$gap}) => $gap || "10px"};
    align-items: center;
`;

export const CalendarUploadButton = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    width: 225px;
    height: 30px;
    border: 1px solid #E7E7E7;
    background-color: white;
    color: #C6BC73;
    cursor: pointer;
    margin-top: 45px;
`;

export const Icon = styled.img`
    width: 11px;
    height: 11px;
`;