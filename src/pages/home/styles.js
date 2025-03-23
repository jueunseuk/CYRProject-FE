import styled from "styled-components";

export const HorizontalWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 15px;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width};
`;

export const Contour = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E7E7E7;
    border: none;
    margin: 50px 0 35px 0;
`;