import styled from "styled-components";

export const HorizontalWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 865px;
    background-color: blue;
`;

export const Contour = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E7E7E7;
    border: none;
    margin: 50px 0 35px 0;
`;